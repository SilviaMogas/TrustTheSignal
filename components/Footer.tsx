import { DoubleDivider } from "@/components/ui/Divider";
import { site } from "@/lib/content";

const socialLinks = [
  { label: "TWITTER/X",  href: (s: typeof site.social) => s.twitter },
  { label: "LINKEDIN",   href: (s: typeof site.social) => s.linkedin },
  { label: "SUBSTACK",   href: (s: typeof site.social) => s.substack },
  { label: "RSS",        href: (s: typeof site.social) => s.rss },
  { label: "CONTACT",    href: (s: typeof site.social) => s.contact },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full" role="contentinfo">
      <DoubleDivider />

      <div className="px-4 md:px-8 py-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* ── Left: brand ───────────────────────────────────────────────── */}
          <div>
            <p
              className="font-blackletter text-ink leading-none mb-1"
              aria-label="Trust the Signal"
              style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)" }}
            >
              Trust the Signal
            </p>
            <p className="font-display italic text-ink-gray text-sm mb-4">
              {site.subtitle}
            </p>
            <p className="kicker text-ink-gray text-[0.55rem] mb-1">
              Published from {site.location}
            </p>
            <p className="kicker text-ink-gray text-[0.55rem]">
              &copy;&nbsp;{year}&nbsp;Trust the Signal. All rights reserved.
            </p>
          </div>

          {/* ── Centre: social links ───────────────────────────────────────── */}
          <div className="flex flex-col gap-2 md:items-center">
            <nav aria-label="Social links">
              <ul className="flex flex-wrap gap-x-4 gap-y-2 md:flex-col md:gap-1">
                {socialLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href(site.social)}
                      className="kicker text-ink text-[0.55rem] hover:text-ink-red transition-colors duration-150 focus-visible:outline-ink-red"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ── Right: disclaimer ─────────────────────────────────────────── */}
          <div className="md:text-right">
            <p className="font-body text-xs italic text-ink-gray leading-relaxed max-w-xs md:ml-auto">
              Opinions expressed are those of guests and host and do not
              constitute investment advice. Past performance is not indicative
              of future results.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom double rule + end mark */}
      <DoubleDivider />
      <div className="py-4 text-center">
        <p
          className="font-body italic text-ink-gray text-sm tracking-widest"
          aria-label="End of page"
        >
          &mdash;&nbsp;30&nbsp;&mdash;
        </p>
      </div>
    </footer>
  );
}
