// ─────────────────────────────────────────────────────────────────────────────
// TRUST THE SIGNAL — Content Library
// Edit all copy, episodes, and host bio from this single file.
// ─────────────────────────────────────────────────────────────────────────────

// ── Types ────────────────────────────────────────────────────────────────────

export type EpisodeCategory =
  | "MACRO"
  | "EQUITIES"
  | "PRIVATE CREDIT"
  | "FED WATCH"
  | "FIXED INCOME"
  | "EMERGING MARKETS";

export interface Guest {
  name: string;
  role: string;
  firm: string;
  /** Path in /public/images/ — replace with real photo when available */
  photo: string;
}

export interface ListenUrls {
  spotify?: string;
  apple?: string;
  youtube?: string;
  amazon?: string;
}

export interface Episode {
  id: number;
  /** Display episode number (e.g. 23) */
  number: number;
  /** URL-safe slug */
  slug: string;
  /** Main headline */
  title: string;
  /** One-line subtitle / deck */
  subtitle: string;
  /** 2–3 sentence description for the hero or card */
  description: string;
  guest: Guest;
  category: EpisodeCategory;
  /** Formatted date string, e.g. "APR 15, 2026" */
  publishedAt: string;
  /** Formatted duration string, e.g. "58 MIN" */
  duration: string;
  listenUrls: ListenUrls;
}

export interface Host {
  name: string;
  /** Short one-liner for photo caption */
  caption: string;
  /** Multi-paragraph bio — edit each string individually */
  bio: string[];
  /** Path in /public/images/ */
  photo: string;
  social: {
    twitter: string;
    linkedin: string;
    email: string;
  };
}

export interface SiteConfig {
  title: string;
  subtitle: string;
  tagline: string;
  /** Full Substack URL — replace before going live */
  substackUrl: string;
  /** Subscriber count shown in the subscribe section */
  substackCount: string;
  volumeNumber: number;
  editionNumber: number;
  location: string;
  /** Global listen URLs shown in the platform bar */
  listenUrls: {
    spotify: string;
    apple: string;
    youtube: string;
    amazon: string;
    pocketcasts: string;
  };
  social: {
    twitter: string;
    linkedin: string;
    substack: string;
    rss: string;
    contact: string;
  };
}

// ── Site Config ───────────────────────────────────────────────────────────────
// EDIT: substackUrl, substackCount, volumeNumber, editionNumber, listenUrls, social

export const site: SiteConfig = {
  title: "Trust the Signal",
  subtitle: "by Silvia Mogas",
  tagline: "Dispatches from the trading floor — filtering signal from noise.",

  // ↓ Replace with your Substack URL before launch
  substackUrl: "[PONER_URL_SUBSTACK_AQUI]",
  substackCount: "4,200",

  volumeNumber: 1,
  editionNumber: 23,
  location: "Lower Manhattan, NYC",

  listenUrls: {
    spotify: "#",    // ← Replace with your Spotify link
    apple: "#",      // ← Replace with your Apple Podcasts link
    youtube: "#",    // ← Replace with your YouTube link
    amazon: "#",     // ← Replace with your Amazon Music link
    pocketcasts: "#",// ← Replace with your Pocket Casts link
  },
  social: {
    twitter: "#",    // ← Your Twitter/X handle URL
    linkedin: "#",   // ← Your LinkedIn URL
    substack: "[PONER_URL_SUBSTACK_AQUI]",
    rss: "#",
    contact: "mailto:hello@trustthesignal.com",
  },
};

// ── Host ─────────────────────────────────────────────────────────────────────
// EDIT: Replace every [PLACEHOLDER] string with real copy.
// The bio array renders as separate paragraphs; the first gets a red dropcap.

export const host: Host = {
  name: "Silvia Mogas",
  caption: "Silvia Mogas — Host, Trust the Signal",
  photo: "/images/silvia.jpg", // ← Add real photo to /public/images/silvia.jpg

  social: {
    twitter: "#",   // ← Your Twitter/X handle URL
    linkedin: "#",  // ← Your LinkedIn URL
    email: "hello@trustthesignal.com",
  },

  bio: [
    // ↓ Paragraph 1: who you are and your capital markets background in NYC
    "[PLACEHOLDER — Quién es Silvia y su background en capital markets NYC. Ej: Silvia Mogas ha pasado la última década en el corazón de los mercados de capitales de Nueva York, trabajando con [FIRMA/S] y sentándose en los trading floors donde las decisiones se toman antes de que los titulares aparezcan. Para Silvia, distinguir señal de ruido no es una metáfora: es la práctica profesional de cada día.]",

    // ↓ Paragraph 2: why Trust the Signal exists
    "[PLACEHOLDER — Por qué nace Trust the Signal. Ej: Trust the Signal nació de una frustración sencilla: las mejores conversaciones en mercados de capitales ocurren a puerta cerrada, y el debate público rara vez captura su profundidad real. Silvia construyó este podcast para cambiar eso — una entrevista larga y sin filtros cada vez, con profesionales que tienen skin in the game de verdad.]",

    // ↓ Paragraph 3: what guests you bring and what listeners will find
    "[PLACEHOLDER — Tipo de invitados y qué encontrará el oyente. Ej: Cada episodio trae a alguien que ha tomado decisiones reales — gestores con libros de miles de millones, economistas que han asesorado a bancos centrales, traders que han vivido la volatilidad que ahora analizan. Sin fluff, sin hot takes. Solo las preguntas que importan y las respuestas que la mayoría de los medios no tienen el contexto para pedir.]",

    // ↓ Paragraph 4: publication cadence + subtle subscribe CTA
    "[PLACEHOLDER — Cadencia de publicación y llamada a suscribirse. Ej: Nuevos episodios cada dos martes. Entre episodios, Silvia publica un memo semanal en Substack — la misma señal en formato escrito: qué está moviendo los mercados, qué se está malinterpretando, y qué hay que vigilar. Suscríbete abajo para recibirlo directamente.]",
  ],
};

// ── Episodes ──────────────────────────────────────────────────────────────────
// EDIT: Add/remove episodes freely. The first episode in the array is the HERO.
// Categories: "MACRO" | "EQUITIES" | "PRIVATE CREDIT" | "FED WATCH" | "FIXED INCOME" | "EMERGING MARKETS"

export const episodes: Episode[] = [
  // ── EPISODE 23 — FEATURED / HERO ─────────────────────────────────────────
  {
    id: 1,
    number: 23,
    slug: "inside-the-fed-communication-problem",
    title: "Inside the Fed's Communication Problem",
    subtitle:
      "A former insider explains how central bank language became its own market-moving instrument",
    description:
      "After eighteen months trading alongside Fed officials, Sarah Chen knows what the minutes don't say. In a rare candid conversation, she unpacks how central bank communication has become its own market-moving instrument — and why traders should pay closer attention to what's left unsaid.",
    guest: {
      name: "Sarah Chen",
      role: "Former Senior Trader",
      firm: "Federal Reserve Bank of New York",
      photo: "/images/guest-sarah-chen.jpg",
    },
    category: "FED WATCH",
    publishedAt: "APR 15, 2026",
    duration: "58 MIN",
    listenUrls: {
      spotify: "#",
      apple: "#",
      youtube: "#",
    },
  },

  // ── EPISODE 22 ────────────────────────────────────────────────────────────
  {
    id: 2,
    number: 22,
    slug: "liquidity-mirage-private-credit",
    title: "The Liquidity Mirage in Private Credit",
    subtitle:
      "Many LPs are confusing duration for stability — and the next cycle will expose the difference",
    description:
      "The private credit boom is real. So is its liquidity risk. Marcus Webb, who has deployed over $4 billion in direct lending, argues that many LPs are confusing duration for stability — and that the next cycle will expose the difference between the two.",
    guest: {
      name: "Marcus Webb",
      role: "Partner",
      firm: "Athena Credit Partners",
      photo: "/images/guest-marcus-webb.jpg",
    },
    category: "PRIVATE CREDIT",
    publishedAt: "APR 1, 2026",
    duration: "51 MIN",
    listenUrls: {
      spotify: "#",
      apple: "#",
      youtube: "#",
    },
  },

  // ── EPISODE 21 ────────────────────────────────────────────────────────────
  {
    id: 3,
    number: 21,
    slug: "why-the-curve-finally-matters-again",
    title: "Why the Curve Finally Matters Again",
    subtitle:
      "The inversion era is over — and what comes next will redefine duration risk for a decade",
    description:
      "For two years, every fixed income playbook said ignore the curve. Dr. Elena Vasquez says the inversion era is over — and that what happens in the next 18 months will redefine how portfolio managers think about duration risk for a generation.",
    guest: {
      name: "Dr. Elena Vasquez",
      role: "Chief Economist",
      firm: "Harrison Brothers",
      photo: "/images/guest-elena-vasquez.jpg",
    },
    category: "MACRO",
    publishedAt: "MAR 18, 2026",
    duration: "47 MIN",
    listenUrls: {
      spotify: "#",
      apple: "#",
      youtube: "#",
    },
  },

  // ── EPISODE 20 ────────────────────────────────────────────────────────────
  {
    id: 4,
    number: 20,
    slug: "equity-rally-no-one-believes-in",
    title: "The Equity Rally No One Believes In",
    subtitle:
      "The most hated bull market in a generation — and what would finally break it",
    description:
      "Positioning is light. Sentiment is skeptical. But markets keep grinding higher. David Park, who runs a $2.3 billion macro book at Cerberus, explains why the most hated bull market in a generation might have more room — and what would finally break it.",
    guest: {
      name: "David Park",
      role: "Portfolio Manager",
      firm: "Cerberus Macro Capital",
      photo: "/images/guest-david-park.jpg",
    },
    category: "EQUITIES",
    publishedAt: "MAR 4, 2026",
    duration: "44 MIN",
    listenUrls: {
      spotify: "#",
      apple: "#",
      youtube: "#",
    },
  },

  // ── EPISODE 19 ────────────────────────────────────────────────────────────
  {
    id: 5,
    number: 19,
    slug: "when-the-floor-moves-fixed-income-rate-reversal",
    title: "When the Floor Moves",
    subtitle:
      "Who owns the duration — and why the next liquidity event will catch people off guard",
    description:
      "James Thornton has traded fixed income through three rate cycles. He says this one is different — not because of where rates are, but because of who owns the duration. A frank conversation about basis risk, the dealer balance sheet, and why the next liquidity event will catch people off guard.",
    guest: {
      name: "James Thornton",
      role: "Head of Fixed Income Trading",
      firm: "Northern State Capital",
      photo: "/images/guest-james-thornton.jpg",
    },
    category: "FIXED INCOME",
    publishedAt: "FEB 18, 2026",
    duration: "53 MIN",
    listenUrls: {
      spotify: "#",
      apple: "#",
      youtube: "#",
    },
  },

  // ── EPISODE 18 ────────────────────────────────────────────────────────────
  {
    id: 6,
    number: 18,
    slug: "brazil-turkey-next-dollar-shock",
    title: "Brazil, Turkey, and the Next Dollar Shock",
    subtitle:
      "Why the next Fed pivot will matter more for Jakarta than for JPMorgan",
    description:
      "EM is either the trade of the decade or the most overcrowded consensus position in markets. Priya Malhotra doesn't hedge her answer. A deep dive into the dollar's structural role in frontier markets and what the next Fed pivot really means for emerging economies.",
    guest: {
      name: "Priya Malhotra",
      role: "EM Macro Strategist",
      firm: "Global Frontier Advisors",
      photo: "/images/guest-priya-malhotra.jpg",
    },
    category: "EMERGING MARKETS",
    publishedAt: "FEB 4, 2026",
    duration: "62 MIN",
    listenUrls: {
      spotify: "#",
      apple: "#",
      youtube: "#",
    },
  },
];
