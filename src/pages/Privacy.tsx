import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_DATA } from "@/constants/siteData";

export default function Privacy() {
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
              Privacy Policy
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
                  1. Titolare del trattamento
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Il titolare del trattamento dei dati personali è <strong className="text-foreground">{SITE_DATA.nome}</strong>,
                  con studio in {SITE_DATA.indirizzo}, P.IVA {SITE_DATA.piva},
                  contattabile all'indirizzo email {SITE_DATA.email} o al numero {SITE_DATA.telefono}.
                </p>
              </div>

              <div className="h-px bg-border" />

              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                  2. Tipologie di dati raccolti
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Il presente sito raccoglie esclusivamente i dati di navigazione generati dal suo utilizzo (dati tecnici e di connessione). Non sono presenti form di contatto, pertanto non vengono raccolti dati personali tramite il sito.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I dati personali eventualmente forniti tramite contatto telefonico o email (nome, recapito, motivo del contatto) vengono trattati ai soli fini della gestione della comunicazione e, se pertinente, dell'instaurazione del rapporto professionale.
                </p>
              </div>

              <div className="h-px bg-border" />

              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                  3. Base giuridica e finalità
                </h2>
                <ul className="text-muted-foreground text-sm leading-relaxed space-y-2 list-disc list-inside">
                  <li>Gestione delle comunicazioni e delle richieste di informazione (art. 6, par. 1, lett. b) GDPR).</li>
                  <li>Adempimento degli obblighi legali e deontologici (art. 6, par. 1, lett. c) GDPR).</li>
                  <li>Esecuzione del contratto professionale (art. 9, par. 2, lett. h) GDPR per i dati sanitari).</li>
                </ul>
              </div>

              <div className="h-px bg-border" />

              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                  4. Riservatezza e segreto professionale
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I dati relativi alle sedute psicologiche sono soggetti al segreto professionale ai sensi del Codice Deontologico degli Psicologi Italiani e del D.Lgs. 196/2003 e successive modifiche. Non vengono comunicati a terzi salvo obblighi di legge o consenso esplicito.
                </p>
              </div>

              <div className="h-px bg-border" />

              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                  5. Conservazione dei dati
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I dati personali vengono conservati per il tempo strettamente necessario alle finalità per cui sono stati raccolti e comunque non oltre i termini previsti dalla normativa applicabile.
                </p>
              </div>

              <div className="h-px bg-border" />

              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                  6. Diritti degli interessati
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  In qualità di interessato, ha il diritto di accedere, rettificare, cancellare, limitare o opporsi al trattamento dei propri dati, nonché il diritto alla portabilità (artt. 15–22 GDPR).
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Per esercitare tali diritti può contattare il titolare all'indirizzo: <a href={SITE_DATA.emailHref} className="text-primary hover:underline">{SITE_DATA.email}</a>. Ha inoltre il diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali (www.garanteprivacy.it).
                </p>
              </div>

              <div className="h-px bg-border" />

              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                  7. Cookie
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Per informazioni sull'uso dei cookie su questo sito, si rimanda all'apposita <a href="/cookie" className="text-primary hover:underline">Cookie Policy</a>.
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
