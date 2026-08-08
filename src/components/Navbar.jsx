import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

// Provides sticky desktop navigation and a responsive mobile menu.
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateNavbar = () => {
      setIsScrolled(window.scrollY > 12);
    };

    updateNavbar();

    window.addEventListener("scroll", updateNavbar, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateNavbar);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full border-b backdrop-blur-xl",
        "transition-[background-color,border-color,box-shadow] duration-300",
        isScrolled
          ? "border-slate-200/80 bg-white/95 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.35)]"
          : "border-transparent bg-white/75 shadow-none",
      ].join(" ")}
    >
      <nav
        className={[
          "mx-auto flex max-w-7xl items-center justify-between",
          "px-5 py-3 sm:px-8 lg:px-10",
        ].join(" ")}
        aria-label="Main navigation"
      >
        {/* Azvanta Technologies Navbar logo */}
        {/* Navbar brand */}
        <a
          href="#home"
          onClick={closeMenu}
          className={[
            "focus-ring group inline-flex shrink-0 items-center gap-3",
            "rounded-xl",
          ].join(" ")}
          aria-label="Azvanta Technologies home"
        >
          <img
            src="/brand/Navbar.png"
            alt=""
            className={[
              "h-11 w-11 object-contain sm:h-12 sm:w-12",
              "transition-transform duration-300",
              "group-hover:-rotate-3 group-hover:scale-105",
            ].join(" ")}
            aria-hidden="true"
          />

          <span className="leading-tight">
            <span
              className={[
                "block text-sm font-extrabold tracking-tight",
                "text-slate-950 sm:text-base",
              ].join(" ")}
            >
              Azvanta Technologies
            </span>

            <span
              className={[
                "hidden text-[11px] font-semibold tracking-wide",
                "text-slate-500 sm:block",
              ].join(" ")}
            >
              Your Digital Growth Partner
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={[
                "focus-ring rounded-md text-sm font-semibold text-slate-600",
                "transition-colors hover:text-violet-700",
              ].join(" ")}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className={[
              "focus-ring inline-flex items-center gap-2 rounded-xl px-4 py-2.5",
              "bg-violet-600 text-sm font-bold text-white",
              "shadow-lg shadow-violet-200",
              "transition-all duration-300",
              "hover:-translate-y-0.5 hover:bg-blue-600",
            ].join(" ")}
          >
            Let&apos;s talk
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className={[
            "focus-ring grid size-11 place-items-center rounded-xl",
            "border border-slate-200 text-slate-700 md:hidden",
          ].join(" ")}
          aria-label={
            isOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? (
            <FiX size={22} aria-hidden="true" />
          ) : (
            <FiMenu size={22} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className={[
            "border-t border-slate-200 bg-white",
            "px-5 py-4 shadow-xl md:hidden",
          ].join(" ")}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className={[
                  "focus-ring rounded-xl px-4 py-3",
                  "text-sm font-semibold text-slate-700",
                  "transition-colors",
                  "hover:bg-violet-50 hover:text-violet-700",
                ].join(" ")}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className={[
                "focus-ring mt-2 inline-flex items-center justify-center gap-2",
                "rounded-xl bg-violet-600 px-4 py-3",
                "text-sm font-bold text-white",
                "transition-colors hover:bg-blue-600",
              ].join(" ")}
            >
              Let&apos;s talk
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;