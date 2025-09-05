"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects } from "../data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section id="projetos" className="py-20 px-4 sm:px-6 lg:px-16 bg-gray-900">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Projetos <span className="text-cyan-400">Recentes</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Coluna esquerda: cards pequenos */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {projects.map((p) => (
            <motion.div
              key={p.id}
              onClick={() => setSelectedProject(p)}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(0,255,255,0.3)" }}
              className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl cursor-pointer border-2 transition-all duration-300
                ${selectedProject.id === p.id ? "border-cyan-500 bg-gray-800/60" : "border-gray-700/40 bg-gray-800/20"}`}
            >
              <Image
                src={p.imageSrc}
                alt={p.title}
                width={50}
                height={38}
                className="rounded-md object-cover"
              />
              <div className="flex-1">
                <h3 className="text-white font-medium text-sm sm:text-base">{p.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm mt-1">
                  {p.technologies?.join(", ")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coluna direita: card grande */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProject.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-800 rounded-2xl shadow-xl p-4 flex flex-col gap-4 w-full max-h-[500px] sm:max-h-[450px] lg:max-h-[440px]"
          >
            {/* Primeiro card interno: imagem + descrição */}
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Coluna esquerda: imagem */}
              <div className={`border-4 ${selectedProject.borderColor || "border-cyan-500"} rounded-lg p-1 flex items-center justify-center`}>
                <Image
                  src={selectedProject.imageSrc}
                  alt={selectedProject.title}
                  width={180}
                  height={110}
                  className="rounded-md object-cover"
                />
              </div>

              {/* Coluna direita: descrição */}
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-lg sm:text-xl font-semibold text-white">{selectedProject.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base mt-2">{selectedProject.description}</p>
              </div>
            </div>

            {/* Segundo card interno: tecnologias */}
            <div className="bg-gray-700/50 rounded-lg p-2 flex flex-wrap gap-2 justify-center sm:justify-start">
              {selectedProject.technologies?.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs sm:text-sm bg-cyan-600/30 text-white px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
