import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SITE_DATA } from "@/constants/siteData";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Servizi", href: "/servizi" },
  { label: "Contatti", href: "/contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-card/95 backdrop-blur-md shadow-nav border-b border-border"
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="min-w-0 group flex flex-col leading-tight">
          <span className="font-serif text-base md:text-lg font-semibold text-foreground tracking-tight transition-colors group-hover:text-primary">
            {SITE_DATA.nome}
          </span>
          <span className="text-xs text-muted-foreground font-sans tracking-widest uppercase">
            {SITE_DATA.titolo}
          </span>
        </Link>

        {/* Nav */}
        <nav className="min-w-0 flex items-center gap-3 sm:gap-4 md:gap-8">
          {navLinks.map((link) => {
            const active = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`link - underline text - sm font - sans tracking - wide transition - colors duration - 200 ${active
                  ? "text-primary font-medium"
                  : "text-foreground hover:text-primary"
                  } `}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={SITE_DATA.telefonoHref}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium font-sans bg-gradient-to-r from-primary to-primary-glow text-primary-foreground transition-all duration-200 hover:shadow-card hover:-translate-y-px"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 14a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 5 5l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z" />
            </svg>
            Prenota
          </a>
        </nav>
      </div>
    </header>
  );
}
