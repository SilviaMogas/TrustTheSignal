import { DoubleDivider } from "@/components/ui/Divider";
import { GuestPhoto } from "@/components/ui/GuestPhoto";
import { FadeIn } from "@/components/ui/FadeIn";
import { episodes } from "@/lib/content";

function SpotifyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true" className="w-3 h-3">
      <circle cx="12" cy="12" r="10" />
      <path d="M7.5 14.5c2.5-1.5 6.5-1.5 9 0" />
      <path d="M8 11.5c2.5-1.5 6.5-1.5 8 0" />
      <path d="M8.5 8.5c2-1 5.5-1 7 0" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true" className="w-3 h-3">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="12" cy="11" r="2.5" />
      <path d="M9.5 16.5a2.5 2.5 0 0 0 5 0" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true" className="w-3 h-3">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 1.96C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58Z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function HeroStory() {
  const featured = episodes[0];
  const { guest } = featured;

  return (
    <section className="px-4 md:px-8 py-10 max-w-7xl mx-auto" aria-label="Featured episode">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-0">

        {/* ── Left column: copy ─────────────────────────────────────────── */}
        <FadeIn className="lg:pr-10 pb-10 lg:pb-0 lg:border-r border-ink">

          {/* Kicker */}
          <p className="kicker text-ink-red text-[0.6rem] mb-4">
            LATEST&nbsp;&middot;&nbsp;EPISODE&nbsp;{featured.number}&nbsp;&middot;&nbsp;{featured.category}
          </p>

          {/* Headline */}
          <h2
            className="font-display font-bold text-ink leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            {featured.title}
          </h2>

          {/* Deck */}
          <p className="font-body text-base md:text-lg leading-relaxed text-ink mb-5 max-w-prose">
            {featured.description}
          </p>

          {/* Byline */}
          <p className="kicker text-ink-gray text-[0.55rem] mb-8">
            An interview by Silvia Mogas with&nbsp;
            <span className="text-ink">{guest.name}</span>,&nbsp;
            {guest.role} — {guest.firm}
          </p>

          {/* Listen buttons */}
          <div className="flex flex-wrap gap-2" role="list" aria-label="Listen on">
            {featured.listenUrls.spotify && (
              <a
                href={featured.listenUrls.spotify}
                className="listen-btn"
                aria-label="Listen on Spotify"
                role="listitem"
              >
                <SpotifyIcon />
                Spotify
              </a>
            )}
            {featured.listenUrls.apple && (
              <a
                href={featured.listenUrls.apple}
                className="listen-btn"
                aria-label="Listen on Apple Podcasts"
                role="listitem"
              >
                <AppleIcon />
                Apple Podcasts
              </a>
            )}
            {featured.listenUrls.youtube && (
              <a
                href={featured.listenUrls.youtube}
                className="listen-btn"
                aria-label="Watch on YouTube"
                role="listitem"
              >
                <YouTubeIcon />
                YouTube
              </a>
            )}
          </div>
        </FadeIn>

        {/* ── Right column: guest photo ──────────────────────────────────── */}
        <FadeIn delay={0.15} className="lg:pl-10 flex flex-col">
          <div className="aspect-[4/5] relative w-full max-w-sm mx-auto lg:max-w-full">
            <GuestPhoto src={guest.photo} name={guest.name} />
          </div>
          <p className="font-body text-xs italic text-ink-gray mt-3 text-center lg:text-left">
            {guest.name} — {guest.firm}
          </p>
        </FadeIn>
      </div>

      {/* Separator */}
      <div className="mt-10">
        <DoubleDivider />
        <p className="kicker text-ink-gray text-[0.55rem] text-right mt-2">
          {featured.publishedAt}&nbsp;&middot;&nbsp;{featured.duration}
        </p>
      </div>
    </section>
  );
}
