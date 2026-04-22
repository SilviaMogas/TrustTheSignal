import { FadeIn } from "@/components/ui/FadeIn";
import { site } from "@/lib/content";

function SpotifyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true" className="w-8 h-8">
      <circle cx="12" cy="12" r="10" />
      <path d="M7.5 15c2.8-1.8 6.5-1.8 9 0" />
      <path d="M8 11.5c2.5-1.5 6.5-1.5 8 0" />
      <path d="M8.5 8.2c2-1.2 5.5-1.2 7 0" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true" className="w-8 h-8">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="12" cy="10.5" r="2.5" />
      <path d="M9.5 16a2.5 2.5 0 0 0 5 0" />
      <line x1="12" y1="8" x2="12" y2="6" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true" className="w-8 h-8">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 1.96C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58Z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
    </svg>
  );
}

function AmazonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true" className="w-8 h-8">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function PocketCastsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true" className="w-8 h-8">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const platforms = [
  { name: "Spotify",        Icon: SpotifyIcon,     href: (u: typeof site.listenUrls) => u.spotify },
  { name: "Apple Podcasts", Icon: AppleIcon,        href: (u: typeof site.listenUrls) => u.apple },
  { name: "YouTube",        Icon: YouTubeIcon,      href: (u: typeof site.listenUrls) => u.youtube },
  { name: "Amazon Music",   Icon: AmazonIcon,       href: (u: typeof site.listenUrls) => u.amazon },
  { name: "Pocket Casts",   Icon: PocketCastsIcon,  href: (u: typeof site.listenUrls) => u.pocketcasts },
] as const;

export function PlatformLinks() {
  return (
    <section
      id="listen"
      className="px-4 md:px-8 py-12 max-w-7xl mx-auto"
      aria-label="Listen on your podcast platform"
    >
      <FadeIn>
        <p className="kicker text-ink-gray text-[0.6rem] text-center mb-8">
          AVAILABLE ON
        </p>

        <ul
          className="flex flex-wrap justify-center items-center gap-10 md:gap-14"
          role="list"
          aria-label="Podcast platforms"
        >
          {platforms.map(({ name, Icon, href }) => (
            <li key={name}>
              <a
                href={href(site.listenUrls)}
                aria-label={`Listen on ${name}`}
                className="platform-icon flex flex-col items-center gap-2 group"
              >
                <span className="group-hover:text-ink-red transition-colors duration-150">
                  <Icon />
                </span>
                <span className="kicker text-[0.5rem] text-ink-gray group-hover:text-ink-red transition-colors duration-150">
                  {name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </FadeIn>
    </section>
  );
}
