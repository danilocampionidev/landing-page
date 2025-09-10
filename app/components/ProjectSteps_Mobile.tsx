"use client";

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ClipboardList, Code2, FileText, Package, Headphones } from "lucide-react";

const steps = [
  {
    title: "Briefing",
    description:
      "Reunião inicial para entender as necessidades, objetivos e requisitos do cliente.",
    ringGradient: "bg-gradient-to-br from-cyan-500 to-blue-600",
    icon: <ClipboardList size={28} className="text-gray-300" />,
  },
  {
    title: "Desenvolvimento",
    description:
      "Implementação do projeto com código limpo, boas práticas e tecnologias modernas.",
    ringGradient: "bg-gradient-to-br from-cyan-500 to-blue-700",
    icon: <Code2 size={28} className="text-gray-300" />,
  },
  {
    title: "Revisão",
    description:
      "Verificação minuciosa para corrigir erros, otimizar e alinhar com o esperado pelo cliente.",
    ringGradient: "bg-gradient-to-br from-blue-500 to-cyan-600",
    icon: <FileText size={28} className="text-gray-300" />,
  },
  {
    title: "Entrega",
    description:
      "Disponibilização do projeto finalizado, pronto para uso e homologado.",
    ringGradient: "bg-gradient-to-br from-cyan-400 to-blue-500",
    icon: <Package size={28} className="text-gray-300" />,
  },
  {
    title: "Suporte pós-entrega",
    description:
      "Acompanhamento após entrega, correções rápidas e suporte contínuo.",
    ringGradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
    icon: <Headphones size={28} className="text-gray-300" />,
  },
];

export default function ProjectSteps_Mobile() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [prevRef, nextRef]);

  return (
    <section className="py-12 px-4 bg-[#0b0f17] max-w-md mx-auto rounded-lg shadow-lg relative">
      <style>{`
        .custom-pagination .swiper-pagination-bullet {
          background-color: #6b7280; /* Tailwind gray-500 */
          opacity: 0.6;
          width: 12px;
          height: 12px;
          margin: 0 6px !important;
          cursor: pointer;
          transition: background-color 0.3s ease, opacity 0.3s ease;
          border-radius: 9999px;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background-color: #22d3ee !important; /* Tailwind cyan-400 */
          opacity: 1;
          width: 12px;
          height: 12px;
        }
      `}</style>

      <h2 className="text-3xl font-extrabold text-gray-100 text-center mb-8">
        Etapas Do <span className="text-cyan-400">Projeto</span>
      </h2>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current!,
          nextEl: nextRef.current!,
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        a11y={{ enabled: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {steps.map((step, i) => (
          <SwiperSlide key={i}>
            <div
              className={`flex flex-col items-center p-6 rounded-lg shadow-xl bg-[#111827]`}
            >
              <div className={`${step.ringGradient} p-3 rounded-full mb-6`}>
                <div className="w-20 h-20 rounded-full bg-[#0b121f] flex items-center justify-center shadow-md">
                  {step.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-300 text-center">{step.description}</p>
            </div>
          </SwiperSlide>
        ))}

        {/* Setas menores customizadas */}
        <div
          ref={prevRef}
          className={`custom-prev absolute top-1/2 left-3 -translate-y-1/2 z-20 cursor-pointer text-cyan-400 hover:text-cyan-600 transition-opacity duration-300 ${
            activeIndex === 0 ? "opacity-30 pointer-events-none" : "opacity-100"
          }`}
          aria-label="Slide anterior"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </div>

        <div
          ref={nextRef}
          className={`custom-next absolute top-1/2 right-3 -translate-y-1/2 z-20 cursor-pointer text-cyan-400 hover:text-cyan-600 transition-opacity duration-300 ${
            activeIndex === steps.length - 1
              ? "opacity-30 pointer-events-none"
              : "opacity-100"
          }`}
          aria-label="Próximo slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Círculos na parte inferior, centralizados */}
        <div className="custom-pagination flex justify-center mt-6" />
      </Swiper>
    </section>
  );
}
