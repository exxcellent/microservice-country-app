import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryLanguageCurrencyCreationComponent } from './country-language-currency-creation.component';

describe('CountryLanguageCurrencyCreationComponent', () => {
  let component: CountryLanguageCurrencyCreationComponent;
  let fixture: ComponentFixture<CountryLanguageCurrencyCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryLanguageCurrencyCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryLanguageCurrencyCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
