import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

type Review = {
  name: string;
  text: string;
  rating: number;
  badge?: string;
};

const reviews: Review[] = [
  {
    name: "Mariane Santos",
    badge: "Local Guide",
    rating: 5,
    text:
      "Eu sou simplesmente apaixonada neste lugar. Ambiente maravilhoso, música ao vivo na sexta e no sábado, chopp e cerveja estupidamente gelados. Atendimento impecável, desde os donos até os meninos atendentes. A comida é topíssima — o hambúrguer, a tilápia, a batata frita e o almoço executivo são os melhores de Goiânia. E os Chips de Jiló do Mauá com cupim desfiado e creme de queijo são a perfeição. Nota 1000.",
  },
  {
    name: "Letícia Pires",
    rating: 5,
    text:
      "Melhor bar que já fui aqui em Goiânia. Ótimo atendimento, comida e sobremesas muito bem caprichadas, rodízio de drinks por R$49,90 à vontade não tem em nenhum lugar. Só aqui! Recomendo muito ♥",
  },
  {
    name: "Gabriela Ramos",
    badge: "Local Guide",
    rating: 5,
    text:
      "Pedi carne na chapa completa, uma delícia! Mandioca com aquele gostinho de manteiga, sabe? Muito saborosa. Os donos, Pricila e Flávio, muito gentis e solícitos. Atendimento de parabéns e ainda tem show ao vivo nos finais de semana. Mauá tem meu coração.",
  },
  {
    name: "Stephany Lopes",
    rating: 5,
    text:
      "Super recomendo, lugar incrível, atendimento excelente, o rodízio de drinks é muito top. Vou voltar mais vezes com certeza!",
  },
  {
    name: "Raul Barbosa Barreto Doro",
    badge: "Local Guide",
    rating: 5,
    text:
      "Ótimo ambiente, ótimo atendimento, cerveja gelada, petiscos de qualidade e ótima localização — geralmente tem vaga na porta. Recomendo!",
  },
  {
    name: "Rodrigo Vinícius",
    badge: "Local Guide",
    rating: 5,
    text:
      "Um lugar super bacana. Chopp geladinho, o de vinho é uma delícia. A música ao vivo é o ponto alto do bar. Recomendo a experiência.",
  },
];

export function ReviewsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 6000);
    return () => clearInterval(id);
  }, [paused]);

  const next = () => setIndex((i) => (i + 1) % reviews.length);
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);

  return (
    <div
      className="mx-auto max-w-3xl px-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-2xl border border-gold/25 bg-green-deep/40 px-6 py-10 shadow-2xl backdrop-blur-sm md:px-12 md:py-14">
        <Quote
          className="absolute right-6 top-6 h-16 w-16 text-gold/15"
          strokeWidth={1}
          aria-hidden
        />

        <div className="relative min-h-[220px] md:min-h-[200px]">
          {reviews.map((r, i) => (
            <article
              key={r.name}
              aria-hidden={i !== index}
              className={`absolute inset-0 flex flex-col transition-all duration-700 ease-out ${
                i === index
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-3 opacity-0"
              }`}
            >
              <div className="mb-4 flex items-center gap-1 text-gold">
                {Array.from({ length: r.rating }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" strokeWidth={0} />
                ))}
              </div>
              <p className="text-base leading-relaxed text-foreground/90 md:text-lg">
                "{r.text}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-sm font-semibold text-gold">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{r.name}</div>
                  {r.badge && (
                    <div className="text-[11px] uppercase tracking-[0.2em] text-gold/70">
                      {r.badge}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-between gap-4">
          <button
            onClick={prev}
            aria-label="Avaliação anterior"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 bg-white/5 text-gold transition-all hover:scale-105 hover:border-gold hover:bg-green hover:text-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir para avaliação ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-gold" : "w-1.5 bg-gold/30 hover:bg-gold/60"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Próxima avaliação"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 bg-white/5 text-gold transition-all hover:scale-105 hover:border-gold hover:bg-green hover:text-foreground"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://www.google.com/maps/place/Mau%C3%A1+Gastrobar/@-16.7066,-49.2654,17z/data=!4m8!3m7!1s0x935ef0c8a2ce53b9:0x0!8m2!3d-16.7066!4d-49.2654!9m1!1b1"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/10 px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-green hover:shadow-lg hover:shadow-green/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          Ver todas as avaliações
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </a>
      </div>
    </div>
  );
}
