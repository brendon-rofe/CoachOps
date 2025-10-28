import { Component, Input } from '@angular/core';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-metric',
  standalone: true,
  imports: [ProgressBarComponent],
  template: `
    <section class="flex flex-col gap-3 p-4">
      <div class="flex gap-6 justify-between">
        <p class="text-white text-base font-medium leading-normal">{{ title }}</p>
        <p class="text-white text-sm font-normal leading-normal">{{ percent }}%</p>
      </div>
      <app-progress-bar [percent]="percent" />
      <p class="text-[#92adc9] text-sm font-normal leading-normal">{{ caption }}</p>
    </section>
  `,
})
export class MetricComponent {
  @Input() title = '';
  @Input() percent = 0;
  @Input() caption = '';
}
