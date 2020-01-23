import { Injectable } from '@angular/core';
import { Country } from '../types/country';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { Language } from '../../language/types/language';
import { catchError } from 'rxjs/operators';

const servicesSubUrl = "api/v1/countries";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countryServiceUrl: string;

  constructor(private httpClient: HttpClient) {
    this.countryServiceUrl = `${environment.countryServiceUrl}/${servicesSubUrl}`;
  }

  public getCountries(): Observable<Language[]> {
    return this.httpClient.get<Country[]>(this.countryServiceUrl).pipe(catchError(this.handleError<any>(`get countries`)));
  }

  public getCountry(shortName: string): Observable<Country[]> {
    const url = `${this.countryServiceUrl}/${shortName}`;
    return this.httpClient.get<Country[]>(url).pipe(catchError(this.handleError<any>(`get country ${shortName}`)));
  }

  public createCountry(country: Country): Observable<Country[]> {
    return this.httpClient.post<Country[]>(this.countryServiceUrl, country, httpOptions).pipe(catchError(this.handleError<any>(`create country ${country.name}`)));
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    }
  }
}
