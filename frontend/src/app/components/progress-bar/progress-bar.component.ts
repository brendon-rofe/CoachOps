import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  template: `
    <div class="rounded w-full bg-[#cfdbe7] dark:bg-[#324d67]">
      <div class="h-2 rounded bg-[#1380ec]" [style.width.%]="clamped"></div>
    </div>
  `,
})
export class ProgressBarComponent {
  @Input() percent = 0;
  get clamped() { return Math.max(0, Math.min(100, this.percent)); }
}
