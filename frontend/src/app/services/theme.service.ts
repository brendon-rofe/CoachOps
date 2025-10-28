import { Injectable, signal, computed } from '@angular/core';

type Mode = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private key = 'theme';
  mode = signal<Mode>('light');
  isDark = computed(() => this.mode() === 'dark');

  constructor() {
    const saved = (localStorage.getItem(this.key) as Mode | null);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.set(saved ?? (prefersDark ? 'dark' : 'light'));
  }

  toggle() { this.set(this.isDark() ? 'light' : 'dark'); }

  private set(mode: Mode) {
    this.mode.set(mode);
    document.documentElement.classList.toggle('dark', mode === 'dark');
    localStorage.setItem(this.key, mode);
  }
}
