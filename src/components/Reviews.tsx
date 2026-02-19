import { SITE_DATA } from "@/constants/siteData";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function StarRating({ value }: { value: number }) {
  return (
    <div className="flex items-center justify-center gap-1" aria-label={`Valutazione: ${value} su 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={star <= Math.floor(value) ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          className={star <= Math.floor(value) ? "star-filled" : "star-empty"}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const ref = useScrollReveal();
  const rating = 4.9;
  const count = "oltre 40";

  return (
    <section className="py-20 md:py-28 bg-background" id="recensioni">
      <div className="container mx-auto px-4 max-w-3xl" ref={ref}>
        <div className="reveal-up text-center space-y-6">
          <span className="inline-block mb-1 text-primary text-xs font-sans tracking-widest uppercase font-medium">
            Valutazioni dei pazienti
          </span>

          <p className="text-muted-foreground font-sans text-base">
            La cura e la professionalità al centro di ogni relazione terapeutica.
          </p>

          <div className="inline-flex flex-col items-center gap-4 bg-card rounded-2xl border border-border shadow-card px-10 py-10 w-full max-w-md mx-auto">
            <StarRating value={rating} />

            <div>
              <p className="font-serif text-5xl font-semibold text-foreground">
                {rating}
                <span className="text-2xl text-muted-foreground font-sans font-normal ml-1">/5</span>
              </p>
              <p className="text-muted-foreground text-sm font-sans mt-1 text-center">
                Media basata su {count} recensioni verificate
              </p>
            </div>

            <div className="w-full space-y-1.5">
              {[5, 4, 3, 2, 1].map((star) => {
                const percentage = star === 5 ? 88 : star === 4 ? 10 : star === 3 ? 2 : 0;
                return (
                  <div key={star} className="flex items-center gap-2 text-xs font-sans text-muted-foreground">
                    <span className="w-2">{star}</span>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="star-filled">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary/70 transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="w-6 text-right">{percentage}%</span>
                  </div>
                );
              })}
            </div>

            <a
              href={SITE_DATA.googleReviewsUrl !== "DA INSERIRE" ? SITE_DATA.googleReviewsUrl : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-sans font-medium bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:shadow-card-hover hover:-translate-y-px transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Leggi le recensioni su Google
            </a>
          </div>

          <p className="text-muted-foreground font-sans text-sm max-w-md mx-auto">
            Il rapporto di fiducia è il fondamento di ogni percorso di cura.
          </p>
        </div>
      </div>
    </section>
  );
}
