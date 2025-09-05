"use client";
import React from "react"; // ✅ Import necessário para ReactNode
import { motion } from "framer-motion";
import { steps } from "../data/steps";
import { Database, Zap, Sliders } from "lucide-react";

// Troca JSX.Element por React.ReactNode
const iconMap: Record<string, React.ReactNode> = {
  Database: <Database className="text-purple-400/70" size={28} />,
  Zap: <Zap className="text-cyan-400/70" size={28} />,
  Sliders: <Sliders className="text-pink-400/70" size={28} />,
};

export default function ProjectSteps() {
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
            {iconMap[e.iconName]}
            <h3 className="text-white font-semibold mt-4 mb-2">{e.title}</h3>
            <p className="text-gray-300 text-sm">{e.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
