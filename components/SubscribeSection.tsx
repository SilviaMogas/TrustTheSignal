import { FadeIn } from "@/components/ui/FadeIn";
import { site } from "@/lib/content";

export function SubscribeSection() {
  return (
    <section
      id="subscribe"
      className="px-4 md:px-8 py-12 max-w-7xl mx-auto"
      aria-label="Subscribe to the newsletter"
    >
      <FadeIn>
        {/* Classified-ad double-border box */}
        <div className="classified-box p-10 md:p-14 text-center max-w-3xl mx-auto">

          {/* Small label above headline */}
          <p className="kicker text-ink-gray text-[0.6rem] mb-5">
            THE DISPATCH&nbsp;&middot;&nbsp;WEEKLY MEMO
          </p>

          {/* Headline */}
          <h2
            className="font-display font-bold text-ink leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
          >
            Subscribe to<br />the Dispatch
          </h2>

          {/* Copy */}
          <p className="font-body text-base md:text-lg leading-relaxed text-ink max-w-xl mx-auto mb-8">
            Weekly memos from Silvia, straight from the trading floor.
            Cutting through the noise on rates, equities, and the stories
            moving markets. Join{" "}
            <span className="font-semibold">{site.substackCount}</span>{" "}
            readers on Wall Street and beyond.
          </p>

          {/* CTA */}
          <a
            href={site.substackUrl}
            className="inline-block bg-ink text-paper font-meta font-600 text-sm tracking-[0.18em] uppercase px-10 py-4 hover:bg-ink-red transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-ink-red"
            aria-label="Subscribe on Substack"
          >
            Subscribe on Substack&nbsp;&rarr;
          </a>

          {/* Fine print */}
          <p className="font-body text-xs italic text-ink-gray mt-5">
            Free. No spam. Unsubscribe anytime.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
