import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from '../../services/country';

@Component({
  selector: 'app-buscador-pais',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buscador-pais.html',
  styleUrl: './buscador-pais.css'
})
export class SearchCountry {

  country: any;
  jsonData: any;
  currencyName = 'N/A';

  constructor(private countryService: CountryService) {}

  buscarPais(nombre: string) {
    if (!nombre) return;

    this.countryService.getCountryByName(nombre)
      .subscribe({
        next: (data: any) => {
          this.country = data[0];
          this.jsonData = data[0];

          if (this.country?.currencies) {
            const currency = Object.values(this.country.currencies)[0] as any;
            this.currencyName = currency?.name || 'N/A';
          } else {
            this.currencyName = 'N/A';
          }
        },
        error: () => {
          this.country = null;
          this.jsonData = null;
          this.currencyName = 'N/A';
        }
      });
  }
}
