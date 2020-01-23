import { Component, OnInit } from '@angular/core';
import { CountryWithLanguageAndCurrencyService } from '../../services/country-with-language-and-currency.service';
import { CountryWithLanguageAndCurrency } from '../../types/country-with-language-and-currency';
import { Country } from 'src/app/modules/country/types/country';

@Component({
  selector: 'app-country-language-currency-overview',
  templateUrl: './country-language-currency-overview.component.html',
  styleUrls: ['./country-language-currency-overview.component.scss']
})
export class CountryLanguageCurrencyOverviewComponent implements OnInit {

  countriesWithLanguageAndCurrency: CountryWithLanguageAndCurrency[] = [];
  existingCompleteCountries: Country[] = [];
  areCountriesWithLanguageAndCurrencyLoading: boolean = true;

  constructor(private countryWithLanguageAndCurrencyService: CountryWithLanguageAndCurrencyService) { }

  ngOnInit() {
    this.getCountriesWithLanguageAndCurrency();
  }

  private getCountriesWithLanguageAndCurrency(): void {
    this.countryWithLanguageAndCurrencyService.getCountriesWithLanguageAndCurrency().subscribe(
      countries => {
        if(countries) {
          this.countriesWithLanguageAndCurrency = countries;
          this.initCompleteCountries(countries);
        }
        this.areCountriesWithLanguageAndCurrencyLoading = false;
      }
    )
  }

  onCountryAdded(countryWithLanguageAndCurrency: CountryWithLanguageAndCurrency): void {
    this.countriesWithLanguageAndCurrency.push(countryWithLanguageAndCurrency);
  }

  private initCompleteCountries(countriesWithLanguageAndCurrency: CountryWithLanguageAndCurrency[]): void {
    countriesWithLanguageAndCurrency.forEach(c => this.existingCompleteCountries.push(c.country));
  }

}
