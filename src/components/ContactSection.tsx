import { SITE_DATA } from "@/constants/siteData";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import ctaImg from "@/assets/cta-office.jpg";

export default function ContactSection() {
  const ref = useScrollReveal();

  return (
    <section className="py-20 md:py-28 bg-background" id="contatti-home">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Image */}
          <div className="reveal-fade">
            <div className="img-hover-wrap relative rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src={ctaImg}
                alt="Studio accogliente psicologa Roma"
                className="w-full h-72 lg:h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-2xl border border-primary/10" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-7">
            <div className="reveal-up">
              <span className="inline-block mb-3 text-primary text-xs font-sans tracking-widest uppercase font-medium">
                Contattami
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
                Il primo passo inizia da qui
              </h2>
              <p className="text-muted-foreground font-sans text-base mt-4 leading-relaxed">
                Non esitare a contattarmi per un colloquio conoscitivo gratuito.
                Sarò felice di rispondere a ogni tua domanda e trovare insieme
                il percorso più adatto a te.
              </p>
            </div>

            <div className="reveal-up stagger-2 space-y-4">
              <a
                href={SITE_DATA.telefonoHref}
                className="flex items-center gap-4 p-4 rounded-xl bg-muted hover:bg-primary/8 border border-border hover:border-primary/25 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 14a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 5 5l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-sans uppercase tracking-widest">Telefono</p>
                  <p className="text-foreground font-sans font-medium">{SITE_DATA.telefono}</p>
                </div>
              </a>

              <a
                href={SITE_DATA.emailHref}
                className="flex items-center gap-4 p-4 rounded-xl bg-muted hover:bg-primary/8 border border-border hover:border-primary/25 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-sans uppercase tracking-widest">Email</p>
                  <p className="text-foreground font-sans font-medium">{SITE_DATA.email}</p>
                </div>
              </a>

              <a
                href={SITE_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-muted hover:bg-primary/8 border border-border hover:border-primary/25 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-sans uppercase tracking-widest">Indirizzo</p>
                  <p className="text-foreground font-sans font-medium text-sm">{SITE_DATA.indirizzo}</p>
                </div>
              </a>
            </div>

            <div className="reveal-up stagger-3">
              <a
                href={SITE_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-sans font-medium text-sm bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:shadow-card-hover hover:-translate-y-px transition-all duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Apri su Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
