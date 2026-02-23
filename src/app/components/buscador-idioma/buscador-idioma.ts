import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from '../../services/country';

@Component({
  selector: 'app-buscador-idioma',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buscador-idioma.html',
  styleUrl: './buscador-idioma.css'
})
export class SearchLanguage {
  countries: any[] = [];
  jsonData: any = null;
  errorMessage = '';

  constructor(private countryService: CountryService) {}

  buscarPorIdioma(idioma: string) {
    if (!idioma.trim()) return;
    
    this.errorMessage = '';
    this.jsonData = null;
    
    this.countryService.getCountriesByLanguage(idioma.toLowerCase())
      .subscribe({
        next: (data: any) => {
          this.countries = data;
          this.jsonData = data;
        },
        error: (err) => {
          this.countries = [];
          this.jsonData = null;
          this.errorMessage = 'No se encontraron países para ese idioma';
          console.error('Error:', err);
        }
      });
  }
}