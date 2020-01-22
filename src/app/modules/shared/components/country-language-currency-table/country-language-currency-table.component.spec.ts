import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryLanguageCurrencyTableComponent } from './country-language-currency-table.component';

describe('CountryLanguageCurrencyTableComponent', () => {
  let component: CountryLanguageCurrencyTableComponent;
  let fixture: ComponentFixture<CountryLanguageCurrencyTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryLanguageCurrencyTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryLanguageCurrencyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
