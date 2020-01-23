import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryOverviewComponent } from './components/country-overview/country-overview.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryCreationComponent } from './components/country-creation/country-creation.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: CountryOverviewComponent},
];

@NgModule({
  declarations: [CountryOverviewComponent, CountryTableComponent, CountryCreationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CountryModule { }
