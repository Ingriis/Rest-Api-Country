import { Routes } from '@angular/router';
import { SearchCountry } from './components/buscador-pais/buscador-pais';
import { SearchLanguage } from './components/buscador-idioma/buscador-idioma';

export const routes: Routes = [
  { path: '', component: SearchCountry }, // Ruta principal: búsqueda por país
  { path: 'idioma', component: SearchLanguage }, // Ruta: búsqueda por idioma
  
];