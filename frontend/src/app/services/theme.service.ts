import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private key = 'theme';
  constructor() {
    const saved = localStorage.getItem(this.key);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.set((saved as 'light' | 'dark') ?? (prefersDark ? 'dark' : 'light'));
  }
  toggle() {
    const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    this.set(next);
  }
  private set(mode: 'light' | 'dark') {
    document.documentElement.classList.toggle('dark', mode === 'dark');
    localStorage.setItem(this.key, mode);
  }
}
