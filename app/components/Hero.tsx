"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Code2 } from "lucide-react";

export default function Hero({ typedText, showText }: { typedText: string; showText: boolean }) {
  return (
    <section className="relative w-full bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white py-20 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col space-y-6">
          <div className="flex items-center space-x-4">
            <img src="/avatar.png" alt="Avatar" className="w-14 h-14 rounded-full border-2 border-cyan-500 shadow-lg" />
            <div>
              <h3 className="text-lg font-semibold">DANILO CAMPIONI</h3>
              <p className="text-sm text-gray-400">Desenvolvedor & Criador</p>
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            Transformando <span className="text-cyan-400">código</span> em <span className="text-purple-400">experiências digitais</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Desenvolvimento moderno, soluções criativas e interfaces que conectam ideias ao mundo real.
          </p>
          <div className="flex space-x-4">
            <a href="#projetos" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-xl shadow-md font-medium transition">Ver Projetos</a>
            <a href="#contato" className="px-6 py-3 border border-gray-600 hover:border-cyan-500 rounded-xl font-medium transition">Entrar em Contato</a>
          </div>
        </div>

        <div className="relative w-full h-96 flex items-center justify-center rounded-xl bg-cyan-700/5 border border-cyan-500/40 p-4 overflow-hidden">
          <AnimatePresence>
            {showText && (
              <motion.pre initial={{ opacity: 0 }} animate={{ opacity: 0.35 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
                className="text-white/50 font-mono text-sm w-full h-full overflow-hidden whitespace-pre-wrap blur-[1px]">
                {typedText}<span className="animate-pulse">|</span>
              </motion.pre>
            )}
          </AnimatePresence>
          <motion.div className="absolute w-24 h-24 rounded-full bg-cyan-500 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.8)]"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Code2 size={40} className="text-white" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
