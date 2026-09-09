"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "strong" | "dark";
  glow?: "blue" | "purple" | "turquoise" | "none";
  hover?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", glow = "none", hover = true, children, ...props }, ref) => {
    const variantClass = {
      default: "glass",
      strong: "glass-strong",
      dark: "glass-dark",
    }[variant];

    const glowClass = {
      blue: "glow-blue",
      purple: "glow-purple",
      turquoise: "glow-turquoise",
      none: "",
    }[glow];

    return (
      <motion.div
        ref={ref}
        className={cn(
          "rounded-2xl",
          variantClass,
          glowClass,
          hover &&
            "transition-all duration-300 hover:shadow-lg hover:scale-[1.01] hover:border-white/40",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";
export { GlassCard };