"use client";

import { useLanguageStore } from "@/stores/language";
import { projectCatalog } from "@/data/portfolio";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { GlassCard } from "@/components/shared/GlassCard";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { motion } from "framer-motion";
import {
  Star,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

export function Projects() {
  const { t } = useLanguageStore();
  const featured = t.projects.featured;

  return (
    <section id="projects" className="relative py-20 md:py-28 gradient-bg-section">
      <div className="section-padding max-w-7xl mx-auto px-6">
        <SectionTitle title={t.projects.title} subtitle={t.projects.subtitle} />

        {/* Featured Project */}
        <RevealOnScroll className="mb-12">
          <GlassCard
            variant="strong"
            className="p-6 md:p-10 relative overflow-hidden"
            glow="blue"
            hover={false}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-200/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet-200/20 rounded-full blur-[60px] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 text-white text-xs font-semibold">
                  <Star className="w-3 h-3" />
                  {featured.tag}
                </span>
                <span className="text-xs text-slate-600">{featured.subtitle}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-slate-900">
                <span className="gradient-text">{featured.title}</span>
              </h3>

              <p className="text-slate-600 leading-relaxed mb-6 max-w-3xl">
                {featured.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {featured.tech.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white border border-gray-100 shadow-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {featured.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 1, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white/75 border border-slate-200"
                  >
                    <CheckCircle className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />
                    <span className="text-xs text-slate-700 leading-relaxed">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassCard>
        </RevealOnScroll>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {[...t.projects.items, ...projectCatalog].map((project, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <GlassCard className="p-6 h-full" glow={i === 0 ? "turquoise" : "purple"}>
                <div className="flex items-start justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-600 text-xs font-semibold">
                    {project.tag}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </div>
                <h4 className="font-bold text-lg mb-2">{project.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-violet-50 text-violet-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function Search(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      className={props.className}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function CreditCard(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      className={props.className}
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function Users(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      className={props.className}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function Sparkles(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      className={props.className}
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}