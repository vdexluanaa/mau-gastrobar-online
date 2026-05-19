import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Instagram, Award } from "lucide-react";
import { MenuCarousel } from "@/components/MenuCarousel";
import croquetaImg from "@/assets/dish-croqueta.jpg";
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
        content:
          "Cozinha autoral e croquetas premiadas no coração da Cidade Jardim, Goiânia.",
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

function Logo({ className = "h-32 md:h-40", subtitle }: { className?: string; subtitle?: string }) {
  return (
    <div className="flex flex-col items-center leading-tight">
      <img src={logoImg} alt="Mauá Gastrobar" className={`${className} w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]`} />
      {subtitle && (
        <div className="mt-3 text-[11px] tracking-[0.45em] text-gold">{subtitle}</div>
      )}
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground" style={{ fontFamily: "var(--font-sans)" }}>
      {/* Header — banner verde com logo centralizada */}
      <header className="bg-green-deep border-b border-gold/20">
        <div className="mx-auto max-w-6xl px-6 py-6 flex justify-center">
          <Logo />
        </div>
      </header>

      {/* Map */}
      <section className="border-b border-border/40">
        <div className="mx-auto max-w-6xl px-6 pt-12 pb-6 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold/80">Onde nos encontrar</p>
          <h1
            className="text-3xl text-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.02em" }}
          >
            Av. Dom Emanuel, 143 — Cidade Jardim
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Goiânia, GO</p>
        </div>
        <div className="mx-auto max-w-4xl px-6 pb-12">
          <div className="overflow-hidden rounded-sm border border-border/60 shadow-2xl">
            <iframe
              title="Localização do Mauá Gastrobar"
              src="https://www.google.com/maps?q=Av.+Dom+Emanuel,+143,+Cidade+Jardim,+Goi%C3%A2nia+-+GO&output=embed"
              width="100%"
              height="340"
              style={{ border: 0, display: "block", filter: "grayscale(0.3) contrast(1.05)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://maps.app.goo.gl/2nt9ZiCS6vUck7Sx9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold transition-opacity hover:opacity-70"
            >
              <MapPin className="h-3.5 w-3.5" />
              Abrir rota no Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Sobre — com foto da fachada ao fundo */}
      <section className="relative overflow-hidden">
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
            do desejo de transformar a noite goianiense em experiência. Cozinha autoral, drinks pensados
            como assinatura e uma atmosfera que convida a ficar — a casa reúne quem busca sabor, encontro
            e a sensação rara de estar exatamente no lugar certo.
          </p>
          <p className="mt-6 text-base leading-relaxed text-foreground/90 md:text-lg">
            Cada prato carrega intenção. Cada detalhe, cuidado. Aqui, jantar é pausa, é celebração, é
            conversa que se estende junto da última taça.
          </p>
        </div>
      </section>

      {/* Croqueta premiada — fundo verde + foto ao lado */}
      <section className="bg-green-deep border-y border-gold/20">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="overflow-hidden rounded-sm border border-gold/20 shadow-2xl">
              <img
                src={croquetaImg}
                alt="A Braba no Brócolis — croqueta premiada do Mauá Gastrobar"
                className="h-full w-full object-cover aspect-[4/3]"
              />
            </div>
            <div className="text-center md:text-left">
              <Award className="mx-auto md:mx-0 h-8 w-8 text-gold" strokeWidth={1.2} />
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-gold">Comida di Buteco 2026</p>
              <h3
                className="mt-3 text-3xl text-foreground md:text-4xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                "A Braba no Brócolis"
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/85 md:text-base">
                Croquetas artesanais de cupim desfiado com alho-poró, recheadas com muçarela e
                acompanhadas de maionese de brócolis cru com limão. Uma criação que coloca a casa
                no mapa da gastronomia brasileira.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carrossel cardápio */}
      <section className="py-20">
        <div className="mx-auto mb-10 max-w-3xl px-6 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold/80">Do cardápio</p>
          <h3
            className="text-3xl text-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Pratos e drinks que contam a casa.
          </h3>
        </div>
        <MenuCarousel />
      </section>

      {/* Info / contatos */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="text-center">
            <Clock className="mx-auto h-5 w-5 text-gold" strokeWidth={1.2} />
            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-gold/80">Horário</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Terça a Quinta: 18h–23h
              <br />
              Sex, Sáb e Dom: 12h–23h
            </p>
          </div>
          <div className="text-center">
            <Phone className="mx-auto h-5 w-5 text-gold" strokeWidth={1.2} />
            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-gold/80">Reservas</p>
            <a
              href="tel:+556231000024"
              className="mt-3 block text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              (62) 3100-0024
            </a>
          </div>
          <div className="text-center">
            <Instagram className="mx-auto h-5 w-5 text-gold" strokeWidth={1.2} />
            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-gold/80">Siga</p>
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
      </section>

      {/* Footer — verde com logo centralizada */}
      <footer className="bg-green-deep border-t border-gold/20 py-10">
        <div className="flex justify-center">
          <Logo className="h-16" subtitle="GASTROBAR · GOIÂNIA" />
        </div>
      </footer>
    </main>
  );
}
