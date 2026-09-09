"use client";

import { useLanguageStore } from "@/stores/language";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { GlassCard } from "@/components/shared/GlassCard";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  Brain,
  Database,
  Bell,
  Webhook as WebhookIcon,
} from "lucide-react";

export function N8nSpecialty() {
  const { t } = useLanguageStore();
  const flowRef = useRef<HTMLDivElement>(null);
  const flowInView = useInView(flowRef, { once: true, threshold: 0.2 });

  const workflowSteps = [
    { icon: Zap, label: t.n8n.workflow.trigger, color: "from-amber-400 to-orange-500" },
    { icon: WebhookIcon, label: t.n8n.workflow.webhook, color: "from-sky-400 to-blue-500" },
    { icon: Brain, label: t.n8n.workflow.aiAgent, color: "from-violet-400 to-purple-500" },
    { icon: Database, label: t.n8n.workflow.database, color: "from-emerald-400 to-green-500" },
    { icon: Bell, label: t.n8n.workflow.notification, color: "from-rose-400 to-pink-500" },
  ];

  return (
    <section id="n8n" className="relative py-20 md:py-28 gradient-bg-section overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-200/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="section-padding max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle title={t.n8n.title} subtitle={t.n8n.subtitle} />

        {/* Workflow Visual */}
        <RevealOnScroll className="mb-16">
          <div className="max-w-3xl mx-auto">
            <GlassCard
              variant="strong"
              className="p-6 md:p-10"
              glow="blue"
              hover={false}
            >
              <div ref={flowRef} className="flex flex-col items-center gap-1">
                {workflowSteps.map((step, i) => (
                  <div key={i} className="flex flex-col items-center w-full">
                    <motion.div
                      initial={{ opacity: 1, x: -30 }}
                      animate={flowInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.2, duration: 0.5 }}
                      className="flex items-center gap-4 w-full max-w-md"
                    >
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg shrink-0`}
                      >
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm md:text-base text-slate-800">{step.label}</p>
                        <p className="text-xs text-slate-600">
                          {t.n8n.capabilities[i]?.title}
                        </p>
                      </div>
                      {i < workflowSteps.length - 1 && (
                        <div className="hidden sm:block w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                          <span className="text-xs font-bold text-slate-600">
                            {i + 1}
                          </span>
                        </div>
                      )}
                    </motion.div>

                    {i < workflowSteps.length - 1 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        animate={flowInView ? { scaleY: 1 } : {}}
                        transition={{ delay: i * 0.2 + 0.1, duration: 0.4 }}
                        className="w-0.5 h-8 bg-gradient-to-b from-sky-300 to-violet-300 origin-top my-1"
                      >
                        <motion.div
                          animate={{ y: [0, 12, 0] }}
                          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                          className="w-2 h-2 rounded-full bg-sky-400 -ml-[3px] mt-0"
                        />
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </RevealOnScroll>

        {/* Description */}
        <RevealOnScroll>
          <p className="text-center text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
            {t.n8n.description}
          </p>
        </RevealOnScroll>

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.n8n.capabilities.map((cap, i) => (
            <RevealOnScroll key={i} delay={i * 0.06}>
              <GlassCard
                className="p-5 h-full"
                glow={i % 3 === 0 ? "blue" : i % 3 === 1 ? "purple" : "turquoise"}
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm mb-1 text-slate-800">{cap.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}