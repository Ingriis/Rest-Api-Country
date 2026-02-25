import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from '../../services/country';

@Component({
  selector: 'app-busqueda-moneda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './busqueda-moneda.html',
  styleUrl: './busqueda-moneda.css'
})
export class BusquedaMoneda {
  countries: any[] = [];          
  selectedCountry: any = null;     
  loading = false;
  error: string | null = null;

  constructor(private countryService: CountryService) {}

  buscarPorMoneda(moneda: string) {
    if (!moneda?.trim()) return;

    this.loading = true;
    this.error = null;
    
    this.countryService.getCountriesByCurrency(moneda)
      .subscribe({
        next: (data: any) => {
          this.countries = data;                   
          this.selectedCountry = data[0] || null;   
          this.loading = false;
        },
        error: (error) => {
          console.error('Error:', error);
          this.error = 'No se encontraron países para esa moneda. Prueba con EUR, USD, MXN...';
          this.countries = [];
          this.selectedCountry = null;
          this.loading = false;
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