import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { nav } from "@/data/site";
import { GpfLogo } from "./GpfLogo";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHero = !scrolled && !open;
  const navLink = onHero
    ? "px-4 py-2 text-sm font-medium text-white/90 hover:text-white ring-focus"
    : "px-4 py-2 text-sm font-medium text-ink hover:text-navy ring-focus";
  const navActive = onHero
    ? "px-4 py-2 text-sm font-semibold text-white"
    : "px-4 py-2 text-sm font-semibold text-navy";
  const iconBtn = onHero
    ? "text-white/90 hover:text-white"
    : "text-ink hover:text-navy";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-white/95 backdrop-blur border-b border-border shadow-[0_1px_0_rgba(23,63,122,0.04)]"
          : "bg-gradient-to-b from-[#081C36]/80 to-transparent"
      }`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-primary text-white px-3 py-2 rounded">
        Aller au contenu
      </a>
      <div className="container-gpf flex h-20 items-center justify-between">
        <GpfLogo variant={scrolled || open ? "dark" : "light"} />

        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
          {nav.map((item) => {
            if ("children" in item) {
              const isOpen = openDropdown === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 ${navLink}`}
                    aria-expanded={isOpen}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {isOpen && (
                    <div className="absolute top-full left-0 mt-1 w-72 bg-white border border-border rounded-lg shadow-xl p-2 animate-in fade-in slide-in-from-top-1">
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to as string}
                          className="block px-3 py-2 text-sm text-ink hover:bg-secondary rounded-md"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={item.to}
                to={item.to as string}
                className={navLink}
                activeProps={{ className: navActive }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/adherer"
            className={`hidden sm:inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-colors ring-focus ${
              onHero ? "bg-white text-navy hover:bg-accent-cyan hover:text-white" : "bg-navy text-white hover:bg-navy-deep"
            }`}
          >
            Adhérer
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 ring-focus ${iconBtn}`}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white max-h-[calc(100svh-5rem)] overflow-y-auto">
          <div className="container-gpf py-4 flex flex-col gap-1">
            {nav.map((item) => {
              if ("children" in item) {
                return (
                  <div key={item.label} className="py-2">
                    <div className="eyebrow mb-2">{item.label}</div>
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to as string}
                        onClick={() => setOpen(false)}
                        className="block py-2 text-base text-ink"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                );
              }
              return (
                <Link
                  key={item.to}
                  to={item.to as string}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base font-medium text-ink border-t border-border"
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              to="/adherer"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex justify-center items-center px-4 py-3 rounded-full bg-navy text-white text-sm font-semibold"
            >
              Adhérer
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
