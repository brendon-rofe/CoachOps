import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <div
      class="relative flex min-h-screen w-full flex-col bg-[#111a22] text-white overflow-x-hidden"
      style='font-family: Inter, "Noto Sans", sans-serif;'
    >
      <div class="layout-container flex h-full grow flex-col">
        <app-navbar />
        <main class="px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <router-outlet />
          </div>
        </main>
      </div>
    </div>
  `,
})
export class AppComponent {}
