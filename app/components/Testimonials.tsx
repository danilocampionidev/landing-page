"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { testimonials } from "../data/testimonials";

export default function TestimonialsAnimatedLine() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = testimonials.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [containerHeight, setContainerHeight] = useState(280);
  const [containerMarginTop, setContainerMarginTop] = useState(140);
  const [containerMarginBottom, setContainerMarginBottom] = useState(28);

  const startAutoLoop = (delay = 5000) => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev - 1 + total) % total);
    }, delay);
  };

  useEffect(() => {
    startAutoLoop();
    return () => timerRef.current && clearInterval(timerRef.current);
  }, [total]);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width >= 1024) {
        // Desktop
        setContainerHeight(280);
        setContainerMarginTop(140);
        setContainerMarginBottom(28);
      } else if (width >= 640) {
        // Tablet
        setContainerHeight(210);
        setContainerMarginTop(110); // aumentei de 90 para 110 para dar mais espaço
        setContainerMarginBottom(20);
      } else {
        // Mobile
        setContainerHeight(160);
        setContainerMarginTop(90);  // aumentei de 60 para 90 para evitar invasão no título
        setContainerMarginBottom(40); // aumentei marginBottom para espaçar mais o final da seção
      }
    }

    handleResize(); // initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
    startAutoLoop(8000);
  };

  const getPosition = (index: number) => {
    const diff = (currentIndex - index + total) % total;

    switch (diff) {
      case 0:
        return "main";
      case 1:
        return "lower1";
      case 2:
        return "upper1";
      case 3:
        return "lower2";
      case 4:
        return "upper2";
      default:
        return "hidden";
    }
  };

  const getStyle = (pos: string) => {
    switch (pos) {
      case "main":
        return { scale: 0.85, opacity: 1, y: 6, filter: "blur(0px)", zIndex: 6 };
      case "upper1":
        return {
          scale: 0.7,
          opacity: 0.7,
          y: -60,
          filter: "blur(1px)",
          zIndex: 5,
        };
      case "lower1":
        return {
          scale: 0.7,
          opacity: 0.7,
          y: 60,
          filter: "blur(1px)",
          zIndex: 4,
        };
      case "upper2":
        return {
          scale: 0.55,
          opacity: 0.5,
          y: -120,
          filter: "blur(2px)",
          zIndex: 3,
        };
      case "lower2":
        return {
          scale: 0.55,
          opacity: 0.5,
          y: 120,
          filter: "blur(2px)",
          zIndex: 2,
        };
      default:
        return { opacity: 0, zIndex: 0 };
    }
  };

  return (
    <section
      className="relative w-full py-20 px-6 lg:px-16 text-white bg-gray-950 select-none"
      style={{ paddingBottom: 100 }} // aumentei o paddingBottom para mais espaço no final
    >
      <div className="text-center mb-12 z-10 relative">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-100 leading-tight">
          O que dizem sobre meu <span className="text-cyan-400">trabalho</span>
        </h2>
        <div className="w-20 h-1 bg-cyan-400 mx-auto mt-3 rounded-full"></div>
      </div>

      <div
        className="relative max-w-4xl mx-auto"
        style={{
          height: containerHeight,
          marginBottom: containerMarginBottom,
          marginTop: containerMarginTop,
        }}
      >
        <AnimatePresence initial={false}>
          {testimonials.map((t, i) => {
            const pos = getPosition(i);
            if (pos === "hidden") return null;

            const style = getStyle(pos);

            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ ...style }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ zIndex: style.zIndex, position: "absolute", width: "100%" }}
                className="cursor-pointer"
                onClick={() => handleClick(i)}
              >
                <div
                  className={`bg-gray-800 rounded-2xl p-4 shadow-md border border-gray-700 flex flex-col items-start relative`}
                  style={{
                    boxShadow:
                      pos === "main"
                        ? "0 0 20px rgba(6, 182, 212, 0.6)"
                        : "0 5px 15px rgba(0,0,0,0.2)",
                    willChange: "transform, opacity, filter",
                  }}
                >
                  <div className="flex items-center mb-2 z-10 relative">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400 mr-3 flex-shrink-0 z-20"
                    />
                    <div className="flex">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.947a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.947c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.285-3.947a1 1 0 00-.364-1.118L2.025 9.374c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.947z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <p className="italic text-gray-300 mb-3 z-10 relative text-xs sm:text-sm leading-snug">
                    “{t.text}”
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between z-10 relative">
                    <div>
                      <h4 className="font-semibold text-white text-sm sm:text-base">{t.name}</h4>
                      <p className="text-gray-400 text-xs sm:text-xs">
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
