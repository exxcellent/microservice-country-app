import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'countries', loadChildren: 'src/app/modules/country/country.module#CountryModule'},
  {path: 'languages', loadChildren: 'src/app/modules/language/language.module#LanguageModule'},
  {path: 'currencies', loadChildren: 'src/app/modules/currency/currency.module#CurrencyModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
