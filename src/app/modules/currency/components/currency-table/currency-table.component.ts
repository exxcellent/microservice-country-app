import { Component, OnInit, Input } from '@angular/core';
import { Currency } from '../../types/currency';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.scss']
})
export class CurrencyTableComponent implements OnInit {

  @Input() currencies: Currency[];

  constructor() { }

  ngOnInit() {
  }

}
