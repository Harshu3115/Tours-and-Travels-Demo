import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks, siteConfig } from "../config/site";

export default function Navbar({ onBook }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/95 shadow-md backdrop-blur-xl"
        : "bg-ink/60 backdrop-blur-md"
        }`}
    >
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LOGO */}
        <Link
          to="/"
          className="flex min-w-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/20 bg-sunset text-sm font-black text-white shadow-glow">
            GT
          </span>

          <span className="min-w-0">
            <span
              className={`block truncate font-display text-xl font-semibold transition-colors duration-300 ${scrolled ? "text-ink" : "text-white"
                }`}
            >
              {siteConfig.name}
            </span>

            <span className="hidden text-xs uppercase tracking-[0.26em] text-champagne/70 sm:block">
              Premium Travel
            </span>
          </span>
        </Link>


        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `relative py-2 text-sm font-medium transition-colors duration-300
     after:absolute after:bottom-0 after:left-0
     after:h-[3px] after:rounded-full
     after:bg-gold
     after:transition-all after:duration-300
     ${isActive
                  ? "text-gold after:w-full"
                  : scrolled
                    ? "text-ink/75 hover:text-gold after:w-0 hover:after:w-full"
                    : "text-white/80 hover:text-gold after:w-0 hover:after:w-full"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>


        {/* BOOK NOW */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={() => onBook()}
            className="btn-primary text-white shadow-none hover:shadow-none"
          >
            Book Now
          </button>
        </div>


        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen((value) => !value)}
          className={`grid size-11 place-items-center duration-300 lg:hidden ${scrolled ? "text-gray-900" : "text-white"
            }`}
          aria-label="Toggle navigation"
        >
          {open ? (
            <X
              size={22}
              strokeWidth={2.5}
              className={scrolled ? "text-gray-900" : "text-white"}
            />
          ) : (
            <Menu
              size={22}
              strokeWidth={2.5}
              className={scrolled ? "text-gray-900" : "text-white"}
            />
          )}
        </button>
      </nav>


      {/* MOBILE NAVIGATION */}
      <div
        className={`overflow-hidden border-t transition-all duration-300 lg:hidden ${open
          ? "max-h-[500px] opacity-100"
          : "max-h-0 opacity-0"
          } ${scrolled
            ? "border-gray-200 bg-white"
            : "border-white/10 bg-ink"
          }`}
      >
        <div className="space-y-2 px-4 py-5">

          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-2xl border-l-4 px-4 py-3.5 text-base font-medium transition-all duration-200 ${isActive
                  ? scrolled
                    ? "border-gold bg-gold/10 text-gold"
                    : "border-gold bg-white/10 text-gold"
                  : scrolled
                    ? "border-transparent text-ink hover:bg-gold/10 hover:text-gold"
                    : "border-transparent text-white hover:bg-white/10 hover:text-gold"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <button
            onClick={() => {
              setOpen(false);
              onBook();
            }}
            className="btn-primary mt-3 w-full"
          >
            Book Now
          </button>

        </div>
      </div>
    </header>
  );
}