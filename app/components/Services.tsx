"use client";
import { motion } from "framer-motion";
import { 
  UilDesktop,
  UilLaptop,
  UilServer,
  UilNetwork,
  UilLayerGroup, 
  UilMobileAndroid,
  UilRobot
} from "@iconscout/react-unicons";

const services = [
  { icon: <UilDesktop className="text-cyan-400" size={36} />, title: "Landing Pages", desc: "Páginas modernas e otimizadas para conversão, ideais para campanhas e divulgação." },
  { icon: <UilLaptop className="text-purple-400" size={36} />, title: "Sites Institucionais", desc: "Websites profissionais, responsivos e de fácil gerenciamento para empresas e profissionais." },
  { icon: <UilServer className="text-emerald-400" size={36} />, title: "Sistemas Personalizados", desc: "Soluções personalizadas para automatizar processos e otimizar fluxos de trabalho." },
  { icon: <UilLayerGroup className="text-yellow-400" size={36} />, title: "APIs & Integrações", desc: "Desenvolvimento de APIs, automações e integrações entre diferentes plataformas." },
  { icon: <UilMobileAndroid className="text-pink-400" size={36} />, title: "Aplicativos Mobile", desc: "Apps multiplataforma com Flutter, para Android e iOS, rápidos e escaláveis." },
  { icon: <UilRobot className="text-indigo-400" size={36} />, title: "Suporte & Manutenção", desc: "Acompanhamento técnico, otimizações de performance e atualizações contínuas." },
];

export default function Services() {
  return (
    <section className="py-20 px-6 bg-gray-950">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white">Meus <span className="text-cyan-400">Serviços</span></h2>
        <p className="text-gray-400 mt-3 text-lg">Soluções digitais sob medida para diferentes necessidades.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div key={i} whileHover={{ y: -8, boxShadow: "0 10px 25px rgba(34, 211, 238, 0.4)" }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="flex flex-col items-center text-center bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-800 hover:border-cyan-500/60 transition-all duration-300"
          >
            <div className="mb-4">{s.icon}</div>
            <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-gray-300 text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
