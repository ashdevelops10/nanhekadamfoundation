import HeroSection from "@/components/home/HeroSection";
import NewsSection from "@/components/home/NewsSection";
import AboutSection from "@/components/home/AboutSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import StatsSection from "@/components/home/StatsSection";
import InstagramSection from "@/components/home/InstagramSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <NewsSection />
      <AboutSection />
      <StatsSection />
      <InstagramSection />
      <ProjectsSection />
      <ProgramsSection />
    </>
  );
}
