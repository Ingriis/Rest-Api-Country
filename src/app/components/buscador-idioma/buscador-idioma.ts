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
  selectedCountry: any = null; 

  constructor(private countryService: CountryService) {}

  buscarPorIdioma(idioma: string) {
    if (!idioma) return;

    this.countryService.getCountriesByLanguage(idioma)
      .subscribe({
        next: (data: any) => {
          this.countries = data;
          this.selectedCountry = data[0] || null;
        },
        error: (error) => {
          console.error('Error:', error);
          this.countries = [];
          this.selectedCountry = null;
        }
      });
  }

  selectCountry(country: any) {
    this.selectedCountry = country;
  }

  getCurrencyName(country: any): string {
    if (country?.currencies) {
      const currency = Object.values(country.currencies)[0] as any;
      return currency?.name || 'N/A';
    }
    return 'N/A';
  }
}