import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_DATA } from "@/constants/siteData";
import informativaImg from "@/assets/informativa.jpg";

export default function Contatti() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* Page header */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-muted/60 to-background">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-block mb-3 text-primary text-xs font-sans tracking-widest uppercase font-medium">
              Contatti · Roma
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-5">
              Come contattarmi
            </h1>
            <p className="text-muted-foreground font-sans text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Sono disponibile per rispondere a ogni domanda e per concordare
              un primo colloquio conoscitivo gratuito.
            </p>
          </div>
        </section>

        {/* Main content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact details */}
              <div className="space-y-6">
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Recapiti professionali
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border shadow-card">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 14a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 5 5l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-sans uppercase tracking-widest mb-1">Telefono</p>
                      <a href={SITE_DATA.telefonoHref} className="font-sans font-semibold text-foreground text-lg hover:text-primary transition-colors">
                        {SITE_DATA.telefono}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border shadow-card">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-sans uppercase tracking-widest mb-1">Email</p>
                      <a href={SITE_DATA.emailHref} className="font-sans font-semibold text-foreground text-lg hover:text-primary transition-colors break-all">
                        {SITE_DATA.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border shadow-card">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-sans uppercase tracking-widest mb-1">Studio</p>
                      <address className="not-italic font-sans text-foreground font-medium leading-relaxed">
                        {SITE_DATA.indirizzo}
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border shadow-card">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-sans uppercase tracking-widest mb-1">Orari</p>
                      <p className="font-sans text-foreground font-medium">
                        {SITE_DATA.orari !== "DA INSERIRE" ? SITE_DATA.orari : "Contattami per informazioni sugli orari disponibili"}
                      </p>
                    </div>
                  </div>
                </div>

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

              {/* Image + info */}
              <div className="space-y-6">
                <div className="img-hover-wrap relative rounded-2xl overflow-hidden shadow-card-hover">
                  <img
                    src={informativaImg}
                    alt="Studio professionale psicologa psicoterapeuta Roma"
                    className="w-full h-72 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 rounded-2xl border border-primary/10" />
                </div>

                <div className="p-6 rounded-2xl bg-primary/6 border border-primary/15">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                    Primo colloquio gratuito
                  </h3>
                  <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                    Il primo incontro è un colloquio conoscitivo gratuito della durata di circa
                    50 minuti. È un'occasione per raccontare la propria situazione, fare domande
                    e valutare insieme se intraprendere un percorso.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                    Sedute online disponibili
                  </h3>
                  <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                    È possibile effettuare le sedute anche in modalità telematica, attraverso
                    piattaforme sicure e riservate, garantendo la stessa qualità del setting
                    in presenza.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
