import { DoubleDivider } from "@/components/ui/Divider";
import { GuestPhoto } from "@/components/ui/GuestPhoto";
import { FadeIn } from "@/components/ui/FadeIn";
import { host } from "@/lib/content";

export function AboutHost() {
  return (
    <section
      id="about"
      className="px-4 md:px-8 py-12 max-w-7xl mx-auto"
      aria-label="About the host"
    >
      <FadeIn>
        {/* Section header */}
        <p className="kicker text-ink-gray text-[0.6rem] mb-3">
          THE HOST
        </p>
        <DoubleDivider className="mb-10" />
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-0">

        {/* ── Left: photo + caption ─────────────────────────────────────── */}
        <FadeIn className="lg:pr-12 mb-10 lg:mb-0 lg:border-r border-ink">
          <div className="aspect-[3/4] relative w-full max-w-xs mx-auto lg:max-w-full">
            <GuestPhoto
              src={host.photo}
              name={host.name}
            />
          </div>
          <p className="font-body text-xs italic text-ink-gray mt-3 text-center lg:text-left">
            {host.caption}
          </p>
        </FadeIn>

        {/* ── Right: bio paragraphs ─────────────────────────────────────── */}
        <FadeIn delay={0.15} className="lg:pl-12">
          <h2 className="font-display font-bold text-ink text-3xl md:text-4xl leading-tight mb-6">
            {host.name}
          </h2>

          {host.bio.map((paragraph, i) => (
            <p
              key={i}
              className={[
                "font-body text-base md:text-lg leading-relaxed text-ink mb-5",
                i === 0 ? "dropcap" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {paragraph}
            </p>
          ))}
        </FadeIn>
      </div>

      <div className="mt-12">
        <DoubleDivider />
      </div>
    </section>
  );
}
