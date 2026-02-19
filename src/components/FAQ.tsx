import { useState } from "react";
import { FAQS } from "@/constants/siteData";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function FAQItem({ domanda, risposta }: { domanda: string; risposta: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className="font-serif text-base font-medium text-foreground group-hover:text-primary transition-colors duration-200">
          {domanda}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      <div className={`faq-content ${open ? "open" : ""}`}>
        <p className="text-muted-foreground font-sans text-sm leading-relaxed pb-5 pr-10">
          {risposta}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const ref = useScrollReveal();

  return (
    <section className="py-20 md:py-28 bg-muted/50" id="faq">
      <div className="container mx-auto px-4 max-w-3xl" ref={ref}>
        <div className="text-center mb-12 reveal-up">
          <span className="inline-block mb-3 text-primary text-xs font-sans tracking-widest uppercase font-medium">
            Domande frequenti
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
            Hai qualche dubbio?
          </h2>
          <p className="text-muted-foreground mt-3 font-sans text-base max-w-md mx-auto">
            Risposte chiare alle domande più comuni per aiutarti a fare il primo passo.
          </p>
        </div>

        <div className="reveal-up bg-card rounded-2xl border border-border shadow-card px-6 md:px-10">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} domanda={faq.domanda} risposta={faq.risposta} />
          ))}
        </div>
      </div>
    </section>
  );
}
