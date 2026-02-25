import { Routes } from '@angular/router';
import { SearchCountry } from './components/buscador-pais/buscador-pais';
import { SearchLanguage } from './components/buscador-idioma/buscador-idioma';
import { AllCountries } from './pages/all-countries/all-countries';

// Definición de rutas de la aplicación
export const routes: Routes = [
  { path: '', component: SearchCountry }, // Ruta principal: búsqueda por país
  { path: 'idioma', component: SearchLanguage }, // Ruta: búsqueda por idioma
  { path: 'all', component: AllCountries }
];
