import { Injectable } from '@angular/core';
import { Language } from '../types/language';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const servicesSubUrl = "api/v1/languages";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  languageServiceUrl: string;

  constructor(private httpClient: HttpClient) {
    this.languageServiceUrl = `${environment.languageServiceUrl}/${servicesSubUrl}`;
  }

  public getLanguages(): Observable<Language[]> {
    return this.httpClient.get<Language[]>(this.languageServiceUrl).pipe(catchError(this.handleError<any>(`get languages`)));
  }

  public getLanguage(shortName: string): Observable<Language[]> {
    const url = `${this.languageServiceUrl}/${shortName}`;
    return this.httpClient.get<Language[]>(url).pipe(catchError(this.handleError<any>(`get language ${shortName}`)));
  }

  public createLanguage(language: Language): Observable<Language[]> {
    return this.httpClient.post<Language[]>(this.languageServiceUrl, language, httpOptions).pipe(catchError(this.handleError<any>(`create language ${language.name}`)));
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    }
  }
}
