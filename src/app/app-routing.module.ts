import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryLanguageCurrencyOverviewComponent } from './modules/shared/components/country-language-currency-overview/country-language-currency-overview.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: 'src/app/modules/shared/shared.module#SharedModule'},
  {path: 'countries', loadChildren: 'src/app/modules/country/country.module#CountryModule'},
  {path: 'languages', loadChildren: 'src/app/modules/language/language.module#LanguageModule'},
  {path: 'currencies', loadChildren: 'src/app/modules/currency/currency.module#CurrencyModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
