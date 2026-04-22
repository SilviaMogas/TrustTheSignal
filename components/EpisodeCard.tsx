import { GuestPhoto } from "@/components/ui/GuestPhoto";
import { Episode } from "@/lib/content";

interface EpisodeCardProps {
  episode: Episode;
}

const categoryColors: Record<string, string> = {
  MACRO: "text-ink-red",
  EQUITIES: "text-ink-red",
  "PRIVATE CREDIT": "text-ink-red",
  "FED WATCH": "text-ink-red",
  "FIXED INCOME": "text-ink-red",
  "EMERGING MARKETS": "text-ink-red",
};

export function EpisodeCard({ episode }: EpisodeCardProps) {
  const { guest } = episode;

  return (
    <article className="flex flex-col h-full">
      {/* Photo — 4:5 portrait */}
      <div className="aspect-[4/5] relative w-full mb-4">
        <GuestPhoto src={guest.photo} name={guest.name} />
      </div>

      {/* Kicker */}
      <p className={`kicker text-[0.55rem] mb-2 ${categoryColors[episode.category] ?? "text-ink-red"}`}>
        {episode.category}
      </p>

      {/* Title */}
      <h3 className="font-display font-bold text-ink text-xl leading-tight mb-2 line-clamp-2">
        {episode.title}
      </h3>

      {/* Byline */}
      <p className="font-body text-sm italic text-ink-gray mb-3 leading-snug">
        {guest.name}&nbsp;&mdash;&nbsp;{guest.role}, {guest.firm}
      </p>

      {/* Metadata */}
      <p className="kicker text-ink-gray text-[0.55rem] mt-auto">
        {episode.publishedAt}&nbsp;&middot;&nbsp;{episode.duration}
      </p>
    </article>
  );
}
