"use client";
import { motion } from "framer-motion";
import { testimonials } from "../data/testimonials";

export default function TestimonialsAnimatedLine() {
  return (
    <section className="relative w-full py-20 px-6 lg:px-16 text-white bg-gray-950">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          O que dizem sobre meu <span className="text-cyan-400">trabalho</span>
        </h2>
        <div className="w-20 h-1 bg-cyan-400 mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="relative max-w-4xl mx-auto flex flex-col gap-12">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="flex items-start gap-6"
          >
            <div className="flex-shrink-0">
              <img
                src={t.photo}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400"
              />
            </div>
            <div className="bg-gray-800/80 rounded-2xl p-6 shadow-md border border-gray-700 flex-1">
              {/* Avaliação com estrelas */}
              <div className="flex items-center mb-2">
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

              {/* Texto do depoimento */}
              <p className="italic text-gray-300 mb-3">“{t.text}”</p>

              {/* Nome e informações adicionais */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="font-semibold text-white">{t.name}</h4>
                  <p className="text-gray-400 text-sm">
                    {t.role} • {t.date}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
