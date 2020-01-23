import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { Currency } from '../types/currency';
import { catchError } from 'rxjs/operators';

const servicesSubUrl = "api/v1/currencies";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  currencyServiceUrl: string;

  constructor(private httpClient: HttpClient) {
    this.currencyServiceUrl = `${environment.currencyServiceUrl}/${servicesSubUrl}`;
  }

  public getCurrencies(): Observable<Currency[]> {
    return this.httpClient.get<Currency[]>(this.currencyServiceUrl).pipe(catchError(this.handleError<any>(`get currencies`)));
  }

  public getCurrency(shortName: string): Observable<Currency[]> {
    const url = `${this.currencyServiceUrl}/${shortName}`;
    return this.httpClient.get<Currency[]>(url).pipe(catchError(this.handleError<any>(`get currency ${shortName}`)));
  }

  public createCurrency(currency: Currency): Observable<Currency[]> {
    return this.httpClient.post<Currency[]>(this.currencyServiceUrl, currency, httpOptions).pipe(catchError(this.handleError<any>(`create currency ${currency.name}`)));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    }
  }

}
