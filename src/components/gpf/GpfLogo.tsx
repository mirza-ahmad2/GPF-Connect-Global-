import { Link } from "@tanstack/react-router";

export function GpfLogo({ variant = "dark", className = "" }: { variant?: "dark" | "light"; className?: string }) {
  const fill = variant === "light" ? "#FFFFFF" : "#173F7A";
  const sub = variant === "light" ? "rgba(255,255,255,0.75)" : "#647386";
  return (
    <Link to="/" className={`flex items-center gap-3 ring-focus ${className}`} aria-label="Groupement du Patronat Francophone, accueil">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
        <circle cx="20" cy="20" r="18" stroke={fill} strokeWidth="1.5" />
        <circle cx="20" cy="20" r="10" stroke={fill} strokeWidth="1.5" />
        <circle cx="20" cy="2" r="2" fill="#F5C542" />
        <circle cx="38" cy="20" r="2" fill="#4FB07A" />
        <circle cx="20" cy="38" r="2" fill="#2FA7DC" />
        <circle cx="2" cy="20" r="2" fill="#E45846" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-display font-bold text-lg tracking-tight" style={{ color: fill }}>GPF</span>
        <span className="text-[10px] uppercase tracking-[0.15em]" style={{ color: sub }}>Patronat Francophone</span>
      </div>
    </Link>
  );
}
