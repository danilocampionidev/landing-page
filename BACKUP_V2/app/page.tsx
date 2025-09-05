"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Sliders, Zap, Database } from "lucide-react";
import "devicon/devicon.min.css";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { 
  UilDesktop,
  UilLaptop,
  UilServer,
  UilNetwork,
  UilLayerGroup, 
  UilMobileAndroid,
  UilRobot
} from "@iconscout/react-unicons";



// ----------------- DADOS -----------------
const projects = [
  { id: 1, title: "FitZone - App Fitness", description: "Aplicativo completo para fitness e bem-estar, com planos personalizados, monitoramento por smartwatch e integração com redes sociais.", imageSrc: "/images/fitzone.jpg", borderColor: "border-cyan-500" },
  { id: 2, title: "Bella Derme - Clínica Estética", description: "Site institucional elegante e responsivo para clínica estética, com agendamento online e portfólio de tratamentos.", imageSrc: "/images/belladerme.jpg", borderColor: "border-pink-400" },
  { id: 3, title: "NerdWear - Moda Geek", description: "Loja virtual de moda geek, com catálogo de produtos, filtros interativos e um visual moderno para fãs da cultura pop.", imageSrc: "/images/nerdwear.jpg", borderColor: "border-yellow-400" },
];

const testimonials = [
  { id: 1, name: "Alice Costa", text: "Excelente profissional! Entregou o projeto antes do prazo e superou minhas expectativas.", photo: "/images/mulher_01.jpg" },
  { id: 2, name: "Bruno Martins", text: "Trabalho impecável, comunicação clara e suporte contínuo. Recomendo demais!", photo: "/images/homem_01.jpg" },
  { id: 3, name: "Carla Souza", text: "Projetos com design moderno e performance incrível. Fiquei muito satisfeita com o resultado.", photo: "/images/mulher_02.jpg" },
];

const etapas = [
  { icon: <Database className="text-purple-400/70" size={28} />, title: "Briefing", description: "Coleta de informações e definição do escopo do projeto." },
  { icon: <Zap className="text-cyan-400/70" size={28} />, title: "Desenvolvimento", description: "Implementação do projeto com base nas especificações definidas." },
  { icon: <Sliders className="text-pink-400/70" size={28} />, title: "Revisão", description: "Testes e ajustes para garantir qualidade e funcionalidade." },
];

// ----------------- COMPONENTE PRINCIPAL -----------------
export default function LandingPage() {
  const [typedText, setTypedText] = useState("");
  const [showText, setShowText] = useState(true);

  const scripts = [
    `const developer = {
  name: "Danilo Campioni",
  skills: ["Frontend", "Backend", "UI/UX", "Performance"],
  specialization: "Soluções digitais escaláveis",
  objective: "Criar experiências impactantes"
};`,
  ];

  const typingSpeed = 30;
  const displayTime = 3000;

  useEffect(() => {
    let timeoutId;

    const startTyping = () => {
      const randomScript = scripts[Math.floor(Math.random() * scripts.length)];
      setTypedText("");
      setShowText(true);

      let current = 0;
      const typeInterval = setInterval(() => {
        setTypedText((prev) => prev + randomScript[current]);
        current++;
        if (current >= randomScript.length) {
          clearInterval(typeInterval);
          timeoutId = setTimeout(() => {
            setShowText(false);
            timeoutId = setTimeout(() => {
              startTyping();
            }, 500);
          }, displayTime);
        }
      }, typingSpeed);
    };

    startTyping();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative w-full bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white py-20 px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-4">
              <img src="/avatar.png" alt="Avatar" className="w-14 h-14 rounded-full border-2 border-cyan-500 shadow-lg" />
              <div>
                <h3 className="text-lg font-semibold">DANILO CAMPIONI</h3>
                <p className="text-sm text-gray-400">Desenvolvedor & Criador</p>
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
              Transformando <span className="text-cyan-400">código</span> em <span className="text-purple-400">experiências digitais</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Desenvolvimento moderno, soluções criativas e interfaces que conectam ideias ao mundo real.
            </p>
            <div className="flex space-x-4">
              <a href="#projetos" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-xl shadow-md font-medium transition">Ver Projetos</a>
              <a href="#contato" className="px-6 py-3 border border-gray-600 hover:border-cyan-500 rounded-xl font-medium transition">Entrar em Contato</a>
            </div>
          </div>

          <div className="relative w-full h-96 flex items-center justify-center rounded-xl bg-cyan-700/5 border border-cyan-500/40 p-4 overflow-hidden">
            <AnimatePresence>
              {showText && (
                <motion.pre initial={{ opacity: 0 }} animate={{ opacity: 0.35 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="text-white/50 font-mono text-sm w-full h-full overflow-hidden whitespace-pre-wrap blur-[1px]">
                  {typedText}<span className="animate-pulse">|</span>
                </motion.pre>
              )}
            </AnimatePresence>
            <motion.div className="absolute w-24 h-24 rounded-full bg-cyan-500 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.8)]" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
              <Code2 size={40} className="text-white" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* TECNOLOGIAS */}
      <section className="relative w-full bg-gradient-to-b from-gray-950 to-black text-white py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <h2 className="text-3xl lg:text-4xl font-bold">Tecnologias <span className="text-cyan-400">com as quais trabalho</span></h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-12">
            {[
              { name: "HTML", icon: "devicon-html5-plain colored" },
              { name: "CSS", icon: "devicon-css3-plain colored" },
              { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
              { name: "TailwindCSS", icon: "devicon-tailwindcss-original colored" },
              { name: "Flutter", icon: "devicon-flutter-plain colored" },
              { name: "ReactJS", icon: "devicon-react-original colored" },
              { name: "NodeJS", icon: "devicon-nodejs-plain colored" },
              { name: "JavaScript", icon: "devicon-javascript-plain colored" },
              { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
              { name: "MySQL", icon: "devicon-mysql-plain colored" },
              { name: "PHP", icon: "devicon-php-plain colored" },
              { name: "Dart", icon: "devicon-dart-plain colored" },
            ].map((tech, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className="flex flex-col items-center justify-center space-y-3 p-8 rounded-xl bg-gray-900/40 border border-gray-700/40 hover:border-cyan-500/60 shadow-md transition-all duration-300">
                <i className={`${tech.icon} text-6xl`}></i>
                <span className="text-sm font-medium text-gray-300">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* SERVIÇOS */}
<section className="py-20 px-6 bg-gray-950">
  <div className="max-w-7xl mx-auto text-center mb-12">
    <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
      Meus <span className="text-cyan-400">Serviços</span>
    </h2>
    <p className="text-gray-400 mt-3 text-lg">
      Soluções digitais sob medida para diferentes necessidades.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {[
      {
        icon: <UilDesktop className="text-cyan-400" size={36} />,
        title: "Landing Pages",
        desc: "Páginas modernas e otimizadas para conversão, ideais para campanhas e divulgação.",
      },
      {
        icon: <UilLaptop className="text-purple-400" size={36} />,
        title: "Sites Institucionais",
        desc: "Websites profissionais, responsivos e de fácil gerenciamento para empresas e profissionais.",
      },
      {
        icon: <UilServer className="text-emerald-400" size={36} />,
        title: "Sistemas Personalizados",
        desc: "Soluções personalizadas para automatizar processos e otimizar fluxos de trabalho.",
      },
{
  icon: <UilLayerGroup className="text-yellow-400" size={36} />,
  title: "APIs & Integrações",
  desc: "Desenvolvimento de APIs, automações e integrações entre diferentes plataformas.",
},
      {
        icon: <UilMobileAndroid className="text-pink-400" size={36} />,
        title: "Aplicativos Mobile",
        desc: "Apps multiplataforma com Flutter, para Android e iOS, rápidos e escaláveis.",
      },
      {
        icon: <UilRobot className="text-indigo-400" size={36} />,
        title: "Suporte & Manutenção",
        desc: "Acompanhamento técnico, otimizações de performance e atualizações contínuas.",
      },
    ].map((s, i) => (
      <motion.div
        key={i}
        whileHover={{ y: -8, boxShadow: "0 10px 25px rgba(34, 211, 238, 0.4)" }}
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



      {/* PROJETOS RECENTES */}
      <section id="projetos" className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">Projetos <span className="text-cyan-400">Recentes</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((p) => (
            <motion.div key={p.id} whileHover={{ scale: 1.05 }} className={`flex flex-col bg-gray-800 border-4 ${p.borderColor} rounded-2xl p-6 shadow-xl`}>
              <Image src={p.imageSrc} alt={p.title} width={300} height={180} className="rounded-lg mb-4 object-cover" />
              <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-gray-300 text-sm">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS */}
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
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.402 8.172L12 18.897l-7.336 3.867 1.402-8.172L.132 9.21l8.2-1.192z" /></svg>
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

      {/* ETAPAS */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">Etapas do <span className="text-cyan-400">Projeto</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {etapas.map((e, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="flex flex-col items-center bg-gray-800 rounded-2xl p-6 shadow-xl text-center">
              {e.icon}
              <h3 className="text-white font-semibold mt-4 mb-2">{e.title}</h3>
              <p className="text-gray-300 text-sm">{e.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SOBRE MIM */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image src="/images/minha-foto.png" alt="Minha foto" width={300} height={300} className="rounded-2xl shadow-lg border-4 border-cyan-500 object-cover" />
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">Quem sou eu</h2>
            <p className="text-gray-300 mb-4">Sou um desenvolvedor apaixonado por tecnologia e soluções criativas. Crio sites, sistemas e automações que transformam ideias em realidade digital.</p>
            <p className="text-gray-300">Meu foco é entregar projetos com alta qualidade, performance e design moderno, sempre atento aos detalhes e necessidades de cada cliente.</p>
          </div>
        </div>
      </section>

      {/* TABELA DE VALORES */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">Tabela de <span className="text-cyan-400">Valores</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center bg-gray-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-white font-semibold mb-2">Landing Pages</h3>
            <p className="text-cyan-400 font-semibold">R$ 150</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center bg-gray-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-white font-semibold mb-2">Site Institucional</h3>
            <p className="text-emerald-400 font-semibold">R$ 250</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center bg-gray-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-white font-semibold mb-2">Sistema Personalizado</h3>
            <p className="text-indigo-400 font-semibold">R$ 500</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center bg-gray-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-white font-semibold mb-2">Suporte Extra</h3>
            <p className="text-yellow-400 font-semibold">A combinar</p>
          </motion.div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 px-6 bg-gray-950 text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">Vamos conversar?</h2>
        <p className="text-gray-300 mb-6">Entre em contato e descubra como posso ajudar a transformar sua ideia em realidade.</p>
        <a href="https://wa.me/5519981752199" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-white font-semibold rounded-full hover:bg-cyan-600 transition">
          <FaWhatsapp size={20} /> Fale comigo
        </a>
      </section>
    </>
  );
}
