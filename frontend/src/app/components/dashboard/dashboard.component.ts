import { Component } from '@angular/core';
import { MetricComponent } from '../../components/metric/metric.component';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [MetricComponent],
  template: `
    <div class="flex flex-wrap justify-between gap-3 p-4">
      <p class="tracking-light text-[32px] font-bold leading-tight min-w-72">Dashboard</p>
    </div>

    <h2 class="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Connect Requests</h2>
    <app-metric title="Connect Requests Sent" [percent]="80" caption="120/150" />

    <h2 class="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Direct Messages</h2>
    <app-metric title="DMs Sent" [percent]="75" caption="250/333" />

    <h2 class="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Calls</h2>
    <app-metric title="Calls Booked" [percent]="90" caption="50/55" />
  `,
})
export class DashboardComponent {}
