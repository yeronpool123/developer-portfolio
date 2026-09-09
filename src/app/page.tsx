"use client";

import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { TechStack } from "@/components/portfolio/TechStack";
import { N8nSpecialty } from "@/components/portfolio/N8nSpecialty";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Footer } from "@/components/portfolio/Footer";
import { RadialNavbar } from "@/components/layout/RadialNavbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { ParticleBackground } from "@/components/layout/ParticleBackground";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { AiChatbot } from "@/components/interactive/AiChatbot";
import { WhatsAppWidget } from "@/components/interactive/WhatsAppWidget";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground custom-cursor">
      {/* Global Effects */}
      <ScrollProgress />
      <ParticleBackground />
      <CustomCursor />

      {/* Navigation */}
      <RadialNavbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <TechStack />
        <N8nSpecialty />
        <Experience />
        <Projects />
        <Certifications />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Widgets */}
      <AiChatbot />
      <WhatsAppWidget />
    </div>
  );
}