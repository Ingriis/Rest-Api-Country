import { Routes } from '@angular/router';
import { SearchCountry } from './components/buscador-pais/buscador-pais';
import { SearchLanguage } from './components/buscador-idioma/buscador-idioma';

export const routes: Routes = [
  { path: '', component: SearchCountry },
  { path: 'idioma', component: SearchLanguage }
];