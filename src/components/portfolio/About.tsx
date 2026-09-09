"use client";

import { useLanguageStore } from "@/stores/language";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { GlassCard } from "@/components/shared/GlassCard";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { Code, Server, Shield, Brain, Network, Workflow } from "lucide-react";

const iconMap = {
  code: Code,
  server: Server,
  shield: Shield,
  brain: Brain,
  network: Network,
  workflow: Workflow,
} as const;

export function About() {
  const { t } = useLanguageStore();

  return (
    <section id="about" className="relative py-20 md:py-28 gradient-bg-section">
      <div className="section-padding max-w-7xl mx-auto px-6">
        <SectionTitle title={t.about.title} subtitle={t.about.subtitle} />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <RevealOnScroll>
            <div className="space-y-5">
              <p className="text-slate-600 leading-relaxed text-base">
                {t.about.description}
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                {t.about.description2}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Desarrollo Web", "Linux", "Ciberseguridad", "IA", "IoT", "n8n"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-sky-50 text-sky-600 border border-sky-100"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </RevealOnScroll>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {t.about.highlights.map((item, i) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] || Code;
              return (
                <RevealOnScroll key={i} delay={i * 0.08}>
                  <GlassCard
                    className="p-5 h-full"
                    glow={i % 3 === 0 ? "blue" : i % 3 === 1 ? "purple" : "turquoise"}
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-100 to-violet-100 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-sky-600" />
                    </div>
                    <h3 className="font-semibold text-sm mb-1 text-slate-800">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </GlassCard>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}