import { Component, OnInit, Input } from '@angular/core';
import { CountryWithLanguageAndCurrency } from '../../types/country-with-language-and-currency';

@Component({
  selector: 'app-country-language-currency-table',
  templateUrl: './country-language-currency-table.component.html',
  styleUrls: ['./country-language-currency-table.component.scss']
})
export class CountryLanguageCurrencyTableComponent implements OnInit {

  @Input() countriesWithLanguageAndCurrency: CountryWithLanguageAndCurrency[];

  constructor() { }

  ngOnInit() {
  }

}
