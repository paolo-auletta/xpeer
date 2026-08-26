import { cn } from "../lib/cn";

export function ArrowIcon({
  direction = "down-right",
  className = "",
}: {
  direction?: "down-right" | "down" | "up" | "left" | "right";
  className?: string;
}) {
  const path = {
    "down-right": "M4 4l8 8M6 12h6V6",
    down: "M8 3v10M4 9l4 4 4-4",
    up: "M8 13V3M4 7l4-4 4 4",
    left: "M13 8H3M7 4 3 8l4 4",
    right: "M3 8h10M9 4l4 4-4 4",
  }[direction];

  return (
    <svg
      className={cn(
        "h-4 w-4 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.7]",
        className,
      )}
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}
