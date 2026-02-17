import { HeroSection } from "../components/HeroSection";
import { FeaturedProjects } from "../components/FeaturedProjects";
import { SkillsSection } from "../components/SkillsSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <HeroSection />
      <FeaturedProjects />
      <SkillsSection />
    </div>
  );
}
