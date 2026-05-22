import { MapPin } from "lucide-react";

export function RouteCTA() {
  return (
    <div className="w-full bg-white/[0.03] backdrop-blur-sm border-y border-gold/10">
      <div className="mx-auto max-w-6xl px-6">
        <a
          href="https://maps.app.goo.gl/CDMBchHhhD1C8FQv7"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-center gap-6 py-10 text-center transition-all"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/5 text-gold transition-transform duration-500 group-hover:scale-110">
              <MapPin className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-xl font-medium text-foreground md:text-2xl" style={{ fontFamily: "var(--font-display)" }}>
                Pronto para viver essa experiência?
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Estamos no coração da Cidade Jardim, esperando por você.
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-4 text-xs font-bold uppercase tracking-[0.25em] text-gold transition-all group-hover:gap-6">
            <span className="whitespace-nowrap">Traçar meu caminho até o Mauá</span>
            <span className="text-lg leading-none tracking-tighter transition-transform duration-300 group-hover:translate-x-2">
              &gt;&gt;&gt;
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
