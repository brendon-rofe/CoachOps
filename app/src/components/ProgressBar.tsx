interface ProgressBarProps {
  percent: number; // 0-100
  trackClassName?: string;
  barClassName?: string;
}

export default function ProgressBar({
  percent,
  trackClassName = "bg-[#324d67]",
  barClassName = "bg-[#1380ec]",
}: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, percent));
  return (
    <div className={`rounded ${trackClassName}`}>
      <div
        className={`h-2 rounded ${barClassName}`}
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
