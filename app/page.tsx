import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import AboutSection from "@/components/About";
import ExperienceSection from "@/components/Experience";
import EducationSection from "@/components/Education";
import CertificatesSection from "@/components/Certificates";
import CommingSoonSection from "@/components/CommingSoon";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white selection:text-black font-mono">
      <Nav />

      <main className="relative z-10 pt-12 pb-20">
          <HeroSection />

          <AboutSection />

          <ExperienceSection />

          <EducationSection />

          <CertificatesSection />

          <CommingSoonSection number="05" title="Skills"/>

          <CommingSoonSection number="06" title="Projects"/>
      </main>

      <Footer />
    </div>
  );
}
