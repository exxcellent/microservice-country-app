import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryLanguageCurrencyOverviewComponent } from './components/country-language-currency-overview/country-language-currency-overview.component';
import { CountryLanguageCurrencyCreationComponent } from './components/country-language-currency-creation/country-language-currency-creation.component';
import { CountryLanguageCurrencyTableComponent } from './components/country-language-currency-table/country-language-currency-table.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {path: '', component: CountryLanguageCurrencyOverviewComponent},
];

@NgModule({
  declarations: [CountryLanguageCurrencyOverviewComponent, CountryLanguageCurrencyCreationComponent, CountryLanguageCurrencyTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class SharedModule {}
