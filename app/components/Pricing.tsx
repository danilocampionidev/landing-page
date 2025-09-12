"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const pricing = [
  {
    title: "Landing Page",
    price: "A partir de R$ 250",
    color: "from-cyan-500 to-blue-500",
    textColor: "text-cyan-400",
  },
  {
    title: "Site Institucional",
    price: "A partir de R$ 450",
    color: "from-emerald-500 to-green-500",
    textColor: "text-emerald-400",
  },
  {
    title: "Sistema Personalizado",
    price: "A partir de R$ 800",
    color: "from-indigo-500 to-purple-500",
    textColor: "text-indigo-400",
  },
  {
    title: "Suporte Extra",
    price: "Valor a combinar",
    color: "from-yellow-400 to-amber-500",
    textColor: "text-yellow-400",
  },
];

export default function Pricing() {
  return (
    <section className="py-20 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Tabela de <span className="text-cyan-400">Valores</span>
        </h2>
        <p className="mt-4 text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Valores base para projetos web. Os preços podem variar conforme escopo, prazos e necessidades específicas.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {pricing.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className={`bg-gradient-to-br ${p.color} p-[1px] rounded-xl shadow-lg`}
          >
            <div className="bg-gray-900 rounded-[12px] py-6 px-4 text-center h-full">
              <CheckCircle className={`mx-auto mb-3 ${p.textColor}`} size={24} />
              <h3 className="text-white font-semibold text-base">{p.title}</h3>
              <p className={`mt-1 text-sm font-medium ${p.textColor}`}>{p.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
