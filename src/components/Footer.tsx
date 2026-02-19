import { Link } from "react-router-dom";
import { SITE_DATA } from "@/constants/siteData";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-14 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-card/10 border border-white/10 rounded-2xl p-8 text-center space-y-5 backdrop-blur-sm">
          {/* Name & title */}
          <div>
            <p className="font-serif text-xl font-semibold text-white tracking-tight">
              {SITE_DATA.nome}
            </p>
            <p className="text-white/60 text-sm font-sans tracking-widest uppercase mt-1">
              {SITE_DATA.titolo}
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/15 w-24 mx-auto" />

          {/* Contact info */}
          <address className="not-italic space-y-2 text-sm text-white/75 font-sans">
            <p>{SITE_DATA.indirizzo}</p>
            <p>
              <a href={SITE_DATA.telefonoHref} className="hover:text-white transition-colors">
                {SITE_DATA.telefono}
              </a>
              {" · "}
              <a href={SITE_DATA.emailHref} className="hover:text-white transition-colors">
                {SITE_DATA.email}
              </a>
            </p>
            <p className="text-white/50">P.IVA: {SITE_DATA.piva}</p>
          </address>

          {/* Divider */}
          <div className="h-px bg-white/15 w-24 mx-auto" />

          {/* Legal links */}
          <div className="flex items-center justify-center gap-5 text-xs text-white/50 font-sans">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link to="/cookie" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>

          <p className="text-xs text-white/35 font-sans">
            © {new Date().getFullYear()} {SITE_DATA.nome} — Tutti i diritti riservati
          </p>
        </div>
      </div>
    </footer>
  );
}
