import heroImg from "@/assets/hero.jpg";
import { SITE_DATA } from "@/constants/siteData";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Studio della Dr.ssa Giusy Bannò, psicologa psicoterapeuta a Roma"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/35 to-foreground/55" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto text-center px-4 py-24">
        <span className="animate-hero-reveal inline-block mb-5 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white/90 text-xs font-sans tracking-widest uppercase">
          Psicologa · Psicoterapeuta · Roma
        </span>

        <h1 className="animate-hero-reveal-2 font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-white text-balance leading-tight mb-6">
          {SITE_DATA.nome}
        </h1>

        <p className="animate-hero-reveal-3 text-lg md:text-xl text-white/85 font-sans font-light max-w-2xl mx-auto leading-relaxed mb-10 text-balance">
          Un percorso di cura autentico, riservato e professionale.<br className="hidden md:block" />
          Supporto psicologico e psicoterapia individuale a Roma.
        </p>

        <div className="animate-hero-reveal-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={SITE_DATA.telefonoHref}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-sans font-medium text-sm bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-lg hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 14a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 5 5l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z" />
            </svg>
            Prenota un colloquio
          </a>
          <a
            href={SITE_DATA.emailHref}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-sans font-medium text-sm bg-white/15 backdrop-blur-sm border border-white/30 text-white hover:bg-white/25 transition-all duration-200"
          >
            Scrivimi
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in">
        <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white/60 to-white/0 mx-auto" />
      </div>
    </section>
  );
}
