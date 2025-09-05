"use client";
import { motion } from "framer-motion";

const pricing = [
  { title: "Landing Pages", price: "R$ 150", color: "text-cyan-400" },
  { title: "Site Institucional", price: "R$ 250", color: "text-emerald-400" },
  { title: "Sistema Personalizado", price: "R$ 500", color: "text-indigo-400" },
  { title: "Suporte Extra", price: "A combinar", color: "text-yellow-400" },
];

export default function Pricing() {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white">Tabela de <span className="text-cyan-400">Valores</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {pricing.map((p, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }} className="flex flex-col items-center bg-gray-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-white font-semibold mb-2">{p.title}</h3>
            <p className={`${p.color} font-semibold`}>{p.price}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
