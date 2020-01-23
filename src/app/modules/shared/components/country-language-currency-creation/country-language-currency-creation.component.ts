import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CountryWithLanguageAndCurrency } from '../../types/country-with-language-and-currency';
import { Country } from 'src/app/modules/country/types/country';
import { LanguageService } from 'src/app/modules/language/services/language.service';
import { Currency } from 'src/app/modules/currency/types/currency';
import { CountryService } from 'src/app/modules/country/services/country.service';
import { CurrencyService } from 'src/app/modules/currency/services/currency.service';
import { Language } from 'src/app/modules/language/types/language';
import { FormBuilder, Validators } from '@angular/forms';
import { CountryWithLanguageAndCurrencyService } from '../../services/country-with-language-and-currency.service';

@Component({
  selector: 'app-country-language-currency-creation',
  templateUrl: './country-language-currency-creation.component.html',
  styleUrls: ['./country-language-currency-creation.component.scss']
})
export class CountryLanguageCurrencyCreationComponent implements OnInit {

  @Input() existingCountries: Country[];
  @Output() countryAdded = new EventEmitter<CountryWithLanguageAndCurrency>();

  countries: Country[] = [];
  languages: Language[] = [];
  currencies: Currency[] = [];
  areCountriesLoading: boolean = true;
  areLanguagesLoading: boolean = true;
  areCurrenciesLoading: boolean = true;
  areIncompleteCountriesExisting: boolean = true;
  isSendingToBackend: boolean = false;

  countryLanguageCurrencyForm = this.fb.group({
    country: [Validators.required],
    language: [Validators.required],
    currency: [Validators.required]
  })

  constructor(private countryService: CountryService, 
              private languageService: LanguageService, 
              private currencyService: CurrencyService, 
              private countryLanguageCurrencyService: CountryWithLanguageAndCurrencyService, 
              private fb: FormBuilder) { }

  ngOnInit() {
    this.getCountries();
    this.getLanguages();
    this.getCurrencies();
  }

  private getCountries(): void {
    this.countryService.getCountries().subscribe(
      countries => {
        if(countries) {
          this.countries = this.filterCountries(countries);
        }
        this.areCountriesLoading = false;
      }
    )
  }

  private filterCountries(countries: Country[]): Country[] {
    // filter the complete countries to keep only the incomplete (without language and currency) to show in the dropdown for the countries.
    const incompleteCountries: Country[] = countries.filter(c => !this.existingCountries.some(e => e.shortName === c.shortName));
    if(incompleteCountries.length === 0) {
      this.areIncompleteCountriesExisting = false;
    } else {
      this.countryLanguageCurrencyForm.controls['country'].setValue(incompleteCountries[0]);
    }
    return incompleteCountries;
  }

  private getLanguages(): void {
    this.languageService.getLanguages().subscribe(
      languages => {
        if(languages) {
          this.languages = languages;
          this.countryLanguageCurrencyForm.controls['language'].setValue(languages[0]);
        }
        this.areLanguagesLoading = false;
      }
    )
  }

  private getCurrencies(): void {
    this.currencyService.getCurrencies().subscribe(
      currencies => {
        if(currencies) {
          this.currencies = currencies;
          this.countryLanguageCurrencyForm.controls['currency'].setValue(currencies[0]);
        }
        this.areCurrenciesLoading = false;
      }
    )
  }

  private onSubmit(): void {
    this.isSendingToBackend = true;
    const countryLanguageCurrencyMapping: CountryWithLanguageAndCurrency = new CountryWithLanguageAndCurrency(this.countryLanguageCurrencyForm.value.country, this.countryLanguageCurrencyForm.value.language, this.countryLanguageCurrencyForm.value.currency);
    this.countryLanguageCurrencyService.createCountryWithLanguageAndCurrency(countryLanguageCurrencyMapping).subscribe(
      result => {
        this.isSendingToBackend = false;
        this.countries = this.countries.filter(c => c !== countryLanguageCurrencyMapping.country);
        if(this.countries.length === 0) {
          this.areIncompleteCountriesExisting = false;
        }
        this.countryAdded.emit(countryLanguageCurrencyMapping);
      }
    )
  }

}
