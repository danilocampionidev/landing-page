"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ClipboardList, Code2, FileText, Package, Headphones } from "lucide-react";

const steps = [
  { title: "Briefing", ringGradient: "bg-gradient-to-br from-cyan-500 to-blue-600", smallBorder: "border-cyan-400", textClass: "text-cyan-400", icon: <ClipboardList size={28} className="text-gray-300" /> },
  { title: "Desenvolvimento", ringGradient: "bg-gradient-to-br from-cyan-500 to-blue-700", smallBorder: "border-cyan-400", textClass: "text-cyan-400", icon: <Code2 size={28} className="text-gray-300" /> },
  { title: "Revisão", ringGradient: "bg-gradient-to-br from-blue-500 to-cyan-600", smallBorder: "border-cyan-400", textClass: "text-cyan-400", icon: <FileText size={28} className="text-gray-300" /> },
  { title: "Entrega", ringGradient: "bg-gradient-to-br from-cyan-400 to-blue-500", smallBorder: "border-cyan-400", textClass: "text-cyan-400", icon: <Package size={28} className="text-gray-300" /> },
  { title: "Suporte pós-entrega", ringGradient: "bg-gradient-to-br from-blue-500 to-cyan-500", smallBorder: "border-cyan-400", textClass: "text-cyan-400", icon: <Headphones size={28} className="text-gray-300" /> },
];

export default function ProjectStepsHybrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineWidth, setLineWidth] = useState(0);
  const [lineLeft, setLineLeft] = useState(0);

  useEffect(() => {
    const updateLine = () => {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const icons = containerRef.current.querySelectorAll(".step-icon");
        if (icons.length > 1) {
          const firstEl = icons[0] as HTMLElement;
          const lastEl = icons[icons.length - 1] as HTMLElement;

          const first = firstEl.getBoundingClientRect().left - containerRect.left + firstEl.offsetWidth / 2;
          const last = lastEl.getBoundingClientRect().left - containerRect.left + lastEl.offsetWidth / 2;

          setLineWidth(last - first);
          setLineLeft(first);
        }
      }
    };

    requestAnimationFrame(updateLine);
    window.addEventListener("resize", updateLine);
    return () => window.removeEventListener("resize", updateLine);
  }, []);

  return (
    <section className="py-12 px-6 bg-[#0b0f17]">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-100 text-center mb-20">
        Etapas Do <span className="text-cyan-400">Projeto</span>
      </h2>

      <div className="relative max-w-6xl mx-auto h-48">
        {/* Linha animada */}
        <motion.div
          className="absolute top-1/2 h-[6px] bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 rounded-full z-0 origin-left"
          style={{ left: lineLeft }}
          initial={{ width: 0 }}
          animate={{ width: lineWidth }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />

        <div ref={containerRef} className="relative z-10 flex items-start md:items-center justify-between h-full px-4">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              className="relative w-1/5 h-full flex flex-col items-center text-center"
            >
              {/* Ícone oscilando + pulando */}
              <motion.div
                animate={{ rotate: [0, 15, -15, 0], y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`${s.ringGradient} p-2 rounded-full step-icon`}
              >
                <div className="w-20 h-20 rounded-full bg-[#111827] flex items-center justify-center shadow-sm">
                  {s.icon}
                </div>
              </motion.div>

              {/* Pequeno checkpoint no centro */}
              <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-20">
                <div className={`${s.smallBorder} border-4 w-6 h-6 rounded-full bg-[#111827]`} />
              </div>

              {/* Título da etapa */}
              <h3 className={`mt-8 font-semibold ${s.textClass}`}>{s.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
