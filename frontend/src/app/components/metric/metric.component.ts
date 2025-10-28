import { Component, Input } from '@angular/core';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-metric',
  standalone: true,
  imports: [ProgressBarComponent],
  template: `
    <section class="flex flex-col gap-3 p-4">
      <div class="flex gap-6 justify-between">
        <p class="text-base font-medium text-[#0d141b] dark:text-white">{{ title }}</p>
        <p class="text-sm font-normal text-[#0d141b] dark:text-white">{{ percent }}%</p>
      </div>
      <app-progress-bar [percent]="percent" />
      <p class="text-sm font-normal text-[#4c739a] dark:text-[#92adc9]">{{ caption }}</p>
    </section>
  `,
})
export class MetricComponent {
  @Input() title = '';
  @Input() percent = 0;
  @Input() caption = '';
}
