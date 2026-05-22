import { MapPin } from "lucide-react";

export function RouteCTA() {
  return (
    <div className="w-full bg-white/[0.03] backdrop-blur-sm border-y border-gold/10">
      <div className="mx-auto max-w-6xl px-6">
        <a
          href="https://maps.app.goo.gl/CDMBchHhhD1C8FQv7"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-center gap-2 py-3 md:py-4 text-center transition-all"
        >
          <div className="flex flex-col items-center gap-0.5">
            <h4 className="text-base font-medium text-foreground md:text-lg" style={{ fontFamily: "var(--font-display)" }}>
              Pronto para viver essa experiência?
            </h4>
            <p className="text-xs text-muted-foreground">
              Estamos no coração da Cidade Jardim, esperando por você.
            </p>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gold transition-all group-hover:gap-3">
            <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
            <span className="whitespace-nowrap">Traçar meu caminho até o Mauá</span>
            <span className="text-sm leading-none tracking-tighter transition-transform duration-300 group-hover:translate-x-1">
              &gt;&gt;&gt;
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
