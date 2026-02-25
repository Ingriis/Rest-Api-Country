import { Routes } from '@angular/router';
import { SearchCountry } from './components/buscador-pais/buscador-pais';
import { SearchLanguage } from './components/buscador-idioma/buscador-idioma';
import { AllCountries } from './pages/all-countries/all-countries';
import { BusquedaMoneda } from './components/busqueda-moneda/busqueda-moneda'; 

// Definición de rutas de la aplicación
export const routes: Routes = [
  { path: '', component: SearchCountry },
  { path: 'idioma', component: SearchLanguage }, 
  { path: 'all', component: AllCountries },
  { path: 'moneda', component: BusquedaMoneda } 
];