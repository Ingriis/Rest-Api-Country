import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  getCountryByName(name: string) {
    return this.http.get<any>(`${this.apiUrl}/name/${name}`);
  }
  getCountriesByLanguage(language: string) {
    return this.http.get<any>(`${this.apiUrl}/lang/${language}`);
  }
}
