import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Servicio disponible en toda la app
})
export class CountryService {

  // URL base de la API RestCountries
  private apiUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  // Obtiene países por nombre
  getCountryByName(name: string) {
    return this.http.get<any>(`${this.apiUrl}/name/${name}`);
  }

  // Obtiene países por idioma
  getCountriesByLanguage(language: string) {
    return this.http.get<any>(`${this.apiUrl}/lang/${language}`);
  }
// Obtiene países por moneda
  getCountriesByCurrency(currency: string) {
    return this.http.get<any>(`${this.apiUrl}/currency/${currency}`); 
  }
}