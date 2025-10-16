import Metric from "../components/Metric";
import { requestsData } from "../data";

function getLatestStats() {
  return requestsData[requestsData.length - 1];
}

export default function Dashboard() {
  const latest = getLatestStats();

  return (
    <div>
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-black dark:text-white tracking-light text-[32px] font-bold leading-tight min-w-72">
          Dashboard
        </p>
      </div>

      <h2 className="text-black dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Connect Requests
      </h2>
      <Metric
        title="Connect Requests Sent"
        percent={Math.round((latest.connect_requests_sent / 150) * 100)}
        caption={`${latest.connect_requests_sent}/150`}
      />

      <h2 className="text-black dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Direct Messages
      </h2>
      <Metric
        title="DMs Sent"
        percent={Math.round((latest.dms_sent / 50) * 100)}
        caption={`${latest.dms_sent}/50`}
      />

      <h2 className="text-black dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Calls
      </h2>
      <Metric
        title="Calls Booked"
        percent={Math.round((latest.calls_booked / 10) * 100)}
        caption={`${latest.calls_booked}/10`}
      />
    </div>
  );
}
