"use client";

import { useLanguageStore } from "@/stores/language";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";

export function Certifications() {
  const { t } = useLanguageStore();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const handler = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", handler);
    emblaApi.on("reInit", handler);
    return () => {
      emblaApi.off("select", handler);
    };
  }, [emblaApi]);

  return (
    <section id="certifications" className="relative py-20 md:py-28">
      <div className="section-padding max-w-5xl mx-auto px-6">
        <SectionTitle
          title={t.certifications.title}
          subtitle={t.certifications.subtitle}
        />

        <RevealOnScroll>
          <div className="relative">
            {/* Carousel */}
            <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
              <div className="flex">
                {t.certifications.items.map((cert, i) => (
                  <div
                    key={i}
                    className="flex-[0_0_80%] sm:flex-[0_0_55%] md:flex-[0_0_40%] min-w-0 px-2"
                  >
                    <motion.div
                      animate={{
                        scale: selectedIndex === i ? 1 : 0.88,
                        opacity: selectedIndex === i ? 1 : 0.6,
                        y: selectedIndex === i ? 0 : 10,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="rounded-2xl glass-strong p-6 md:p-8 h-full flex flex-col items-center text-center"
                    >
                      <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, ${cert.color}22, ${cert.color}11)`,
                          border: `1px solid ${cert.color}33`,
                        }}
                      >
                        <Award
                          className="w-10 h-10"
                          style={{ color: cert.color }}
                        />
                      </div>
                      <h3 className="font-bold text-base mb-1">{cert.title}</h3>
                      <p
                        className="text-xs font-semibold mb-2"
                        style={{ color: cert.color }}
                      >
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollPrev}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:shadow-md transition-shadow"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollNext}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:shadow-md transition-shadow"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {t.certifications.items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  className={`transition-all duration-300 rounded-full ${
                    selectedIndex === i
                      ? "w-6 h-2 bg-sky-500"
                      : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}