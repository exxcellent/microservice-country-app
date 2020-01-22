import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryOverviewComponent } from './components/country-overview/country-overview.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryCreationComponent } from './components/country-creation/country-creation.component';



@NgModule({
  declarations: [CountryOverviewComponent, CountryTableComponent, CountryCreationComponent],
  imports: [
    CommonModule
  ]
})
export class CountryModule { }
