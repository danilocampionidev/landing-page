// PROJECTS.TSX (Glow pulsante automático baseado em borderColor)

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects } from "../data/projects";
import { CheckCircle } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section
      id="projetos"
      className="py-20 px-4 sm:px-6 lg:px-16 bg-gray-900 text-white"
    >
      {/* Título */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold">
          Meus <span className="text-cyan-400">Projetos</span>
        </h2>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
          Explore meus projetos destacados, cada um representando diferentes
          habilidades e tecnologias na minha jornada como desenvolvedor.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Coluna esquerda: lista de projetos */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {projects.map((p) => {
            // Extrair cor para o glow do Tailwind
            const glowColor = p.borderColor.replace("border-", "");

            return (
              <motion.div
                key={p.id}
                onClick={() => setSelectedProject(p)}
                whileHover={{ scale: 1.02 }}
                animate={
                  selectedProject.id === p.id
                    ? {
                        boxShadow: [
                          `0 0 20px theme(colors.${glowColor})`,
                          `0 0 35px theme(colors.${glowColor})`,
                          `0 0 20px theme(colors.${glowColor})`,
                        ],
                      }
                    : { boxShadow: "0 0 0px transparent" }
                }
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border
                  ${
                    selectedProject.id === p.id
                      ? `${p.borderColor} bg-gray-800/60`
                      : "border-gray-700/40 bg-gray-800/30"
                  }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">{p.title}</h3>
                  <span className="text-sm text-gray-400">{p.year}</span>
                </div>
                <p className="text-gray-300 text-sm line-clamp-2">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-700/60 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {p.technologies.length > 3 && (
                    <span className="text-xs text-gray-400">
                      +{p.technologies.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Coluna direita: detalhes do projeto selecionado */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProject.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-800 rounded-2xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-start"
          >
            {/* Coluna esquerda: Imagem (card ajusta EXACTAMENTE ao tamanho da imagem, sem espaço vazio) */}
            <div className="rounded-lg overflow-hidden border border-gray-700 self-start">
              <Image
                src={selectedProject.imageSrc}
                alt={selectedProject.title}
                width={500}
                height={500}
                className="object-contain w-full h-auto"
              />
            </div>

            {/* Coluna direita: Conteúdo */}
            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">
                  {selectedProject.title}
                </h3>
                <span className="text-sm text-gray-400">
                  {selectedProject.year}
                </span>
              </div>
              <p className="text-gray-300">{selectedProject.description}</p>

              {/* Características principais */}
              {selectedProject.features?.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-semibold text-cyan-400 mb-2">
                    Características principais:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    {selectedProject.features.map((f, i) => (
                      <li
                        key={i}
                        className="grid grid-cols-[18px,1fr] gap-2 items-start"
                      >
                        <CheckCircle className="w-4 h-4 text-cyan-400 mt-[2px] flex-shrink-0" />
                        <span className="text-gray-300 leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tecnologias */}
              <div className="mt-4">
                <h4 className="font-semibold text-cyan-400 mb-2">
                  Tecnologias utilizadas:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-700/70 px-3 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
