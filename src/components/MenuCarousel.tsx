import { ExternalLink } from "lucide-react";
import picanha from "@/assets/dish-picanha-steak.jpg";
import jilozinho from "@/assets/dish-jilozinho-maua.jpg";
import mixCupim from "@/assets/dish-mix-cupim.jpg";
import chipsJilo from "@/assets/dish-chips-jilo.jpg";
import carneSerenada from "@/assets/dish-carne-serenada.jpg";
import croqueta from "@/assets/dish-braba-brocolis.jpg";

const MENU_URL = "https://www.vucafood.com.br";

const items = [
  {
    img: croqueta,
    name: "A Braba no Brócolis",
    desc: "Croquetas de cupim · maionese de brócolis",
    price: "R$ 40,00",
  },
  {
    img: picanha,
    name: "Picanha Steak",
    desc: "600g de picanha grelhada · 500g de mandioca na manteiga de garrafa · toque de pimentas",
    price: "R$ 79,99",
  },
  {
    img: carneSerenada,
    name: "Carne Serenada Angus",
    desc: "500g de coxão duro Angus na manteiga do sertão · mandioca, pimentão e cereja · muçarela derretida",
    price: "R$ 94,99",
  },
  {
    img: mixCupim,
    name: "Mix de Cupim",
    desc: "700g de cupim selado na manteiga · 400g de anéis de cebola · 400g de batatinhas fritas",
    price: "R$ 108,00",
  },
  {
    img: jilozinho,
    name: "Jilozinho do Mauá",
    desc: "Chips crocantes, creme de queijo e cupim desfiado · prato do concurso 2025",
    price: "R$ 50,00",
  },
  {
    img: chipsJilo,
    name: "Chips de Jiló",
    desc: "Jiló crocante com molho verde da casa",
    price: "R$ 24,99",
  },
];

export function MenuCarousel() {
  const loop = [...items, ...items];

  return (
    <div className="space-y-10">
      <div
        className="group relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused]">
          {loop.map((item, i) => (
            <figure key={i} className="w-[280px] shrink-0 md:w-[340px]">
              <div className="overflow-hidden rounded-sm border border-border/60">
                <img
                  src={item.img}
                  alt={item.name}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="aspect-square h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <figcaption className="mt-4 px-1">
                <div className="flex flex-col items-center text-center gap-1">
                  <p
                    className="text-lg text-foreground"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    {item.name}
                  </p>
                  <span className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.2em] text-gold/80" style={{ fontVariantNumeric: "lining-nums tabular-nums" }}>
                    {item.price}
                  </span>
                </div>
                <p className="mt-2 text-center text-xs text-muted-foreground">{item.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>


    </div>
  );
}
