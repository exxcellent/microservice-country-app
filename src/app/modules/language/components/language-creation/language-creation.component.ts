import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { Language } from '../../types/language';

@Component({
  selector: 'app-language-creation',
  templateUrl: './language-creation.component.html',
  styleUrls: ['./language-creation.component.scss']
})
export class LanguageCreationComponent implements OnInit {

  @Input() existingLanguages: Language[];
  @Output() languageAdded = new EventEmitter<Language>();

  isLanguageAlreadyExisting: boolean = false;
  isSendingToBackend: boolean = false;

  languageForm = this.fb.group({
    name: ['', Validators.required],
    shortName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
  })

  constructor(private fb: FormBuilder, private languageService: LanguageService) { }

  ngOnInit() {
  }

  private onSubmit(): void {
    this.isLanguageAlreadyExisting = false;
    this.isSendingToBackend = true; 
    let languageFromForm: Language = new Language(this.languageForm.value.shortName, this.languageForm.value.name);
    if(this.checkIfLanguageIsExisting(languageFromForm)) {
      this.isLanguageAlreadyExisting = true;
      this.isSendingToBackend = false;
    } else {
      this.createLanguage(languageFromForm);
    }
  }

  private checkIfLanguageIsExisting(language: Language): boolean {
    let duplicates: Language[] = this.existingLanguages.filter(l => l.shortName.toLowerCase() == language.shortName.toLowerCase());
    return duplicates.length > 0;
  }

  private createLanguage(language: Language): void {
    this.languageService.createLanguage(language).subscribe(
      languages => {
        this.isSendingToBackend = false;
        if(languages) {
          this.languageAdded.emit(language);
          this.languageForm.reset();
        }
      }
    ) 
  }
}
