"use client";
import { motion } from "framer-motion";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section className="relative w-full bg-gray-900 text-white py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold">O que dizem sobre meu <span className="text-cyan-400">trabalho</span></h2>
        <span className="block w-20 h-1 bg-cyan-400 rounded-full mt-2 mx-auto"></span>
      </div>
      <div className="relative max-w-6xl mx-auto overflow-hidden">
        <motion.div className="flex gap-8" animate={{ x: ["0%", "-20%", "-40%", "-60%", "-80%", "0%"] }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }}>
          {testimonials.map((t) => (
            <div key={t.id} className="flex-shrink-0 w-80 md:w-96 bg-gray-800 rounded-xl p-8 shadow-lg flex flex-col justify-between">
              <div className="flex items-center gap-4 mb-4">
                <img src={t.photo} alt={t.name} className="w-16 h-16 rounded-full border-2 border-cyan-500 object-cover" />
                <div className="flex flex-col flex-1 text-left">
                  <span className="font-semibold text-white">{t.name}</span>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.402 8.172L12 18.897l-7.336 3.867 1.402-8.172L.132 9.21l8.2-1.192z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{t.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
