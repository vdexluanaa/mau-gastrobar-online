import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import maracuja from "@/assets/drink-maracuja.jpg";
import limao from "@/assets/drink-limao.jpg";
import damaNoite from "@/assets/drink-dama-noite.jpg";
import drinkMaua from "@/assets/drink-maua.jpg";

const drinks = [
  {
    img: drinkMaua,
    name: "Mauá",
    desc: "Drink-assinatura da casa: Fiu Fiu de abacaxi com hortelã, kiwi e limão. Doce, ácido e refrescante — uma experiência tropical equilibrada.",
    price: "R$ 24,90",
  },
  {
    img: maracuja,
    name: "Caipirinha de Maracujá",
    desc: "Dose de cachaça com maracujá da fruta — cítrico, encorpado e tropical.",
    price: "R$ 19,90",
  },
  {
    img: limao,
    name: "Caipirinha de Limão",
    desc: "Clássica e refrescante: cachaça, limão, açúcar e gelo. Do jeito que tem que ser.",
    price: "R$ 19,90",
  },
  {
    img: damaNoite,
    name: "Dama da Noite",
    desc: "Campari, Paratudo e espuma de gengibre. Amargo na medida, com final aveludado.",
    price: "R$ 19,90",
  },
];

export function DrinksCarousel() {
  const [index, setIndex] = useState(0);
  const drink = drinks[index];

  const prev = () => setIndex((i) => (i - 1 + drinks.length) % drinks.length);
  const next = () => setIndex((i) => (i + 1) % drinks.length);

  return (
    <div className="mx-auto max-w-3xl px-6">
      <div className="mb-6 text-center">
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold/80">Coquetelaria autoral</p>
        <h3
          className="text-2xl text-foreground md:text-3xl"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Os drinks mais pedidos da casa.
        </h3>
        <p className="mt-2 text-sm italic text-muted-foreground">
          Uma seleção dos favoritos — a carta completa tem muito mais para explorar.
        </p>
      </div>

      <div className="relative grid items-center gap-6 rounded-sm border border-gold/15 bg-background/40 p-5 shadow-2xl md:grid-cols-[40%_1fr] md:gap-8 md:p-6">
        <div className="overflow-hidden rounded-sm border border-gold/20">
          <img
            key={drink.img}
            src={drink.img}
            alt={drink.name}
            className="aspect-[3/4] h-full w-full object-cover animate-in fade-in duration-500"
          />
        </div>
        <div className="text-center md:text-left">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold/80">
            {String(index + 1).padStart(2, "0")} / {String(drinks.length).padStart(2, "0")}
          </span>
          <h4
            className="mt-2 text-2xl text-foreground md:text-3xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            {drink.name}
          </h4>
          <div className="mx-auto mt-3 h-px w-12 bg-gold/50 md:mx-0" />
          <p className="mt-3 text-sm leading-relaxed text-foreground/85">{drink.desc}</p>
          <p className="mt-3 text-xs uppercase tracking-[0.25em] text-gold">{drink.price}</p>

          <div className="mt-5 flex items-center justify-center gap-3 md:justify-start">
            <button
              type="button"
              onClick={prev}
              aria-label="Drink anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold transition-all hover:-translate-x-0.5 hover:bg-gold hover:text-gold-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-1.5">
              {drinks.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Ir para drink ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-gold" : "w-1.5 bg-gold/30 hover:bg-gold/60"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Próximo drink"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold transition-all hover:translate-x-0.5 hover:bg-gold hover:text-gold-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
