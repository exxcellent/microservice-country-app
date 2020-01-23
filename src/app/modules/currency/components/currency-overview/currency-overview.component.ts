import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { Currency } from '../../types/currency';

@Component({
  selector: 'app-currency-overview',
  templateUrl: './currency-overview.component.html',
  styleUrls: ['./currency-overview.component.scss']
})
export class CurrencyOverviewComponent implements OnInit {

  currencies: Currency[] = [];
  isLoading: boolean = true;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.getCurrencies();
  }

  private getCurrencies(): void {
    this.currencyService.getCurrencies().subscribe(
      currencies => {
        if(currencies) {
          this.currencies = currencies;
        }
        this.isLoading = false;
      }
    )
  }

  private onCurrencyAdded(currency: Currency): void {
    this.currencies.push(currency);
  }
}
