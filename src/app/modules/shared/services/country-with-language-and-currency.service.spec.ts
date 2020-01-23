import { TestBed } from '@angular/core/testing';

import { CountryWithLanguageAndCurrencyService } from './country-with-language-and-currency.service';

describe('CountryWithLanguageAndCurrencyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryWithLanguageAndCurrencyService = TestBed.get(CountryWithLanguageAndCurrencyService);
    expect(service).toBeTruthy();
  });
});
