"use client";

import { motion } from "framer-motion";
import { steps } from "../data/steps";

// 👇 Importa os ícones que você usa
import { CheckCircle, Rocket, Code } from "lucide-react";
import { JSX } from "react/jsx-runtime";

// 👇 Mapa de nomes → ícones
const iconMap: Record<string, JSX.Element> = {
  check: <CheckCircle className="w-10 h-10 text-cyan-400" />,
  rocket: <Rocket className="w-10 h-10 text-cyan-400" />,
  code: <Code className="w-10 h-10 text-cyan-400" />,
};

export default function Steps() {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
          Etapas do <span className="text-cyan-400">Projeto</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {steps.map((e, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-gray-800 rounded-2xl p-6 shadow-xl text-center"
          >
            {/* 👇 pega o ícone pelo nome */}
            {iconMap[e.iconName] || (
              <span className="text-gray-500">❓</span>
            )}

            <h3 className="text-white font-semibold mt-4 mb-2">{e.title}</h3>
            <p className="text-gray-300 text-sm">{e.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
