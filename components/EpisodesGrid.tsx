import { DoubleDivider } from "@/components/ui/Divider";
import { FadeIn } from "@/components/ui/FadeIn";
import { EpisodeCard } from "@/components/EpisodeCard";
import { episodes } from "@/lib/content";

export function EpisodesGrid() {
  // Skip the first episode — it's already shown as hero
  const gridEpisodes = episodes.slice(1);

  return (
    <section
      id="episodes"
      className="px-4 md:px-8 py-12 max-w-7xl mx-auto"
      aria-label="Previous episodes"
    >
      {/* Section header */}
      <FadeIn>
        <h2 className="font-display font-bold text-ink text-3xl md:text-4xl mb-2">
          Previously in the Markets
        </h2>
        <SingleRule />
      </FadeIn>

      {/* Episodes grid — newspaper columns with thin vertical rules */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {gridEpisodes.map((ep, i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);
          const isLastCol = col === 2 || i === gridEpisodes.length - 1;
          const isFirstRow = row === 0;

          return (
            <FadeIn
              key={ep.id}
              delay={col * 0.1}
              className={[
                "p-6 md:p-8",
                !isLastCol ? "md:border-r border-ink" : "",
                !isFirstRow ? "border-t border-ink" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <EpisodeCard episode={ep} />
            </FadeIn>
          );
        })}
      </div>

      <div className="mt-12">
        <DoubleDivider />
      </div>
    </section>
  );
}

function SingleRule() {
  return <hr className="border-0 border-t border-ink mt-3 mb-0" />;
}
