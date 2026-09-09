"use client";

import { useLanguageStore } from "@/stores/language";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Experience() {
  const { t } = useLanguageStore();
  const timelineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(timelineRef, { once: true, threshold: 0.1 });

  return (
    <section id="experience" className="relative py-20 md:py-28">
      <div className="section-padding max-w-4xl mx-auto px-6">
        <SectionTitle title={t.experience.title} subtitle={t.experience.subtitle} />

        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-300 via-violet-300 to-cyan-300 origin-top md:-translate-x-px"
          />

          {t.experience.items.map((item, i) => {
            const isLeft = i % 2 === 0;

            return (
              <RevealOnScroll
                key={i}
                delay={i * 0.15}
                direction={isLeft ? "left" : "right"}
              >
                <div
                  className={`relative flex items-start mb-10 md:mb-14 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: i * 0.15 + 0.3, type: "spring" }}
                    className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-sky-500 border-4 border-background -translate-x-1.5 md:-translate-x-1.5 z-10 mt-6 glow-blue"
                  />

                  {/* Content Card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"
                    }`}
                  >
                    <div className="rounded-2xl glass p-5 hover:shadow-lg transition-all duration-300">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-600 text-xs font-semibold mb-2">
                        {item.period}
                      </span>
                      <h3 className="font-bold text-base">{item.role}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{item.company}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {item.description}
                      </p>
                      <div
                        className={`flex flex-wrap gap-1.5 ${
                          isLeft ? "md:justify-end" : ""
                        }`}
                      >
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-violet-50 text-violet-600"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
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