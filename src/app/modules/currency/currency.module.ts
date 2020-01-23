import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyOverviewComponent } from './components/currency-overview/currency-overview.component';
import { CurrencyTableComponent } from './components/currency-table/currency-table.component';
import { CurrencyCreationComponent } from './components/currency-creation/currency-creation.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: CurrencyOverviewComponent},
];

@NgModule({
  declarations: [CurrencyOverviewComponent, CurrencyTableComponent, CurrencyCreationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class CurrencyModule { }
