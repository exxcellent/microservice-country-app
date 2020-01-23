import { Component, OnInit, Input } from '@angular/core';
import { Language } from '../../types/language';

@Component({
  selector: 'app-language-table',
  templateUrl: './language-table.component.html',
  styleUrls: ['./language-table.component.scss']
})
export class LanguageTableComponent implements OnInit {

  @Input() languages: Language[];

  constructor() { }

  ngOnInit() {
  }

}
