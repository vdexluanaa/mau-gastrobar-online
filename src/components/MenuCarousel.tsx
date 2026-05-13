import croqueta from "@/assets/dish-croqueta.jpg";
import cupim from "@/assets/dish-cupim.jpg";
import ceviche from "@/assets/dish-ceviche.jpg";
import jilo from "@/assets/dish-jilo.jpg";
import gin from "@/assets/drink-gin.jpg";
import tropical from "@/assets/drink-tropical.jpg";

const items = [
  { img: croqueta, name: "A Braba no Brócolis", desc: "Croquetas de cupim · maionese de brócolis", price: "R$ 40" },
  { img: cupim, name: "Disco de Cupim", desc: "Cupim desfiado, muçarela e molho verde", price: "R$ 19,90" },
  { img: ceviche, name: "Ceviche Tropical", desc: "Tilápia, manga e pimentões", price: "R$ 39,99" },
  { img: jilo, name: "Chips de Jiló", desc: "Jiló crocante com molho verde", price: "R$ 24,99" },
  { img: gin, name: "Gin Autoral", desc: "Defumado, cítrico e herbal", price: "Drinks" },
  { img: tropical, name: "Tropical da Casa", desc: "Frutas vermelhas e alecrim", price: "Drinks" },
];

export function MenuCarousel() {
  // Duplicate for seamless infinite loop
  const loop = [...items, ...items];

  return (
    <div
      className="group relative overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <figure
            key={i}
            className="w-[280px] shrink-0 md:w-[340px]"
          >
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
              <div className="flex items-baseline justify-between gap-3">
                <p
                  className="text-lg text-foreground"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  {item.name}
                </p>
                <span className="text-xs uppercase tracking-[0.2em] text-gold/80">{item.price}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
