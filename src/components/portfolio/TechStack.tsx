"use client";

import { useLanguageStore } from "@/stores/language";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { techStackData } from "@/data/portfolio";
import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Database,
  Container,
  Shield,
  Brain,
} from "lucide-react";

const iconMap = {
  Monitor,
  Server,
  Database,
  Container,
  Shield,
  Brain,
} as const;

type CategoryKey = keyof typeof techStackData;

export function TechStack() {
  const { t } = useLanguageStore();
  const categories = Object.entries(techStackData) as [
    CategoryKey,
    (typeof techStackData)[CategoryKey],
  ][];

  return (
    <section id="stack" className="relative py-20 md:py-28">
      <div className="section-padding max-w-7xl mx-auto px-6">
        <SectionTitle title={t.techStack.title} subtitle={t.techStack.subtitle} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(([key, category], catIndex) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap] || Monitor;
            const catTranslation = t.techStack.categories[key as keyof typeof t.techStack.categories];

            return (
              <RevealOnScroll key={key} delay={catIndex * 0.1}>
                <div className="rounded-2xl glass p-6 h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.01]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-100 to-violet-100 flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-slate-900">{catTranslation?.title}</h3>
                      <p className="text-xs text-slate-600">
                        {catTranslation?.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.items.map((tech) => (
                      <motion.span
                        key={tech.name}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/95 border border-slate-200 text-slate-700 shadow-sm hover:shadow-md transition-shadow flex items-center gap-1.5"
                      >
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ backgroundColor: tech.color }}
                        />
                        {tech.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}