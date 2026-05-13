import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Instagram, Award } from "lucide-react";

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
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500&display=swap",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground" style={{ fontFamily: "var(--font-sans)" }}>
      {/* Header */}
      <header className="border-b border-border/40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div
            className="text-2xl tracking-[0.25em] text-gold"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            MAUÁ
          </div>
          <a
            href="https://www.instagram.com/mauaagastrobar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-gold"
          >
            Instagram
          </a>
        </div>
      </header>

      {/* Map */}
      <section className="border-b border-border/40">
        <div className="mx-auto max-w-6xl px-6 pt-14 pb-8 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold/80">Onde nos encontrar</p>
          <h1
            className="text-4xl text-foreground md:text-5xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.02em" }}
          >
            Av. Dom Emanuel, 143 — Cidade Jardim
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Goiânia, GO</p>
        </div>
        <div className="mx-auto max-w-6xl px-6 pb-14">
          <div className="overflow-hidden rounded-sm border border-border/60 shadow-2xl">
            <iframe
              title="Localização do Mauá Gastrobar"
              src="https://www.google.com/maps?q=Av.+Dom+Emanuel,+143,+Cidade+Jardim,+Goi%C3%A2nia+-+GO&output=embed"
              width="100%"
              height="450"
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

      {/* Sobre */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold/80">Sobre a casa</p>
        <h2
          className="text-3xl leading-tight text-foreground md:text-4xl"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Um endereço para quem entende que comer bem é um ritual.
        </h2>
        <div className="mx-auto mt-8 h-px w-16 bg-gold/50" />
        <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
          No coração da Cidade Jardim, o <span className="text-foreground">Mauá Gastrobar</span> nasceu
          do desejo de transformar a noite goianiense em experiência. Cozinha autoral, drinks pensados
          como assinatura e uma atmosfera que convida a ficar — a casa reúne quem busca sabor, encontro
          e a sensação rara de estar exatamente no lugar certo.
        </p>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          Cada prato carrega intenção. Cada detalhe, cuidado. Aqui, jantar é pausa, é celebração, é
          conversa que se estende junto da última taça.
        </p>
      </section>

      {/* Croqueta premiada */}
      <section className="border-y border-border/40 bg-gold/[0.04]">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <Award className="mx-auto h-8 w-8 text-gold" strokeWidth={1.2} />
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-gold">Comida di Buteco 2026</p>
          <h3
            className="mt-3 text-2xl text-foreground md:text-3xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            "A Braba no Brócolis"
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            Croquetas artesanais de cupim desfiado com alho-poró, recheadas com muçarela e
            acompanhadas de maionese de brócolis cru com limão. Uma criação que coloca a casa
            no mapa da gastronomia brasileira.
          </p>
        </div>
      </section>

      {/* Info */}
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

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 text-center">
        <p
          className="text-lg tracking-[0.25em] text-gold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          MAUÁ
        </p>
        <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Gastrobar · Goiânia
        </p>
      </footer>
    </main>
  );
}
