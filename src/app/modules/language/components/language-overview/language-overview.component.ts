import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Language } from '../../types/language';

@Component({
  selector: 'app-language-overview',
  templateUrl: './language-overview.component.html',
  styleUrls: ['./language-overview.component.scss']
})
export class LanguageOverviewComponent implements OnInit {

  languages: Language[] = [];
  isLoading: boolean = true;
  
  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.getLanguages();
  }

  private getLanguages(): void {
    this.languageService.getLanguages().subscribe(
      languages => {
        if(languages) {
          this.languages = languages;
        }
        this.isLoading = false;
      }
    )
  }

  private onLanguageAdded(languages: Language[]): void {
    this.languages = languages;
  }

}
