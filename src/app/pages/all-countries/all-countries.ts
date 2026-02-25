import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-countries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-countries.html',
  styleUrls: ['./all-countries.css'],
})
export class AllCountries implements OnInit {
  countries: any[] = [];
  groupedCountries: { [key: string]: any[] } = {};
  availableLetters: string[] = [];
  sidebarOpen = false; 

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries(): void {
    this.http.get<any[]>(
      'https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population'
    )
    .subscribe({
      next: (data) => {
        this.countries = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        this.groupByLetter();
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error al cargar países:', err);
      }
    });
  }

  groupByLetter(): void {
    this.groupedCountries = {};
    this.availableLetters = [];

    const validLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    for (let country of this.countries) {
      const normalizedName = country.name.common
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toUpperCase();

      let firstLetter = normalizedName.charAt(0);

      if (!validLetters.includes(firstLetter)) {
        continue; 
      }
        if (!this.groupedCountries[firstLetter]) {
          this.groupedCountries[firstLetter] = [];
          this.availableLetters.push(firstLetter);
        }
        this.groupedCountries[firstLetter].push(country);
      }
      this.availableLetters = Array.from(new Set(this.availableLetters))
      .filter(letter => validLetters.includes(letter))
      .sort();
    }

  scrollToLetter(letter: string): void {
    const element = document.getElementById(letter);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }
}




