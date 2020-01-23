import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country } from '../../types/country';
import { CountryService } from '../../services/country.service';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-country-creation',
  templateUrl: './country-creation.component.html',
  styleUrls: ['./country-creation.component.scss']
})
export class CountryCreationComponent implements OnInit {

  @Input() existingCountries: Country[];
  @Output() countryAdded = new EventEmitter<Country>();

  isCountryAlreadyExisting: boolean = false;
  isSendingToBackend: boolean = false;

  countryForm = this.fb.group({
    name: ['', Validators.required],
    shortName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
  })

  constructor(private fb: FormBuilder, private countryService: CountryService) { }

  ngOnInit() {
  }

  private onSubmit(): void {
    this.isCountryAlreadyExisting = false;
    this.isSendingToBackend = true; 
    let countryFromForm: Country = new Country(this.countryForm.value.name, this.countryForm.value.shortName);
    if(this.checkIfCountryIsExisting(countryFromForm)) {
      this.isCountryAlreadyExisting = true;
      this.isSendingToBackend = false;
    } else {
      this.createCountry(countryFromForm);
    }
  }

  private checkIfCountryIsExisting(country: Country): boolean {
    let duplicates: Country[] = this.existingCountries.filter(c => c.shortName.toLowerCase() == country.shortName.toLowerCase());
    return duplicates.length > 0;
  }

  private createCountry(country: Country): void {
    this.countryService.createCountry(country).subscribe(
      countries => {
        this.isSendingToBackend = false;
        if(countries) {
          this.countryAdded.emit(country);
          this.countryForm.reset();
        }
      }
    ) 
  }

}
