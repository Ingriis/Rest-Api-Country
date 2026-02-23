import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', // Componente raíz de la aplicación
  standalone: true, // Componente standalone (sin NgModule)
  imports: [RouterModule, RouterOutlet], // Habilita navegación y router-outlet
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}