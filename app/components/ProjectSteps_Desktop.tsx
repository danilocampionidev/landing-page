"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardList, Code2, FileText, Package, Headphones } from "lucide-react";

const steps = [
  { 
    title: "Briefing", 
    description: "Reunião inicial para entender as necessidades, objetivos e requisitos do cliente.",
    ringGradient: "bg-gradient-to-br from-cyan-500 to-blue-600", 
    textClass: "text-cyan-400",
    icon: <ClipboardList size={28} className="text-gray-300" /> 
  },
  { 
    title: "Desenvolvimento", 
    description: "Implementação do projeto com código limpo, boas práticas e tecnologias modernas.",
    ringGradient: "bg-gradient-to-br from-cyan-500 to-blue-700", 
    textClass: "text-cyan-400",
    icon: <Code2 size={28} className="text-gray-300" /> 
  },
  { 
    title: "Revisão", 
    description: "Verificação minuciosa para corrigir erros, otimizar e alinhar com o esperado pelo cliente.",
    ringGradient: "bg-gradient-to-br from-blue-500 to-cyan-600", 
    textClass: "text-cyan-400",
    icon: <FileText size={28} className="text-gray-300" /> 
  },
  { 
    title: "Entrega", 
    description: "Disponibilização do projeto finalizado, pronto para uso e homologado.",
    ringGradient: "bg-gradient-to-br from-cyan-400 to-blue-500", 
    textClass: "text-cyan-400",
    icon: <Package size={28} className="text-gray-300" /> 
  },
  { 
    title: "Suporte pós-entrega", 
    description: "Acompanhamento após entrega, correções rápidas e suporte contínuo.",
    ringGradient: "bg-gradient-to-br from-blue-500 to-cyan-500", 
    textClass: "text-cyan-400",
    icon: <Headphones size={28} className="text-gray-300" /> 
  },
];

export default function ProjectStepsHybrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const checkpointPositions = useRef<number[]>([]);
  const [lineLeft, setLineLeft] = useState(0);
  const [lineWidth, setLineWidth] = useState(0);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);


  // Cálculo das posições da timeline e checkpoints
  useEffect(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const icons = containerRef.current.querySelectorAll(".step-icon");

    if (icons.length < 2) return;
    checkpointPositions.current = Array.from(icons).map(icon => {
      const el = icon as HTMLElement;
      const rect = el.getBoundingClientRect();
      return rect.left - containerRect.left + rect.width / 2;
    });

    const first = checkpointPositions.current[0];
    setLineLeft(first);

    const last = checkpointPositions.current[checkpointPositions.current.length - 1];
    setLineWidth(last - first);
  }, [isMobile]); // recalcula ao mudar o isMobile (pode ajustar o layout)

  const handleStepClick = (index: number) => {
    if (activeStep === index) {
      setActiveStep(null);
      const last = checkpointPositions.current[checkpointPositions.current.length - 1];
      setLineWidth(last - lineLeft);
    } else {
      setActiveStep(index);
      const target = checkpointPositions.current[index];
      setLineWidth(target - lineLeft);
    }
  };

  return (
    <section className="py-12 px-6 bg-[#0b0f17] relative">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-100 text-center mb-20">
        Etapas Do <span className="text-cyan-400">Projeto</span>
      </h2>
      <div className="relative max-w-6xl mx-auto h-48">
        <motion.div
          className="absolute top-1/2 h-[6px] bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 rounded-full z-0 origin-left"
          style={{ left: `${lineLeft}px` }}
          initial={{ width: 0 }}
          animate={{ width: lineWidth }}
          transition={{ duration: activeStep === null ? 4 : 0.6, ease: "easeInOut" }}
        />
        <div
          ref={containerRef}
          className={`relative z-10 flex h-full px-4 ${
            isMobile
              ? "flex-col items-start space-y-10" // no mobile, fica em coluna, espaçamento vertical
              : "items-start md:items-center justify-between flex-row" // desktop normal
          }`}
        >
          {steps.map((s, i) => (
            <motion.div
              key={i}
              className={`relative ${
                isMobile ? "w-full flex flex-row items-center text-left" : "w-1/5 flex flex-col items-center text-center"
              }`}
              animate={{ scale: activeStep === i ? (isMobile ? 1.05 : 1.2) : (isMobile ? 1 : 0.75) }}
            >
              <motion.div
                onClick={() => handleStepClick(i)}
                className={`${s.ringGradient} p-2 rounded-full step-icon cursor-pointer`}
                animate={{ rotate: [0, 15, -15, 0], y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-20 h-20 rounded-full bg-[#111827] flex items-center justify-center shadow-sm">{s.icon}</div>
              </motion.div>
              <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-20">
                <div className="border-cyan-400 border-4 w-6 h-6 rounded-full bg-[#111827]" />
              </div>
              <h3 className={`${isMobile ? "ml-6" : "mt-8"} font-semibold ${s.textClass}`}>{s.title}</h3>
            </motion.div>
          ))}
        </div>
        <AnimatePresence mode="wait">
          {activeStep !== null && checkpointPositions.current.length > 0 && (
            <motion.div
              key={activeStep}
              className="absolute z-20"
              style={{
                top: isMobile ? 250 : 120,
                left: isMobile
                  ? 20
                  : Math.min(
                      Math.max(checkpointPositions.current[activeStep] - 150, 0),
                      containerRef.current!.offsetWidth - 300
                    ),
                width: isMobile ? "90%" : 300,
                padding: isMobile ? "0 10px" : undefined,
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="bg-[#1f2937] p-6 rounded-lg shadow-lg text-gray-200">
                <h4 className="text-xl font-bold text-cyan-400 mb-2">{steps[activeStep].title}</h4>
                <p className="text-base leading-relaxed">{steps[activeStep].description}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}