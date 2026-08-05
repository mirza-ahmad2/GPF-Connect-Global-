import { User } from "lucide-react";

export function PortraitPlaceholder({
  className = "",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  return (
    <div
      className={`grid h-full w-full place-items-center ${
        variant === "dark" ? "bg-white/5" : "bg-cool"
      } ${className}`}
      aria-hidden
    >
      <User
        className={`h-16 w-16 md:h-20 md:w-20 ${variant === "dark" ? "text-white/30" : "text-textgrey/40"}`}
        strokeWidth={1.25}
      />
    </div>
  );
}
