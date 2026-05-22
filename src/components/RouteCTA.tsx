import { MapPin, ArrowRight } from "lucide-react";

export function RouteCTA() {
  return (
    <div className="bg-background py-8">
      <div className="mx-auto max-w-4xl px-6">
        <a
          href="https://maps.app.goo.gl/CDMBchHhhD1C8FQv7"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-between gap-6 rounded-sm border border-gold/20 bg-white/[0.02] p-6 transition-all hover:border-gold/40 hover:bg-white/[0.04] md:flex-row md:p-8"
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold transition-transform duration-500 group-hover:scale-110">
              <MapPin className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-lg font-medium text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                Pronto para viver essa experiência?
              </h4>
              <p className="text-sm text-muted-foreground">
                Estamos no coração da Cidade Jardim, esperando por você.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-gold transition-all group-hover:gap-5">
            <span>Traçar meu caminho até o Mauá</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </a>
      </div>
    </div>
  );
}
