"use client";

import { motion } from "framer-motion";
import { technologies } from "../data/technologies";
import "devicon/devicon.min.css"; // garante que o CSS do Devicon seja aplicado

export default function Technologies() {
  return (
    <section className="relative w-full bg-gradient-to-b from-gray-950 to-black text-white py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Tecnologias <span className="text-cyan-400">com as quais trabalho</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-12">
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center space-y-3 p-8 rounded-xl bg-gray-900/40 border border-gray-700/40 hover:border-cyan-500/60 shadow-md transition-all duration-300"
            >
              <i className={`${tech.icon} text-6xl`}></i>
              <span className="text-sm font-medium text-gray-300">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
