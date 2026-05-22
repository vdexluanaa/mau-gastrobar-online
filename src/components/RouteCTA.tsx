import { MapPin } from "lucide-react";

export function RouteCTA() {
  return (
    <div className="w-full bg-white/[0.03] backdrop-blur-sm border-y border-gold/10">
      <div className="mx-auto max-w-6xl px-6">
        <a
          href="https://maps.app.goo.gl/CDMBchHhhD1C8FQv7"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between gap-4 py-4 md:py-5 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/5 text-gold transition-transform duration-500 group-hover:scale-110">
              <MapPin className="h-4 w-4" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-base font-medium text-foreground md:text-lg" style={{ fontFamily: "var(--font-display)" }}>
                Pronto para viver essa experiência?
              </h4>
              <p className="text-xs text-muted-foreground">
                Estamos no coração da Cidade Jardim, esperando por você.
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gold transition-all group-hover:gap-5">
            <span className="whitespace-nowrap hidden sm:inline">Traçar meu caminho até o Mauá</span>
            <span className="whitespace-nowrap sm:hidden">Ver rota</span>
            <span className="text-sm leading-none tracking-tighter transition-transform duration-300 group-hover:translate-x-1">
              &gt;&gt;&gt;
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
