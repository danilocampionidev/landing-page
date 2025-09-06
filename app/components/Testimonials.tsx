"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { testimonials } from "../data/testimonials";

export default function TestimonialsAnimatedLine() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [manualPause, setManualPause] = useState(false);
  const total = testimonials.length;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Função para iniciar ou reiniciar o intervalo
  const startInterval = (duration: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
      setManualPause(false);
    }, duration);
  };

  useEffect(() => {
    startInterval(5000); // padrão 5s
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [total]);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
    setManualPause(true);
    startInterval(7000); // tempo extra de 7s ao clicar
  };

  const getPosition = (index: number) => {
    const diff = (index - currentIndex + total) % total;
    switch (diff) {
      case 0:
        return "main";
      case 1:
        return "upper1";
      case 2:
        return "lower1";
      case 3:
        return "upper2";
      case 4:
        return "lower2";
      default:
        return "hidden";
    }
  };

  return (
    <section className="relative w-full py-20 px-6 lg:px-16 text-white bg-gray-950">
      <div className="text-center mb-12 z-10 relative">
        <h2 className="text-3xl font-bold">
          O que dizem sobre meu <span className="text-cyan-400">trabalho</span>
        </h2>
        <div className="w-20 h-1 bg-cyan-400 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Container dos cards com margin-top maior */}
      <div className="relative max-w-4xl mx-auto flex flex-col items-center mt-48 h-[600px] overflow-visible">
        <AnimatePresence initial={false}>
          {testimonials.map((t, i) => {
            const pos = getPosition(i);
            if (pos === "hidden") return null;

            let style = {};
            let zIndex = 0;

            switch (pos) {
              case "main":
                style = { scale: 1, opacity: 1, y: 0, filter: "blur(0px)" };
                zIndex = 6;
                break;
              case "upper1":
                style = { scale: 0.85, opacity: 0.7, y: -80, filter: "blur(1px)" };
                zIndex = 5;
                break;
              case "lower1":
                style = { scale: 0.85, opacity: 0.7, y: 80, filter: "blur(1px)" };
                zIndex = 4;
                break;
              case "upper2":
                style = { scale: 0.7, opacity: 0.5, y: -160, filter: "blur(2px)" };
                zIndex = 3;
                break;
              case "lower2":
                style = { scale: 0.7, opacity: 0.5, y: 160, filter: "blur(2px)" };
                zIndex = 2;
                break;
            }

            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ ...style }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ zIndex }}
                className="absolute w-full cursor-pointer"
                onClick={() => handleClick(i)}
              >
                <div
                  className={`bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-700 flex flex-col items-start relative`}
                  style={{
                    boxShadow:
                      pos === "main"
                        ? "0 0 20px rgba(6, 182, 212, 0.6)"
                        : "0 5px 15px rgba(0,0,0,0.2)",
                  }}
                >
                  <div className="flex items-center mb-2 z-10 relative">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400 mr-4 flex-shrink-0 z-20"
                    />
                    <div className="flex">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.947a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.947c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.285-3.947a1 1 0 00-.364-1.118L2.025 9.374c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.947z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <p className="italic text-gray-300 mb-3 z-10 relative">“{t.text}”</p>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between z-10 relative">
                    <div>
                      <h4 className="font-semibold text-white">{t.name}</h4>
                      <p className="text-gray-400 text-sm">
                        {t.role} • {t.date}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
