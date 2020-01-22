import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageOverviewComponent } from './components/language-overview/language-overview.component';
import { LanguageTableComponent } from './components/language-table/language-table.component';
import { LanguageCreationComponent } from './components/language-creation/language-creation.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {path: '', component: LanguageOverviewComponent},
];

@NgModule({
  declarations: [LanguageOverviewComponent, LanguageTableComponent, LanguageCreationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class LanguageModule { }
