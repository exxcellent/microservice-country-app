import { Component, OnInit } from '@angular/core';
import { Country } from '../../types/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-overview',
  templateUrl: './country-overview.component.html',
  styleUrls: ['./country-overview.component.scss']
})
export class CountryOverviewComponent implements OnInit {

  countries: Country[] = [];
  isLoading: boolean = true;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getCountries();
  }

  private getCountries(): void {
    this.countryService.getCountries().subscribe(
      countries => {
        if(countries) {
          this.countries = countries;
        }
        this.isLoading = false;
      }
    )
  }

  onCountryAdded(country: Country): void {
    this.countries.push(country);
  }

}
