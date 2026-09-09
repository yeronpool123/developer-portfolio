"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguageStore } from "@/stores/language";
import { LanguageSwitcher } from "@/components/interactive/LanguageSwitcher";
import {
  Home,
  User,
  Layers,
  Workflow,
  Briefcase,
  FolderOpen,
  Award,
  Menu,
  X,
  Zap,
} from "lucide-react";

const navItems = [
  { id: "home", icon: Home, labelKey: "home" as const },
  { id: "about", icon: User, labelKey: "about" as const },
  { id: "stack", icon: Layers, labelKey: "stack" as const },
  { id: "n8n", icon: Workflow, labelKey: "n8n" as const },
  { id: "experience", icon: Briefcase, labelKey: "experience" as const },
  { id: "projects", icon: FolderOpen, labelKey: "projects" as const },
  { id: "certifications", icon: Award, labelKey: "certifications" as const },
];

export function RadialNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguageStore();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const scrollTo = useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    },
    []
  );

  // Desktop: horizontal nav
  // Mobile: radial menu
  return (
    <>
      {/* Desktop Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 hidden md:block ${
          scrolled ? "glass-strong shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <motion.button
            onClick={() => scrollTo("home")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-lg font-bold"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-violet-500 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="gradient-text">Yeron</span>
          </motion.button>

          <nav className="flex items-center gap-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/50 transition-all"
              >
                {t.nav[item.labelKey]}
              </motion.button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <motion.button
              onClick={() => scrollTo("contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 text-white text-sm font-semibold shadow-md hover:shadow-lg transition-shadow"
            >
              {t.nav.contact}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Radial Menu Toggle */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        className="fixed bottom-6 right-6 z-50 md:hidden"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-xl flex items-center justify-center relative z-10"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Mobile Overlay + Radial Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed bottom-24 right-6 z-40 md:hidden"
            >
              <div className="relative w-72 h-72">
                {navItems.map((item, i) => {
                  const angle = (i / navItems.length) * 2 * Math.PI - Math.PI / 2;
                  const radius = 100;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                      animate={{ opacity: 1, scale: 1, x, y }}
                      exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                      transition={{
                        delay: i * 0.05,
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                      onClick={() => scrollTo(item.id)}
                      className="absolute flex flex-col items-center gap-1 group"
                      style={{
                        left: "50%",
                        top: "50%",
                        marginLeft: "-28px",
                        marginTop: "-28px",
                      }}
                    >
                      <div className="w-14 h-14 rounded-2xl glass-strong shadow-lg flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-medium text-foreground whitespace-nowrap">
                        {t.nav[item.labelKey]}
                      </span>
                    </motion.button>
                  );
                })}

                {/* Language switcher in radial menu */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute -top-2 left-1/2 -translate-x-1/2"
                >
                  <LanguageSwitcher />
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}