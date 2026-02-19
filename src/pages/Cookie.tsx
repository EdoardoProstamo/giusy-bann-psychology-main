import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_DATA } from "@/constants/siteData";

export default function Cookie() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-muted/60 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Cookie Policy
            </h1>
            <p className="text-muted-foreground font-sans text-sm">
              Ultimo aggiornamento: febbraio 2026
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="bg-card rounded-2xl border border-border shadow-card p-8 md:p-12 space-y-8 font-sans">

              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Cosa sono i cookie?
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I cookie sono piccoli file di testo che i siti web visitati salvano sul dispositivo dell'utente. Permettono al sito di ricordare le preferenze e migliorare l'esperienza di navigazione.
                </p>
              </div>

              <div className="h-px bg-border" />

              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Cookie utilizzati da questo sito
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Il presente sito utilizza esclusivamente cookie tecnici necessari al funzionamento del sito stesso. Non vengono utilizzati cookie di profilazione, cookie di terze parti per finalità pubblicitarie, né strumenti di analisi del comportamento.
                </p>

                <div className="overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-3 text-foreground font-serif font-medium">Nome</th>
                        <th className="px-4 py-3 text-foreground font-serif font-medium">Tipo</th>
                        <th className="px-4 py-3 text-foreground font-serif font-medium">Finalità</th>
                        <th className="px-4 py-3 text-foreground font-serif font-medium">Durata</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-border">
                        <td className="px-4 py-3 text-muted-foreground">_session</td>
                        <td className="px-4 py-3 text-muted-foreground">Tecnico</td>
                        <td className="px-4 py-3 text-muted-foreground">Funzionamento del sito</td>
                        <td className="px-4 py-3 text-muted-foreground">Sessione</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="h-px bg-border" />

              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Come gestire i cookie
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  È possibile gestire o disabilitare i cookie direttamente dalle impostazioni del proprio browser. Si tenga presente che la disabilitazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del sito.
                </p>
                <ul className="text-muted-foreground text-sm leading-relaxed mt-3 space-y-1 list-disc list-inside">
                  <li>Chrome: Impostazioni → Privacy e sicurezza → Cookie</li>
                  <li>Firefox: Opzioni → Privacy e sicurezza</li>
                  <li>Safari: Preferenze → Privacy</li>
                  <li>Edge: Impostazioni → Cookie e autorizzazioni sito</li>
                </ul>
              </div>

              <div className="h-px bg-border" />

              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Contatti
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Per qualsiasi informazione relativa alla presente Cookie Policy, contattare il Titolare del trattamento:{" "}
                  <strong className="text-foreground">{SITE_DATA.nome}</strong> —{" "}
                  <a href={SITE_DATA.emailHref} className="text-primary hover:underline">{SITE_DATA.email}</a>.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                  Per informazioni più complete sul trattamento dei dati personali, consultare la{" "}
                  <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
