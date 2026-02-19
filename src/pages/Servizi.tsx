import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesGrid from "@/components/ServicesGrid";
import { SITE_DATA } from "@/constants/siteData";

export default function Servizi() {
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
              Psicoterapia · Roma
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-5">
              I miei servizi
            </h1>
            <p className="text-muted-foreground font-sans text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Ogni percorso è unico. Offro supporto psicologico e psicoterapia individuale
              per accompagnarti verso il benessere, con professionalità, riservatezza e
              un approccio autenticamente centrato sulla persona.
            </p>
          </div>
        </section>

        <ServicesGrid />

        {/* CTA */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
              Pronta a iniziare?
            </h2>
            <p className="text-muted-foreground font-sans text-base mb-8">
              Contattami per un primo colloquio conoscitivo gratuito. Insieme valuteremo
              il percorso più adatto alle tue esigenze.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={SITE_DATA.telefonoHref}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-sans font-medium text-sm bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:shadow-card-hover hover:-translate-y-px transition-all duration-200"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 14a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 5 5l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z" />
                </svg>
                {SITE_DATA.telefono}
              </a>
              <a
                href={SITE_DATA.emailHref}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-sans font-medium text-sm border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                {SITE_DATA.email}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
