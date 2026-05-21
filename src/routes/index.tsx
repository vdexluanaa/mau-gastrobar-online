import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Clock, Instagram, Award, ArrowRight } from "lucide-react";
import { MenuCarousel } from "@/components/MenuCarousel";
import { DrinksCarousel } from "@/components/DrinksCarousel";
import { HappyHourBanner } from "@/components/HappyHourBanner";
import croquetaImg from "@/assets/dish-braba-brocolis.jpg";
import jilozinhoImg from "@/assets/dish-jilozinho-maua.jpg";
import facadeImg from "@/assets/maua-facade-night.jpg";
import logoImg from "@/assets/maua-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mauá Gastrobar — Cozinha autoral em Goiânia" },
      {
        name: "description",
        content:
          "Mauá Gastrobar — cozinha autoral, croquetas premiadas e atmosfera única no coração da Cidade Jardim, Goiânia.",
      },
      { property: "og:title", content: "Mauá Gastrobar" },
      {
        property: "og:description",
        content: "Cozinha autoral e croquetas premiadas no coração da Cidade Jardim, Goiânia.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500&display=swap",
      },
    ],
  }),
});

function Logo({ className = "h-24", subtitle }: { className?: string; subtitle?: string }) {
  return (
    <div className="flex flex-col items-center leading-tight">
      <img src={logoImg} alt="Mauá Gastrobar" className={`${className} w-auto object-contain`} />
      {subtitle && <div className="mt-2 text-[10px] tracking-[0.4em] text-gold">{subtitle}</div>}
    </div>
  );
}

function RevealSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={`${className} reveal ${active ? "active" : ""}`}>
      {children}
    </section>
  );
}

function ChampionDishToggle() {
  const dishes = [
    {
      img: croquetaImg,
      label: "Comida di Buteco 2026",
      title: '"A Braba no Brócolis"',
      desc: "Croquetas artesanais de cupim desfiado com alho-poró, recheadas com muçarela e acompanhadas de maionese de brócolis cru com limão. Uma criação que coloca a casa no mapa da gastronomia brasileira.",
    },
    {
      img: jilozinhoImg,
      label: "Comida di Buteco 2025",
      title: '"Jilozinho do Mauá"',
      desc: "O prato com o qual representamos o Mauá no concurso de 2025. Chips fritos crocantes, creme de queijo suave e cupim desfiado bem temperado — equilíbrio perfeito entre o crocante, o cremoso e o suculento.",
    },
  ];
  const [i, setI] = useState(0);
  const dish = dishes[i];
  const next = () => setI((v) => (v + 1) % dishes.length);

  return (
    <div className="grid items-center gap-10 md:grid-cols-2">
      <div className="relative overflow-hidden rounded-sm border border-white/10 shadow-2xl">
        <img
          key={dish.img}
          src={dish.img}
          alt={dish.title}
          className="h-full w-full object-cover aspect-[4/3] animate-in fade-in duration-500"
        />
      </div>
      <div className="text-center md:text-left">
        <Award className="mx-auto md:mx-0 h-8 w-8 text-white" strokeWidth={1.2} />
        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/80">{dish.label}</p>
        <h3
          className="mt-3 text-3xl text-white md:text-4xl"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          {dish.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-white/90 md:text-base">{dish.desc}</p>

        <div className="mt-8 flex items-center justify-center gap-4 md:justify-start">
          <button
            type="button"
            onClick={next}
            aria-label={`Ver ${dishes[(i + 1) % dishes.length].title}`}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-all hover:translate-x-0.5 hover:bg-white hover:text-sage focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white">
            Ver {dishes[(i + 1) % dishes.length].title}
          </span>
        </div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <main
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {/* Header — Revertido para original (escuro) */}
      <header className="bg-background border-b border-gold/10">
        <div className="mx-auto max-w-6xl px-6 py-6 flex justify-center">
          <Logo />
        </div>
      </header>

      {/* Map */}
      <RevealSection className="border-b border-border/40">
        <div className="mx-auto max-w-6xl px-6 pt-12 pb-6 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-sage/80">Onde nos encontrar</p>
          <h1
            className="text-3xl text-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.02em" }}
          >
            Av. Dom Emanuel, 143 — Cidade Jardim
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Goiânia, GO</p>
        </div>
        <div className="mx-auto max-w-4xl px-6 pb-12">
          <div className="mb-6 text-center">
            <a
              href="https://maps.app.goo.gl/CDMBchHhhD1C8FQv7"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-sage px-10 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white shadow-lg shadow-sage/30 ring-1 ring-white/30 transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-sage/90 hover:shadow-2xl hover:shadow-sage/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0 active:scale-[0.98]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full"
              />
              <MapPin className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
              <span className="relative">Traçar minha rota até o Mauá</span>
              <span
                aria-hidden
                className="relative text-base leading-none transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
          <div className="overflow-hidden rounded-sm border border-border/60 shadow-2xl">
            <iframe
              title="Localização do Mauá Gastrobar"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.383130605051!2d-49.301282!3d-16.6827039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef749293f0533%3A0x7e704153098f4951!2sMau%C3%A1%20Gastrobar!5e0!3m2!1spt-BR!2sbr!4v1716300000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="340"
              style={{ border: 0, display: "block", filter: "grayscale(0.3) contrast(1.05)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </RevealSection>

      {/* Sobre */}
      <RevealSection className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${facadeImg})` }}
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.16 0.012 60 / 0.92), oklch(0.16 0.012 60 / 0.78), oklch(0.16 0.012 60 / 0.92))",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold/80">Sobre a casa</p>
          <h2
            className="text-3xl leading-tight text-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Um endereço para quem entende que comer bem é um ritual.
          </h2>
          <div className="mx-auto mt-8 h-px w-16 bg-gold/50" />
          <p className="mt-8 text-base leading-relaxed text-foreground/90 md:text-lg">
            No coração da Cidade Jardim, o <span className="text-gold">Mauá Gastrobar</span> nasceu
            do desejo de transformar a noite goianiense em experiência. Cozinha autoral, drinks
            pensados como assinatura e uma atmosfera que convida a ficar — a casa reúne quem busca
            sabor, encontro e a sensação rara de estar exatamente no lugar certo.
          </p>
          <p className="mt-6 text-base leading-relaxed text-foreground/90 md:text-lg">
            Cada prato carrega intenção. Cada detalhe, cuidado. Aqui, jantar é pausa, é celebração,
            é conversa que se estende junto da última taça.
          </p>
        </div>
      </RevealSection>

      {/* Pratos campeões — Braba + Jilozinho */}
      <RevealSection className="bg-sage border-y border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <ChampionDishToggle />
        </div>
      </RevealSection>

      {/* Carrossel cardápio */}
      <RevealSection className="py-20">
        <div className="mx-auto mb-10 max-w-3xl px-6 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-sage/80">Do cardápio</p>
          <h3
            className="text-3xl text-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Pratos e drinks que contam a casa.
          </h3>
          <p className="mt-3 text-sm italic text-muted-foreground">
            Uma amostra dos pratos campeões e dos queridinhos do salão — o cardápio completo tem
            muito mais.
          </p>
        </div>
        <MenuCarousel />
      </RevealSection>

      {/* Happy Hour + Rodízio banner */}
      <RevealSection>
        <HappyHourBanner />
      </RevealSection>

      {/* Drinks famosos */}
      <RevealSection className="py-14">
        <DrinksCarousel />
      </RevealSection>

      {/* Info / contatos */}
      <RevealSection className="border-t border-white/5 bg-white/[0.02] py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="text-center">
              <Clock className="mx-auto h-5 w-5 text-sage" strokeWidth={1.2} />
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-sage/80">Horário</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Terça a Quinta: 18h–23h
                <br />
                Sex, Sáb e Dom: 12h–23h
              </p>
            </div>
            <div className="text-center">
              <Phone className="mx-auto h-5 w-5 text-sage" strokeWidth={1.2} />
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-sage/80">Reservas</p>
              <a
                href="tel:+556231000024"
                className="mt-3 block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                (62) 3100-0024
              </a>
            </div>
            <div className="text-center">
              <Instagram className="mx-auto h-5 w-5 text-sage" strokeWidth={1.2} />
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-sage/80">Siga</p>
              <a
                href="https://www.instagram.com/mauaagastrobar/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                @mauaagastrobar
              </a>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Footer */}
      <footer className="bg-sage border-t border-white/10 py-10">
        <div className="flex justify-center">
          <Logo className="h-20" />
        </div>
      </footer>
    </main>
  );
}
