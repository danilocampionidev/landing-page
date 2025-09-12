"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardList, Code2, FileText, Package, Headphones } from "lucide-react";

const steps = [
  {
    title: "Briefing",
    description: "Reunião inicial para entender as necessidades, objetivos e requisitos do cliente.",
    gradientColors: ["#06b6d4", "#2563eb"], // Azul original
    borderColor: "#06b6d4",
    textColor: "#06b6d4",
    icon: (size: number) => <ClipboardList size={size} className="text-gray-300" />,
  },
  {
    title: "Desenvolvimento",
    description: "Implementação do projeto com código limpo, boas práticas e tecnologias modernas.",
    gradientColors: ["#8b5cf6", "#7c3aed"], // Roxo
    borderColor: "#8b5cf6",
    textColor: "#8b5cf6",
    icon: (size: number) => <Code2 size={size} className="text-gray-300" />,
  },
  {
    title: "Revisão",
    description: "Verificação minuciosa para corrigir erros, otimizar e alinhar com o esperado pelo cliente.",
    gradientColors: ["#ec4899", "#f472b6"], // Rosa
    borderColor: "#ec4899",
    textColor: "#ec4899",
    icon: (size: number) => <FileText size={size} className="text-gray-300" />,
  },
  {
    title: "Entrega",
    description: "Disponibilização do projeto finalizado, pronto para uso e homologado.",
    gradientColors: ["#f97316", "#fb923c"], // Laranja
    borderColor: "#f97316",
    textColor: "#f97316",
    icon: (size: number) => <Package size={size} className="text-gray-300" />,
  },
  {
    title: "Suporte pós-entrega",
    description: "Acompanhamento após entrega, correções rápidas e suporte contínuo.",
    gradientColors: ["#10b981", "#34d399"], // Verde
    borderColor: "#10b981",
    textColor: "#10b981",
    icon: (size: number) => <Headphones size={size} className="text-gray-300" />,
  },
];

export default function ProjectStepsHybrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lineLeft, setLineLeft] = useState(0);
  const [lineWidth, setLineWidth] = useState(0);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [positions, setPositions] = useState<{ centerX: number; bottomY: number }[]>([]);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 640);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();

    const newPositions = iconRefs.current.map((el) => {
      if (!el) return { centerX: 0, bottomY: 0 };
      const rect = el.getBoundingClientRect();
      return {
        centerX: rect.left - containerRect.left + rect.width / 2,
        bottomY: rect.bottom - containerRect.top,
      };
    });

    setPositions(newPositions);

    if (newPositions.length >= 2) {
      setLineLeft(newPositions[0].centerX);
      setLineWidth(newPositions[newPositions.length - 1].centerX - newPositions[0].centerX);
    }
  }, [isMobile]);

  const handleStepClick = (index: number) => {
    if (activeStep === index) {
      setActiveStep(null);
      if (positions.length >= 2) {
        setLineWidth(positions[positions.length - 1].centerX - lineLeft);
      }
    } else {
      setActiveStep(index);
      if (positions[index]) {
        setLineWidth(positions[index].centerX - lineLeft);
      }
    }
  };

  function getScaleAndCircleSize(index: number) {
    const iconSize = isMobile ? 16 : 28;
    const circleSize = iconSize * 2.2;

    const isActive = activeStep === index;
    const hasSelection = activeStep !== null;

    const scale = hasSelection
      ? isActive
        ? isMobile
          ? 1.7
          : 1.25
        : isMobile
        ? 0.7
        : 0.75
      : 1;

    return { scale, circleSize };
  }

  // Função para gerar gradiente da linha progressiva da timeline baseado na etapa ativa
const getTimelineGradient = () => {
  if (activeStep === null) {
    // Mistura todas as cores das etapas em um gradiente contínuo
    const allColors = steps.flatMap((step) => step.gradientColors);
    const stepCount = allColors.length;
    const colorStops = allColors.map((color, i) => {
      const percent = Math.round((i / (stepCount - 1)) * 100);
      return `${color} ${percent}%`;
    });
    return `linear-gradient(90deg, ${colorStops.join(", ")})`;
  } else {
    // Mistura as cores desde o início até a etapa ativa
    const partialSteps = steps.slice(0, activeStep + 1);
    const usedColors = partialSteps.flatMap((step) => step.gradientColors);
    const colorStops = usedColors.map((color, i) => {
      const percent = Math.round((i / (usedColors.length - 1)) * 100);
      return `${color} ${percent}%`;
    });
    return `linear-gradient(90deg, ${colorStops.join(", ")})`;
  }
};

  return (
    <section className="py-12 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative">

      {/* Ajuste da margem inferior menor em mobile */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-100 text-center mb 10 sm:mb-20">
        Etapas Do <span className="text-cyan-400">Projeto</span>
      </h2>

      <div className="relative max-w-6xl mx-auto h-48">
        {/* Linha do progresso */}
        <motion.div
          className="absolute top-1/2 h-[6px] rounded-full z-0 origin-left"
          style={{
            left: `${lineLeft}px`,
            background: getTimelineGradient(),
          }}
          initial={{ width: 0 }}
          animate={{ width: lineWidth }}
          transition={{ duration: activeStep === null ? 4 : 0.6, ease: "easeInOut" }}
        />

        {/* Ícones das etapas */}
        <div
          ref={containerRef}
          className="relative z-10 flex h-full px-4 items-center justify-between flex-row"
        >
          {steps.map((s, i) => {
            const iconSize = isMobile ? 16 : 28;
            const circleSize = iconSize * 2.2;
            const ringPadding = isMobile ? "p-[2px]" : "p-1";

            const isActive = activeStep === i;
            const hasSelection = activeStep !== null;

            return (
              <div
                key={i}
                className={`relative ${
                  isMobile
                    ? "w-full flex flex-row items-center text-left"
                    : "w-1/5 flex flex-col items-center text-center"
                }`}
                style={{ minWidth: isMobile ? undefined : "20%" }}
              >
                <motion.div
                  onClick={() => handleStepClick(i)}
                  className={`${ringPadding} rounded-full step-icon cursor-pointer origin-center`}
                  animate={{
                    scale: hasSelection
                      ? isActive
                        ? isMobile
                          ? 1.7
                          : 1.25
                        : isMobile
                        ? 0.7
                        : 0.75
                      : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{
                    display: "inline-flex",
                    background: `linear-gradient(135deg, ${s.gradientColors[0]}, ${s.gradientColors[1]})`,
                  }}
                  ref={(el) => {
                    iconRefs.current[i] = el;
                  }}
                >
                  <div
                    className="rounded-full bg-[#111827] flex items-center justify-center shadow-sm"
                    style={{
                      width: circleSize,
                      height: circleSize,
                    }}
                  >
                    {s.icon(iconSize)}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Setinha e Card */}
        <AnimatePresence mode="wait">
          {activeStep !== null && positions[activeStep] && (
            <>
              {(() => {
                const { scale, circleSize } = getScaleAndCircleSize(activeStep);
                const iconBottom = positions[activeStep].bottomY;
                const arrowTop = iconBottom + (circleSize * scale) / 2 + (isMobile ? -6 : -20);
                const cardTop = arrowTop + 12 + (isMobile ? 2 : 6);

                const step = steps[activeStep];

                return (
                  <>
                    <motion.svg
                      key={`arrow-${activeStep}`}
                      className="absolute z-30"
                      style={{
                        top: arrowTop,
                        left: positions[activeStep].centerX - 10,
                        width: 20,
                        height: 12,
                        pointerEvents: "none",
                      }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      viewBox="0 0 20 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient id="arrowGradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor={step.gradientColors[0]} />
                          <stop offset="100%" stopColor={step.gradientColors[1]} />
                        </linearGradient>
                      </defs>
                      <path d="M0 0 L10 12 L20 0 Z" fill="url(#arrowGradient)" />
                    </motion.svg>

<motion.div
  key={activeStep}
  className="absolute z-20"
  style={{
    top: cardTop,
    left: isMobile
      ? Math.min(
          Math.max(
            positions[activeStep].centerX - containerRef.current!.offsetWidth * 0.45,
            8
          ),
          containerRef.current!.offsetWidth - containerRef.current!.offsetWidth * 0.9 - 8
        )
      : Math.min(
          Math.max(positions[activeStep].centerX - 160, 0),
          containerRef.current!.offsetWidth - 320
        ),
    width: isMobile ? "90%" : 320,
    padding: isMobile ? "0.75rem 1rem" : undefined,
    borderColor: step.borderColor,
  }}
  initial={{ opacity: 0, y: 10, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  exit={{ opacity: 0, y: 10, scale: 0.95 }}
  transition={{ duration: 0.3, ease: "easeInOut" }}
>

                      <div
                        className={`bg-[#1f2937] rounded-xl shadow-xl text-gray-200 backdrop-blur-sm border ${
                          isMobile ? "p-4" : "p-6"
                        }`}
                        style={{ borderColor: step.borderColor }}
                      >
                        <h4
                          className={`font-bold mb-2 ${isMobile ? "text-base" : "text-xl"}`}
                          style={{ color: step.textColor }}
                        >
                          {step.title}
                        </h4>
                        <p className={`leading-snug ${isMobile ? "text-xs" : "text-base"}`}>
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  </>
                );
              })()}
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}