"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isTouchDevice = useMemo(() => {
    if (typeof window !== "undefined") return "ontouchstart" in window;
    return false;
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleEnter = () => setIsVisible(true);
    const handleLeave = () => setIsVisible(false);

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.closest("a, button, [role='button'], input, textarea, select, [data-cursor-hover]");
      setIsHovering(!!isClickable);
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mousemove", checkHover);
    document.addEventListener("mouseenter", handleEnter);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mousemove", checkHover);
      document.removeEventListener("mouseenter", handleEnter);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
            animate={{
              x: mousePos.x - 5,
              y: mousePos.y - 5,
              scale: isHovering ? 0.5 : 1,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
            style={{ width: 10, height: 10 }}
          >
            <div className="w-full h-full rounded-full bg-white" />
          </motion.div>
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-white/30"
            animate={{
              x: mousePos.x - 20,
              y: mousePos.y - 20,
              scale: isHovering ? 1.8 : 1,
              opacity: isHovering ? 0.6 : 0.3,
            }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            style={{ width: 40, height: 40 }}
          />
        </>
      )}
    </AnimatePresence>
  );
}