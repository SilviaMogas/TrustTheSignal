import { Masthead } from "@/components/Masthead";
import { HeroStory } from "@/components/HeroStory";
import { EpisodesGrid } from "@/components/EpisodesGrid";
import { SubscribeSection } from "@/components/SubscribeSection";
import { AboutHost } from "@/components/AboutHost";
import { PlatformLinks } from "@/components/PlatformLinks";
import { Footer } from "@/components/Footer";
import { DoubleDivider } from "@/components/ui/Divider";

export default function Home() {
  return (
    <main>
      <Masthead />
      <HeroStory />
      <EpisodesGrid />
      <SubscribeSection />
      <DoubleDivider />
      <AboutHost />
      <PlatformLinks />
      <Footer />
    </main>
  );
}
