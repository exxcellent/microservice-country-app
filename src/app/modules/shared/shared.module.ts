import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryLanguageCurrencyOverviewComponent } from './components/country-language-currency-overview/country-language-currency-overview.component';
import { CountryLanguageCurrencyCreationComponent } from './components/country-language-currency-creation/country-language-currency-creation.component';
import { CountryLanguageCurrencyTableComponent } from './components/country-language-currency-table/country-language-currency-table.component';



@NgModule({
  declarations: [CountryLanguageCurrencyOverviewComponent, CountryLanguageCurrencyCreationComponent, CountryLanguageCurrencyTableComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }
  static forChild(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }
 }
