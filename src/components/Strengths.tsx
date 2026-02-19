import { STRENGTHS } from "@/constants/siteData";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import studioImg from "@/assets/studio.jpg";

export default function Strengths() {
  const ref = useScrollReveal();

  return (
    <section className="py-20 md:py-28 bg-muted/60" id="punti-di-forza">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="reveal-fade order-2 lg:order-1">
            <div className="img-hover-wrap relative rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src={studioImg}
                alt="Studio professionale della Dr.ssa Bannò psicoterapeuta Roma"
                className="w-full h-96 lg:h-[480px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-2xl border border-primary/10" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="reveal-up">
              <span className="inline-block mb-3 text-primary text-xs font-sans tracking-widest uppercase font-medium">
                Perché scegliermi
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
                Un approccio fondato su cura, competenza e riservatezza
              </h2>
            </div>

            <div className="space-y-6">
              {STRENGTHS.map((item, i) => (
                <div
                  key={i}
                  className={`reveal-up stagger-${Math.min(i + 2, 5)} flex gap-4`}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-foreground mb-1">
                      {item.titolo}
                    </h3>
                    <p className="text-muted-foreground text-sm font-sans leading-relaxed">
                      {item.descrizione}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
