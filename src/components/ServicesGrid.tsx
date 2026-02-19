import { Link } from "react-router-dom";
import { SERVICES } from "@/constants/siteData";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import servicePsicoterapia from "@/assets/service-psicoterapia.jpg";
import serviceSupporto from "@/assets/service-supporto.jpg";
import serviceAnsia from "@/assets/service-ansia.jpg";
import serviceCrescita from "@/assets/service-crescita.jpg";
import serviceConsulenza from "@/assets/service-consulenza.jpg";

const images: Record<string, string> = {
  "service-psicoterapia": servicePsicoterapia,
  "service-supporto": serviceSupporto,
  "service-ansia": serviceAnsia,
  "service-crescita": serviceCrescita,
  "service-consulenza": serviceConsulenza,
};

interface ServicesGridProps {
  preview?: boolean;
}

export default function ServicesGrid({ preview = false }: ServicesGridProps) {
  const ref = useScrollReveal();
  const services = preview ? SERVICES.slice(0, 3) : SERVICES;

  return (
    <section className="py-20 md:py-28 bg-background" id="servizi">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-14 reveal-up">
          <span className="inline-block mb-3 text-primary text-xs font-sans tracking-widest uppercase font-medium">
            I miei servizi
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Un supporto su misura per te
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-sans text-base">
            Ogni percorso è pensato per rispondere alle tue specifiche esigenze,
            con professionalità, riservatezza e un approccio umano.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`reveal-up stagger-${Math.min(i + 1, 5)} group bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col`}
            >
              {/* Image */}
              <div className="img-hover-wrap relative h-52 overflow-hidden">
                <img
                  src={images[service.immagine]}
                  alt={service.titolo}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/6 transition-colors duration-300" />
                <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/15 rounded-t-2xl transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                  {service.titolo}
                </h3>
                <p className="text-muted-foreground text-sm font-sans leading-relaxed flex-1">
                  {service.descrizione}
                </p>
              </div>
            </div>
          ))}
        </div>

        {preview && (
          <div className="text-center mt-10 reveal-up">
            <Link
              to="/servizi"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary text-primary font-sans font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              Scopri tutti i servizi
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
