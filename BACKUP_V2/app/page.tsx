"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Sliders, Zap, Database } from "lucide-react";
import "devicon/devicon.min.css";


export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [showText, setShowText] = useState(true);
  const [currentScript, setCurrentScript] = useState("");

  const scripts = [
    `const developer = {
  name: "Danilo Campioni",
  skills: ["Frontend", "Backend", "UI/UX", "Performance"],
  specialization: "Soluções digitais escaláveis",
  objective: "Criar experiências impactantes"
};`
  ];

  const typingSpeed = 30;
  const displayTime = 3000;

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const startTyping = () => {
      const randomScript = scripts[Math.floor(Math.random() * scripts.length)];
      setCurrentScript(randomScript);

      setTypedText("");
      setShowText(true);

      let current = 0;
      const typeInterval = setInterval(() => {
        setTypedText((prev) => prev + randomScript[current]);
        current++;
        if (current >= randomScript.length) {
          clearInterval(typeInterval);
          timeoutId = setTimeout(() => {
            setShowText(false);
            timeoutId = setTimeout(() => {
              startTyping();
            }, 500);
          }, displayTime);
        }
      }, typingSpeed);
    };

    startTyping();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white py-20 px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Coluna Esquerda */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-4">
              <img
                src="/avatar.png"
                alt="Avatar"
                className="w-14 h-14 rounded-full border-2 border-cyan-500 shadow-lg"
              />
              <div>
                <h3 className="text-lg font-semibold">DANILO CAMPIONI</h3>
                <p className="text-sm text-gray-400">Desenvolvedor & Criador</p>
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
              Transformando <span className="text-cyan-400">código</span> em{" "}
              <span className="text-purple-400">experiências digitais</span>
            </h1>

            <p className="text-gray-300 text-lg">
              Desenvolvimento moderno, soluções criativas e interfaces que
              conectam ideias ao mundo real.
            </p>

            <div className="flex space-x-4">
              <a
                href="#projetos"
                className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-xl shadow-md font-medium transition"
              >
                Ver Projetos
              </a>
              <a
                href="#contato"
                className="px-6 py-3 border border-gray-600 hover:border-cyan-500 rounded-xl font-medium transition"
              >
                Entrar em Contato
              </a>
            </div>
          </div>

          {/* Coluna Direita - Code Card Glow */}
          <div className="relative w-full h-96 flex items-center justify-center rounded-xl bg-cyan-700/5 border border-cyan-500/40 p-4 overflow-hidden">
            {/* Efeito de digitação */}
            <AnimatePresence>
              {showText && (
                <motion.pre
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.35 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-white/50 font-mono text-sm w-full h-full overflow-hidden whitespace-pre-wrap blur-[1px]"
                >
                  {typedText}
                  <span className="animate-pulse">|</span>
                </motion.pre>
              )}
            </AnimatePresence>

            {/* Cards flutuantes */}
            <motion.div
              className="absolute top-10 left-10 w-14 h-14 rounded-xl bg-purple-500/20 backdrop-blur-md flex items-center justify-center"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Database className="text-purple-400/70" size={22} />
            </motion.div>

            <motion.div
              className="absolute top-20 right-14 w-14 h-14 rounded-xl bg-pink-500/20 backdrop-blur-md flex items-center justify-center"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <Zap className="text-pink-400/70" size={22} />
            </motion.div>

            <motion.div
              className="absolute bottom-16 left-16 w-14 h-14 rounded-xl bg-blue-500/20 backdrop-blur-md flex items-center justify-center"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sliders className="text-blue-400/70" size={22} />
            </motion.div>

            {/* Ícone central com Glow */}
            <motion.div
              className="absolute w-24 h-24 rounded-full bg-cyan-500 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.8)]"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Code2 size={40} className="text-white" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* TECNOLOGIAS USADAS */}
<section className="relative w-full bg-gradient-to-b from-gray-950 to-black text-white py-20 px-6 lg:px-16">
  <div className="max-w-7xl mx-auto text-center space-y-12">
    <h2 className="text-3xl lg:text-4xl font-bold">
      Tecnologias <span className="text-cyan-400">com as quais trabalho</span>
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-12">
      {[
        { name: "HTML", icon: "devicon-html5-plain colored" },
        { name: "CSS", icon: "devicon-css3-plain colored" },
        { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
        { name: "TailwindCSS", icon: "devicon-tailwindcss-original colored" },
        { name: "Flutter", icon: "devicon-flutter-plain colored" }, // 🔹 substituído
        { name: "ReactJS", icon: "devicon-react-original colored" },
        { name: "NodeJS", icon: "devicon-nodejs-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "PHP", icon: "devicon-php-plain colored" },
        { name: "Dart", icon: "devicon-dart-plain colored" },
      ].map((tech, i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-center space-y-3 p-6 rounded-xl bg-gray-900/40 border border-gray-700/40 hover:border-cyan-500/60 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
        >
          <i className={`${tech.icon} text-5xl`}></i>
          <span className="text-sm font-medium text-gray-300">{tech.name}</span>
        </div>
      ))}
    </div>
  </div>
</section>


    </>
  );
}
