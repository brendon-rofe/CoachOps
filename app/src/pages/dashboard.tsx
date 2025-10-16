import Metric from "../components/Metric";

export default function Dashboard() {
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
      <Metric title="Connect Requests Sent" percent={80} caption="120/150" />

      <h2 className="text-black dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Direct Messages
      </h2>
      <Metric title="DMs Sent" percent={75} caption="250/333" />

      <h2 className="text-black dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Calls
      </h2>
      <Metric title="Calls Booked" percent={90} caption="50/55" />
    </div>
  );
}
