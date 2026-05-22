import { Beer, Sparkles } from "lucide-react";

export function HappyHourBanner() {
  return (
    <section className="bg-green-deep border-y border-gold/20">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">Promoções da casa</p>
          <h3
            className="text-3xl text-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Tem motivo de sobra para vir ao Mauá.
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Rodízio de drinks */}
          <article className="group relative overflow-hidden rounded-sm border border-gold/30 bg-background/20 p-8 transition-all hover:border-gold/60 hover:bg-background/30 flex flex-col items-center text-center">
            <Sparkles className="h-7 w-7 text-gold" strokeWidth={1.2} />
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-gold">Rodízio de drinks</p>
            <h4
              className="mt-3 text-3xl text-foreground md:text-4xl flex flex-col items-center"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              <span>Drinks à vontade por</span>
              <span className="text-gold mt-2" style={{ fontVariantNumeric: "lining-nums tabular-nums" }}>R$ 60,00</span>
            </h4>
            <div className="mt-6 h-px w-12 bg-gold/50" />
            <p className="mt-6 text-base leading-relaxed text-foreground/90">
              Toda <span className="text-gold">sexta e sábado, a partir das 19h</span>. Experimente
              a coquetelaria autoral da casa sem limites — clássicos, autorais e as criações da
              temporada.
            </p>
          </article>

          {/* Happy Hour Chopp */}
          <article className="group relative overflow-hidden rounded-sm border border-gold/30 bg-background/20 p-8 transition-all hover:border-gold/60 hover:bg-background/30 flex flex-col items-center text-center">
            <Beer className="h-7 w-7 text-gold" strokeWidth={1.2} />
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-gold">Happy Hour</p>
            <h4
              className="mt-3 text-3xl text-foreground md:text-4xl flex flex-col items-center"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              <span>Caneca de chopp Biomma por</span>
              <span className="text-gold mt-2" style={{ fontVariantNumeric: "lining-nums tabular-nums" }}>R$ 6,99</span>
            </h4>
            <div className="mt-6 h-px w-12 bg-gold/50" />
            <p className="mt-6 text-base leading-relaxed text-foreground/90">
              <span className="text-gold">Terça a quinta, das 18h às 23h.</span> Escolha entre IPA,
              Vinho ou Pilsen. O melhor happy hour de Goiânia acontece aqui.
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-foreground/70">
              Sex e sáb: 12h–21h · Domingo: 12h–18h
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
