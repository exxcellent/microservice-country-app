import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryLanguageCurrencyOverviewComponent } from './country-language-currency-overview.component';

describe('CountryLanguageCurrencyOverviewComponent', () => {
  let component: CountryLanguageCurrencyOverviewComponent;
  let fixture: ComponentFixture<CountryLanguageCurrencyOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryLanguageCurrencyOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryLanguageCurrencyOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
