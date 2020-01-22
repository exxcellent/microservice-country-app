import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyOverviewComponent } from './components/currency-overview/currency-overview.component';
import { CurrencyTableComponent } from './components/currency-table/currency-table.component';
import { CurrencyCreationComponent } from './components/currency-creation/currency-creation.component';



@NgModule({
  declarations: [CurrencyOverviewComponent, CurrencyTableComponent, CurrencyCreationComponent],
  imports: [
    CommonModule
  ]
})
export class CurrencyModule { }
