import Link from "next/link";
import { DoubleDivider } from "@/components/ui/Divider";
import { site } from "@/lib/content";

function getEditionDate() {
  return new Date()
    .toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
    .toUpperCase();
}

const navLinks = [
  { label: "EPISODES", href: "#episodes" },
  { label: "NEWSLETTER", href: "#subscribe" },
  { label: "ABOUT", href: "#about" },
  { label: "LISTEN", href: "#listen" },
];

export function Masthead() {
  const dateStr = getEditionDate();

  return (
    <header className="w-full" role="banner">
      {/* Edition metadata line */}
      <div className="border-b border-ink py-2 px-4 text-center">
        <p className="kicker text-ink-gray text-[0.6rem]">
          VOL.&nbsp;{site.volumeNumber}&nbsp;&middot;&nbsp;NO.&nbsp;{site.editionNumber}
          &nbsp;&middot;&nbsp;NYC&nbsp;EDITION&nbsp;&middot;&nbsp;{dateStr}
        </p>
      </div>

      <DoubleDivider />

      {/* Masthead title block */}
      <div className="text-center py-10 px-4">
        <h1
          className="font-blackletter leading-none text-ink"
          style={{ fontSize: "clamp(3rem, 14vw, 9rem)" }}
          aria-label="Trust the Signal"
        >
          {/* Red 'i' on "Signal" — the dot as accent */}
          Trust the S<span className="text-ink-red" aria-hidden="true">i</span>gnal
        </h1>

        <p className="font-display italic text-ink-gray mt-3 text-xl md:text-2xl">
          {site.subtitle}
        </p>

        <p className="font-body italic text-ink-gray mt-3 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          {site.tagline}
        </p>
      </div>

      <DoubleDivider />

      {/* Navigation */}
      <nav aria-label="Main navigation">
        <ul className="flex justify-center flex-wrap gap-x-8 gap-y-2 py-3 px-4">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="kicker text-ink text-[0.6rem] hover:text-ink-red transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-ink-red"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <DoubleDivider />
    </header>
  );
}
