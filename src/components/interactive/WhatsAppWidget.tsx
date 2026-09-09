"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Minus, QrCode } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useLanguageStore } from "@/stores/language";

export function WhatsAppWidget() {
  const [state, setState] = useState<"closed" | "open" | "minimized">("closed");
  const { t } = useLanguageStore();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node) && state === "open") {
        setState("minimized");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [state]);

  const whatsappUrl = "https://wa.me/593994853308";

  return (
    <div ref={ref} className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      <AnimatePresence>
        {state === "open" && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-72 rounded-2xl glass-strong shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Yeron Pool</p>
                  <p className="text-xs text-white/80">Online</p>
                </div>
              </div>
            </div>

            {/* QR Code */}
            <div className="p-4 flex flex-col items-center gap-3">
              <p className="text-xs text-muted-foreground">{t.whatsapp.qrTitle}</p>
              <div className="p-3 bg-white rounded-xl">
                <QRCodeSVG value={whatsappUrl} size={150} />
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-green-500 text-white text-sm font-semibold text-center hover:bg-green-600 transition-colors"
              >
                Abrir WhatsApp
              </a>
            </div>

            {/* Actions */}
            <div className="px-4 pb-3 flex gap-2">
              <button
                onClick={() => setState("minimized")}
                className="flex-1 py-2 rounded-lg bg-gray-100 text-gray-600 text-xs font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-1"
              >
                <Minus className="w-3 h-3" />
                Minimizar
              </button>
              <button
                onClick={() => setState("closed")}
                className="flex-1 py-2 rounded-lg bg-red-50 text-red-500 text-xs font-medium hover:bg-red-100 transition-colors flex items-center justify-center gap-1"
              >
                <X className="w-3 h-3" />
                Cerrar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() =>
          setState((s) => (s === "closed" ? "open" : s === "minimized" ? "open" : "closed"))
        }
        className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${
          state === "open"
            ? "bg-red-500 text-white"
            : "bg-green-500 text-white animate-pulse-glow"
        }`}
        style={
          state === "open"
            ? {}
            : { boxShadow: "0 0 20px rgba(34,197,94,0.3), 0 0 60px rgba(34,197,94,0.1)" }
        }
        aria-label={t.whatsapp.tooltip}
      >
        <AnimatePresence mode="wait">
          {state === "open" ? (
            <motion.div
              key="qr"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <QrCode className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}