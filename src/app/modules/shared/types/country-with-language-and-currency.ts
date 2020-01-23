import { Country } from '../../country/types/country';
import { Currency } from '../../currency/types/currency';
import { Language } from '../../language/types/language';

export class CountryWithLanguageAndCurrency {
    
    constructor(country: Country, language: Language, currency: Currency) {
        this.country = country;
        this.language = language;
        this.currency = currency;
    }

    country: Country;
    language: Language;
    currency: Currency;
}
