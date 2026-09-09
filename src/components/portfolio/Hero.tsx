"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useLanguageStore } from "@/stores/language";
import { MagneticButton } from "@/components/shared/MagneticButton";
import {
  ArrowDown,
  Download,
  FolderOpen,
  Award,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import Swal from "sweetalert2";

export function Hero() {
  const { t } = useLanguageStore();
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentTitle = t.hero.titles[titleIndex];

  const tick = useCallback(() => {
    const full = currentTitle;
    if (!isDeleting) {
      setDisplayedText(full.substring(0, displayedText.length + 1));
      if (displayedText.length === full.length) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
    } else {
      setDisplayedText(full.substring(0, displayedText.length - 1));
      if (displayedText.length === 0) {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % t.hero.titles.length);
        return;
      }
    }
  }, [displayedText, isDeleting, currentTitle, t.hero.titles.length]);

  useEffect(() => {
    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    Swal.fire({
      title: "CV",
      html: '<p class="text-gray-600">El currículum se descargará automáticamente.</p>',
      icon: "info",
      confirmButtonText: "OK",
      confirmButtonColor: "#0ea5e9",
      background: "rgba(255,255,255,0.95)",
      backdrop: "rgba(0,0,0,0.2)",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center gradient-bg-hero overflow-hidden"
    >
      {/* Decorative orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-sky-300/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-violet-300/15 rounded-full blur-[120px] animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-200/10 rounded-full blur-[150px]" />

      <div className="relative z-10 section-padding w-full max-w-7xl mx-auto px-6 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 1, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium text-sky-600 mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.hero.greeting}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 1, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
            >
              <span className="gradient-text">{t.hero.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-4 h-10 md:h-12 flex items-center"
            >
              <span className="text-lg md:text-2xl font-mono text-sky-600 font-medium">
                {displayedText}
                <span
                  className="inline-block w-0.5 h-6 md:h-8 bg-sky-500 ml-1 align-middle"
                  style={{ animation: "typewriter-cursor 0.8s infinite" }}
                />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <MagneticButton
                onClick={() => scrollToSection("projects")}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"
              >
                <FolderOpen className="w-4 h-4" />
                {t.hero.cta.projects}
              </MagneticButton>
              <MagneticButton
                onClick={handleDownloadCV}
                className="px-6 py-3 rounded-xl glass text-sm font-semibold hover:shadow-md transition-shadow flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                {t.hero.cta.cv}
              </MagneticButton>
              <MagneticButton
                onClick={() => scrollToSection("certifications")}
                className="px-6 py-3 rounded-xl glass text-sm font-semibold hover:shadow-md transition-shadow flex items-center gap-2"
              >
                <Award className="w-4 h-4" />
                {t.hero.cta.certs}
              </MagneticButton>
              <MagneticButton
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 rounded-xl glass text-sm font-semibold hover:shadow-md transition-shadow flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                {t.hero.cta.contact}
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Avatar / Holographic Element */}
          <motion.div
            initial={{ opacity: 1, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Holographic ring */}
              <div className="absolute inset-0 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full animate-spin-slow opacity-20"
                style={{
                  background: "conic-gradient(from 0deg, #0ea5e9, #06b6d4, #8b5cf6, #0ea5e9)",
                }}
              />
              <div className="absolute inset-2 w-60 h-60 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full animate-spin-slow opacity-15"
                style={{
                  animationDirection: "reverse",
                  animationDuration: "25s",
                  background: "conic-gradient(from 120deg, #8b5cf6, #06b6d4, #0ea5e9, #8b5cf6)",
                }}
              />

              {/* Main avatar container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden holographic"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-sky-100 via-violet-100 to-cyan-100 flex items-center justify-center">
                  <span className="text-7xl sm:text-8xl md:text-9xl font-bold gradient-text select-none">
                    YP
                  </span>
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 px-3 py-1.5 rounded-xl glass-strong shadow-lg text-xs font-semibold text-sky-600"
              >
                Full Stack
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-2 -left-2 px-3 py-1.5 rounded-xl glass-strong shadow-lg text-xs font-semibold text-violet-600"
              >
                n8n 🤖
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-6 px-3 py-1.5 rounded-xl glass-strong shadow-lg text-xs font-semibold text-cyan-600"
              >
                Linux 🐧
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}