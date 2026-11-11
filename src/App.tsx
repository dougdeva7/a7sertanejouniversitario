import { MotionConfig } from "framer-motion";
import { Header } from "@/components/Header";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { StreamingPlayer } from "@/components/StreamingPlayer";
import { ContentCards } from "@/components/ContentCards";
import { AboutSection } from "@/components/AboutSection";
import { MomentsGrid } from "@/components/MomentsGrid";
import { BenefitsSection } from "@/components/BenefitsSection";
import { AppDownload } from "@/components/AppDownload";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="overflow-hidden">
        <Header />
        <HeroSlideshow />
        <StreamingPlayer />
        <ContentCards />
        <AboutSection />
        <MomentsGrid />
        <BenefitsSection />
        <AppDownload />
        <Footer />
      </div>
    </MotionConfig>
  );
}
