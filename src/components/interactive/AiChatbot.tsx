"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  X,
  Send,
  Sparkles,
  User,
  Minus,
} from "lucide-react";
import { useLanguageStore } from "@/stores/language";
import { Skeleton } from "@/components/ui/skeleton";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const knowledgeBase = `
# Yeron Pool Cuero Montaño

## Identidad
Yeron Pool Cuero Montaño es un Ingeniero en Tecnologías de la Información y Comunicación, Desarrollador Web Full Stack, Especialista en Automatización con n8n, y Entusiasta de la Ciberseguridad, IA e IoT.

## Experiencia Profesional
1. **Capacitador en Computación** (2022 - Presente): Formación en herramientas tecnológicas, ofimática, programación y seguridad digital.
2. **Desarrollador Web Freelance** (2021 - Presente): Aplicaciones web full stack para clientes diversos.
3. **Practicante de Sistemas** (2020 - 2021): Soporte técnico, administración de servidores Linux, infraestructura de red.
4. **Ayudante de Cátedra** (2019 - 2020): Apoyo docente en programación y TI.

## Tecnologías
- **Frontend**: HTML5, CSS3, JavaScript, TypeScript, Vue.js, Angular, Tailwind CSS
- **Backend**: Node.js, Express.js, PHP, Python, ASP.NET Core, Java, C#
- **Bases de Datos**: MySQL, PostgreSQL
- **DevOps**: Linux, Ubuntu Server, LAMP, Git, GitHub, Nginx, Apache
- **Ciberseguridad**: OWASP, ISO27001, Hardening Linux, Seguridad Web
- **IA**: Machine Learning, LLMs, APIs IA, Automatización Inteligente

## Proyectos Destacados
1. **Plataforma Streaming (Netflix/Amazon Prime style)**: Plataforma completa con Ubuntu Server, Yii Framework, MySQL, Node.js APIs, Angular, Ionic. Incluye catálogo, reproducción adaptativa, suscripciones, perfiles, recomendaciones.
2. **Sistema Gestión Clínica Dental**: Gestión de citas, historias clínicas electrónicas, facturación, reportes.
3. **Sistema Gestión Académica**: Control de notas, asistencia, matrículas, comunicación con padres.

## Especialidad n8n
- Workflows orientados por eventos
- Integración APIs REST
- Webhooks
- Automatización ETL
- Agentes de IA
- Sistemas RAG
- Orquestación de servicios
- Integración WhatsApp
- CRM Automation
- Sincronización de datos entre plataformas

## Certificaciones
- Cisco Networking (Cisco Systems)
- Linux Administration (Linux Foundation)
- ISO 27001 (ISO International)
- ASP.NET Core (Microsoft)
- Full Stack Web Dev
- n8n Automation

## Contacto
- WhatsApp: +593 994 853 308
- wa.me/593994853308
`;

export function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useLanguageStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleSuggestion = (text: string) => {
    setInput(text);
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          history: messages.slice(-6),
          knowledge: knowledgeBase,
        }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || "Lo siento, no pude procesar tu pregunta." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Lo siento, hubo un error de conexión. Por favor intenta de nuevo.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-24 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-sky-500 text-white shadow-xl flex items-center justify-center"
            aria-label={t.chatbot.title}
            style={{
              boxShadow:
                "0 0 20px rgba(139,92,246,0.3), 0 0 60px rgba(14,165,233,0.1)",
            }}
          >
            <Bot className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 w-[340px] sm:w-[380px] h-[500px] rounded-2xl glass-strong shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-violet-500 to-sky-500 p-4 text-white shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.chatbot.title}</p>
                    <p className="text-[11px] text-white/80 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                      En línea
                    </p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setMessages([]);
                    }}
                    className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 no-scrollbar">
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full gap-4 px-2">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-100 to-sky-100 flex items-center justify-center">
                    <Bot className="w-8 h-8 text-violet-500" />
                  </div>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {t.chatbot.welcome}
                  </p>
                  <div className="w-full space-y-2">
                    {t.chatbot.suggestions.map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => handleSuggestion(suggestion)}
                        className="w-full text-left px-3 py-2 rounded-xl glass text-xs text-foreground hover:bg-sky-50 transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-sky-500 flex items-center justify-center shrink-0 mt-1">
                      <Bot className="w-3.5 h-3.5 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-sky-500 to-violet-500 text-white rounded-br-md"
                        : "bg-gray-100 text-foreground rounded-bl-md"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <div className="prose prose-sm max-w-none prose-p:my-1 prose-headings:my-2 prose-ul:my-1 prose-li:my-0.5">
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      </div>
                    ) : (
                      msg.content
                    )}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-lg bg-gray-200 flex items-center justify-center shrink-0 mt-1">
                      <User className="w-3.5 h-3.5 text-gray-600" />
                    </div>
                  )}
                </motion.div>
              ))}

              {isLoading && (
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-sky-500 flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex gap-1.5">
                      <Skeleton className="w-2 h-2 rounded-full" />
                      <Skeleton className="w-2 h-2 rounded-full" />
                      <Skeleton className="w-2 h-2 rounded-full" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-100 shrink-0">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={t.chatbot.placeholder}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-300 transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 rounded-xl bg-gradient-to-r from-violet-500 to-sky-500 text-white flex items-center justify-center disabled:opacity-40 transition-opacity shrink-0"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}