import type { Metadata } from "next";
import {
  UnifrakturMaguntia,
  Playfair_Display,
  Lora,
  Barlow_Condensed,
} from "next/font/google";
import "./globals.css";
import { site, host } from "@/lib/content";

const unifraktur = UnifrakturMaguntia({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-blackletter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-meta",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Trust the Signal by Silvia Mogas",
    template: "%s | Trust the Signal",
  },
  description: site.tagline,
  openGraph: {
    type: "website",
    title: "Trust the Signal by Silvia Mogas",
    description: site.tagline,
    siteName: "Trust the Signal",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trust the Signal by Silvia Mogas",
    description: site.tagline,
  },
  keywords: [
    "capital markets",
    "podcast",
    "finance",
    "macro",
    "fixed income",
    "Wall Street",
    "Silvia Mogas",
    "Trust the Signal",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PodcastSeries",
  name: site.title,
  description: site.tagline,
  inLanguage: "en",
  author: {
    "@type": "Person",
    name: host.name,
  },
  publisher: {
    "@type": "Person",
    name: host.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${unifraktur.variable} ${playfair.variable} ${lora.variable} ${barlow.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-paper text-ink font-body antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
