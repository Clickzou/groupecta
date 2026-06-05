import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MusicProvider } from "@/components/Music";
import { HomeSplash } from "@/components/home/HomeSplash";
import { Stats } from "@/components/sections/Stats";
import { GroupIntro } from "@/components/sections/GroupIntro";
import { EntitiesGrid } from "@/components/sections/EntitiesGrid";
import { RseSection } from "@/components/sections/RseSection";
import { Reviews } from "@/components/sections/Reviews";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <MusicProvider src="/hero/musique-mer.mp3" watchId="accueil">
      {/* Header masqué sur le splash, révélé au scroll */}
      <Header reveal />
      <HomeSplash />
      <main>
        <Stats />
        <GroupIntro />
        <EntitiesGrid />
        <RseSection />
        <Reviews />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer credit />
    </MusicProvider>
  );
}
