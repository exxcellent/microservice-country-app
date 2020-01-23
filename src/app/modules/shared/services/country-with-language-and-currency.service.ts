import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CountryWithLanguageAndCurrency } from '../types/country-with-language-and-currency';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const servicesSubUrl = "api/v1/countries-with-languages-and-currencies";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CountryWithLanguageAndCurrencyService {

  serviceUrl: string;

  constructor(private httpClient: HttpClient) { 
    this.serviceUrl = `${environment.countryServiceUrl}/${servicesSubUrl}`
  }

  public getCountriesWithLanguageAndCurrency(): Observable<CountryWithLanguageAndCurrency[]> {
    return this.httpClient.get<CountryWithLanguageAndCurrency[]>(this.serviceUrl).pipe(catchError(this.handleError<any>(`get countries with language and currency`)));
  }

  public createCountryWithLanguageAndCurrency(country: CountryWithLanguageAndCurrency): Observable<CountryWithLanguageAndCurrency[]> {
    return this.httpClient.post<CountryWithLanguageAndCurrency[]>(this.serviceUrl, country, httpOptions)
                          .pipe(catchError(
                            this.handleError<any>(`create country ${country.country.name} with language ${country.language.name} and currency ${country.currency.name}`)
                          ));
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    }
  }
}
