import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Currency } from '../../types/currency';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-currency-creation',
  templateUrl: './currency-creation.component.html',
  styleUrls: ['./currency-creation.component.scss']
})
export class CurrencyCreationComponent implements OnInit {

  @Input() existingCurrencies: Currency[];
  @Output() currencyAdded = new EventEmitter<Currency>();

  isCurrencyAlreadyExisting: boolean = false;
  isSendingToBackend: boolean = false;

  currencyForm = this.fb.group({
    name: ['', Validators.required],
    shortName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
  })

  constructor(private fb: FormBuilder, private currencyService: CurrencyService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.isCurrencyAlreadyExisting = false;
    this.isSendingToBackend = true; 
    let currencyFromForm: Currency = new Currency(this.currencyForm.value.name, this.currencyForm.value.shortName);
    if(this.checkIfCurrencyIsExisting(currencyFromForm)) {
      this.isCurrencyAlreadyExisting = true;
      this.isSendingToBackend = false;
    } else {
      this.createCurrency(currencyFromForm);
    }
  }

  private checkIfCurrencyIsExisting(currency: Currency): boolean {
    let duplicates: Currency[] = this.existingCurrencies.filter(c => c.shortName.toLowerCase() == currency.shortName.toLowerCase());
    return duplicates.length > 0;
  }

  private createCurrency(currency: Currency): void {
    this.currencyService.createCurrency(currency).subscribe(
      currencies => {
        this.isSendingToBackend = false;
        if(currencies) {
          this.currencyAdded.emit(currency);
          this.currencyForm.reset();
        }
      }
    ) 
  }

}
