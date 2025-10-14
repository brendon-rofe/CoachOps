import ProgressBar from "./ProgressBar";

interface MetricProps {
  title: string;
  percent: number;
  caption: string;
}

export default function Metric({ title, percent, caption }: MetricProps) {
  return (
    <section className="flex flex-col gap-3 p-4">
      <div className="flex gap-6 justify-between">
        <p className="text-black dark:text-white text-base font-medium leading-normal">
          {title}
        </p>
        <p className="text-black dark:text-white text-sm font-normal leading-normal">
          {percent}%
        </p>
      </div>
      <ProgressBar percent={percent} />
      <p className="text-gray-500 dark:text-[#92adc9] text-sm font-normal leading-normal">
        {caption}
      </p>
    </section>
  );
}
