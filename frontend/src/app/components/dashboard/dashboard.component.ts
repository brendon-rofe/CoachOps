import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MetricComponent } from '../../components/metric/metric.component';
import { ConnectRequestsService } from '../../services/connect-requests.service';

const USER_ID = 1;
const CONNECT_TARGET = 150;

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [MetricComponent],
  template: `
    <div class="flex flex-wrap justify-between gap-3 p-4">
      <p
        class="tracking-light text-[32px] font-bold leading-tight min-w-72 text-[#0d141b] dark:text-white"
      >
        Dashboard
      </p>
    </div>

    <h2
      class="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-[#0d141b] dark:text-white"
    >
      Connect Requests
    </h2>
    <app-metric
      title="Connect Requests Sent"
      [percent]="connectPercent()"
      [caption]="connectCaption()"
    />

    <h2
      class="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-[#0d141b] dark:text-white"
    >
      Direct Messages
    </h2>
    <app-metric title="DMs Sent" [percent]="75" caption="250/333" />

    <h2
      class="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-[#0d141b] dark:text-white"
    >
      Calls
    </h2>
    <app-metric title="Calls Booked" [percent]="90" caption="50/55" />
  `,
})
export class DashboardComponent {
  private connectSvc = inject(ConnectRequestsService);

  connectTotalSig = toSignal(
    this.connectSvc.countTotal(USER_ID),
    { initialValue: 0 }
  );

  connectPercent = computed(() =>
    Math.max(0, Math.min(100, Math.round((this.connectTotalSig() / CONNECT_TARGET) * 100)))
  );
  connectCaption = computed(() => `${this.connectTotalSig()}/${CONNECT_TARGET}`);
}
