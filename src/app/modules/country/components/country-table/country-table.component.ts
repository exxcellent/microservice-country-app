import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../types/country';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.scss']
})
export class CountryTableComponent implements OnInit {

  @Input() countries: Country[];

  constructor() { }

  ngOnInit() {
  }

}
