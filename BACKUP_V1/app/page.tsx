'use client';

import { motion, AnimatePresence } from "framer-motion";
import { Globe, LayoutDashboard, MonitorCog, Workflow, Cog, Gauge, LayoutGrid, Star, MessageCircle } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { FaWhatsapp, FaClipboardList, FaCode, FaSearch, FaBoxOpen, FaHeadset } from "react-icons/fa";


function lightenColor(hex: string, percent: number) {
  const num = parseInt(hex.replace("#",""),16);
  const r = Math.min(255, ((num >> 16) & 0xFF) + (255 - ((num >> 16) & 0xFF)) * percent);
  const g = Math.min(255, ((num >> 8) & 0xFF) + (255 - ((num >> 8) & 0xFF)) * percent);
  const b = Math.min(255, (num & 0xFF) + (255 - (num & 0xFF)) * percent);
  return `rgb(${Math.round(r)},${Math.round(g)},${Math.round(b)})`;
}

// ----------------- ICON WRAPPER -----------------
const IconWrapper = ({ children, hover }: { children: React.ReactNode; hover?: any }) => (
  <motion.div
    whileHover={hover || { scale: 1.1 }}
    transition={{ duration: 0.3 }}
    className="w-16 h-16 flex items-center justify-center"
  >
    {children}
  </motion.div>
);

// ----------------- SERVICES -----------------
const services = [
  { name: "Sites", icon: <IconWrapper hover={{ scale: 1.15 }}><Globe size={64} strokeWidth={1.5} className="text-cyan-400" /></IconWrapper> },
  { name: "Landing Pages", icon: <IconWrapper><LayoutDashboard size={64} strokeWidth={1.5} className="text-emerald-400" /></IconWrapper> },
  { name: "Sistemas Web e Desktop", icon: <IconWrapper hover={{ rotate: 5 }}><MonitorCog size={64} strokeWidth={1.5} className="text-indigo-400" /></IconWrapper> },
  { name: "Integrações com APIs", icon: <IconWrapper hover={{ scale: 1.2 }}><Workflow size={64} strokeWidth={1.5} className="text-yellow-400" /></IconWrapper> },
  { name: "Automatizações", icon: <IconWrapper hover={{ rotate:20 }}><Cog size={64} strokeWidth={1.5} className="text-orange-400" /></IconWrapper> },
  { name: "Otimização", icon: <IconWrapper hover={{ y:-6 }}><Gauge size={64} strokeWidth={1.5} className="text-lime-400" /></IconWrapper> },
  { name: "App's Mobile", icon: <IconWrapper hover={{ scale:1.15 }}><LayoutGrid size={64} strokeWidth={1.5} className="text-pink-400" /></IconWrapper> },
  { name: "Remasterização de Imagens", icon: <IconWrapper hover={{ scale: 1.15 }}><Globe size={64} strokeWidth={1.5} className="text-purple-400" /></IconWrapper> },
  { name: "Remasterização de Vídeos", icon: <IconWrapper hover={{ scale: 1.15 }}><LayoutDashboard size={64} strokeWidth={1.5} className="text-red-400" /></IconWrapper> },
];

// ----------------- PROJECTS -----------------
const projects = [
  { id: 1, title: 'FitZone - App Fitness', description: 'Aplicativo completo para fitness e bem-estar, com planos personalizados, monitoramento por smartwatch e integração com redes sociais.', imageSrc: '/images/fitzone.jpg', borderColor: 'border-cyan-500' },
  { id: 2, title: 'Bella Derme - Clínica Estética', description: 'Site institucional elegante e responsivo para clínica estética, com agendamento online e portfólio de tratamentos.', imageSrc: '/images/belladerme.jpg', borderColor: 'border-pink-400' },
  { id: 3, title: 'NerdWear - Moda Geek', description: 'Loja virtual de moda geek, com catálogo de produtos, filtros interativos e um visual moderno para fãs da cultura pop.', imageSrc: '/images/nerdwear.jpg', borderColor: 'border-yellow-400' },
];

// ----------------- VARIANTS CARROSSEL -----------------
const variants = {
  enter: (position: string) => {
    if (position === 'center') return { opacity:0, y:100 };
    if (position === 'left') return { opacity:0, x:-300 };
    if (position === 'right') return { opacity:0, x:300 };
    return { opacity:0 };
  },
  center: { opacity:1, x:0, y:0, scale:1, zIndex:3 },
  left: { opacity:0.4, x:-220, scale:0.85, zIndex:2 },
  right: { opacity:0.4, x:220, scale:0.85, zIndex:2 },
  out: { opacity:0, scale:0.5, zIndex:1 },
};

// ----------------- TESTIMONIALS -----------------
const testimonials = [
  { id:1, name:"Alice Costa", text:"Excelente profissional! Entregou o projeto antes do prazo e superou minhas expectativas.", photo:"/images/mulher_01.jpg" },
  { id:2, name:"Bruno Martins", text:"Trabalho impecável, comunicação clara e suporte contínuo. Recomendo demais!", photo:"/images/homem_01.jpg" },
  { id:3, name:"Carla Souza", text:"Projetos com design moderno e performance incrível. Fiquei muito satisfeita com o resultado.", photo:"/images/mulher_02.jpg" },
  { id:4, name:"Daniel Lima", text:"Profissional dedicado e competente. Transformou minhas ideias em realidade digital de forma perfeita.", photo:"/images/homem_02.jpg" },
  { id:5, name:"Elisa Pereira", text:"Atendimento excepcional e entrega de alta qualidade. Super recomendo!", photo:"/images/mulher_03.jpg" },
];

// ----------------- ETAPAS -----------------
const etapas = [
  { icon: <FaClipboardList className="text-purple-500 text-3xl" />, title: "Briefing", description: "Coleta de informações e definição do escopo do projeto." },
  { icon: <FaCode className="text-cyan-500 text-3xl" />, title: "Desenvolvimento", description: "Implementação do projeto com base nas especificações definidas." },
  { icon: <FaSearch className="text-orange-500 text-3xl" />, title: "Revisão", description: "Testes e ajustes para garantir qualidade e funcionalidade." },
  { icon: <FaBoxOpen className="text-amber-500 text-3xl" />, title: "Entrega", description: "Entrega do projeto finalizado ao cliente com documentação necessária." },
  { icon: <FaHeadset className="text-pink-500 text-3xl" />, title: "Suporte pós-entrega", description: "Assistência contínua e resolução de possíveis ajustes após a entrega." },
];

// ----------------- SEPARADOR PADRÃO -----------------
const SectionSeparator = () => (
  <div className="w-full h-16 md:h-24 bg-gray-950" />
);

// ----------------- HOME -----------------
export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop:true,
    mode:"free-snap",
    slides:{ perView:1, spacing:16 },
    breakpoints:{
      "(min-width:768px)": { slides:{ perView:2, spacing:24 } },
      "(min-width:1024px)": { slides:{ perView:3, spacing:32 } },
    },
  });

  useEffect(() => {
    const interval = setInterval(() => instanceRef.current?.next(), 4000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  const prevProject = () => setCurrentIndex(prev => prev===0?projects.length-1:prev-1);
  const nextProject = () => setCurrentIndex(prev => prev===projects.length-1?0:prev+1);
  const getPosition = (index:number) => {
    const offset = index-currentIndex;
    if(offset===0) return 'center';
    if(offset===-1 || (offset===projects.length-1 && currentIndex===0)) return 'left';
    if(offset===1 || (offset===-(projects.length-1) && currentIndex===projects.length-1)) return 'right';
    return 'out';
  };

  return (
    <main className="bg-gray-950 text-white min-h-screen">

      {/* HERO */}
      <motion.section className="flex flex-col items-center justify-center text-center py-32 px-6"
        initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        transition={{duration:0.8}}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Transforme sua ideia em <span className="text-cyan-400">realidade digital</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
          Desenvolvimento sob medida para Sites, Sistemas e Automação que elevam seu negócio ao próximo nível.
        </p>
      </motion.section>

      <SectionSeparator />

      {/* CHECKLIST */}
      <motion.section className="py-20 px-6 max-w-6xl mx-auto"
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        transition={{duration:0.8}}
      >
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500">
            O que posso desenvolver para transformar seu negócio
          </h2>
          <span className="block w-20 h-1 bg-cyan-400 rounded-full mt-2 mb-6"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service,index)=>(
            <motion.div key={index} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,delay:index*0.1}} className="flex flex-col items-center text-center bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-cyan-900/40">
              {service.icon}
              <h3 className="mt-6 text-xl font-semibold">{service.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <SectionSeparator />

      {/* CARROSSEL FRAMER-MOTION */}
      <motion.section className="py-20 px-6 bg-gray-900 relative"
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        transition={{duration:0.8}}
      >
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500">
            Projetos Recentes
          </h2>
          <span className="block w-20 h-1 bg-cyan-400 rounded-full mt-2 mb-8"></span>
        </div>
        <div className="relative w-full flex items-center justify-center h-[400px]">
          <button onClick={prevProject} className="absolute left-0 z-10 p-3 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full transition-opacity" style={{top:'50%', transform:'translateY(-50%)'}}>◀</button>
          {projects.map((project,index)=>{
            const position = getPosition(index);
            if(position==='out') return null;
            return (
              <motion.div key={project.id} custom={position} variants={variants} initial="enter" animate={position} exit="enter" transition={{duration:0.6,ease:"easeInOut"}} className={`absolute rounded-2xl bg-gray-800 border-4 ${project.borderColor} shadow-xl p-6 flex flex-col items-center text-center max-w-sm`} style={{pointerEvents:position==='center'?'auto':'none'}}>
                <div className="flex justify-center w-full mb-4">
                  <Image src={project.imageSrc} alt={project.title} width={180} height={180} className="rounded-lg border-2 border-white object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </motion.div>
            );
          })}
          <button onClick={nextProject} className="absolute right-0 z-10 p-3 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full transition-opacity" style={{top:'50%', transform:'translateY(-50%)'}}>▶</button>
        </div>
      </motion.section>

      <SectionSeparator />

      {/* DEPOIMENTOS KEENSLIDER */}
      <motion.section
        className="py-20 px-6 bg-gray-900 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500">
            O que dizem sobre meu trabalho
          </h2>
          <span className="block w-20 h-1 bg-cyan-400 rounded-full mt-2 mb-8"></span>
        </div>

        <div ref={sliderRef} className="keen-slider max-w-6xl mx-auto overflow-x-hidden">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="keen-slider__slide bg-gray-800 rounded-xl p-6 shadow-md min-h-[220px] min-w-[300px] flex flex-col justify-between flex-shrink-0"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={t.photo}
                  alt={t.name}
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-cyan-500 object-cover"
                />
                <div className="flex flex-col flex-1">
                  <span className="font-semibold text-white">{t.name}</span>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="#facc15" stroke="#facc15" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed text-justify">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      <SectionSeparator />
            <SectionSeparator />

      {/* ROADMAP PREMIUM - ETAPAS DO PROJETO COM CARD ANIMADO */}
      <motion.section
        className="py-20 px-6 bg-gray-900 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500">
            Etapas do Projeto
          </h2>
          <span className="block w-20 h-1 bg-cyan-400 rounded-full mt-2 mb-6"></span>
        </div>
        <Roadmap />
      </motion.section>

      {/* SOBRE MIM */}
      <motion.section className="py-20 px-6 bg-gray-950"
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        transition={{duration:0.8}}
      >
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500">
            Quem sou eu
          </h2>
          <span className="block w-20 h-1 bg-cyan-400 rounded-full mt-2 mb-6"></span>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-1 items-center">
          <div className="flex justify-center">
            <Image src="/images/minha-foto.png" alt="Minha foto" width={300} height={300} className="rounded-2xl shadow-lg border-4 border-cyan-500 object-cover" />
          </div>
          <div>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              Sou um desenvolvedor apaixonado por tecnologia e soluções criativas. Tenho experiência na criação de sites, sistemas web,
              aplicativos e automações que ajudam empresas e pessoas a transformarem suas ideias em realidade digital.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Meu foco é entregar projetos com alta qualidade, performance e design moderno, sempre com atenção aos detalhes e às
              necessidades de cada cliente.
            </p>
          </div>
        </div>
      </motion.section>

      <SectionSeparator />

      {/* TABELA DE VALORES */}
      <motion.section
        className="py-20 px-6 bg-gray-900"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500">
            Tabela de Valores
          </h2>
          <span className="block w-20 h-1 bg-cyan-400 rounded-full mt-2 mb-6"></span>
          <p className="text-gray-400 text-center max-w-2xl">
            O passo a passo para tirar seu projeto do papel de forma clara, rápida e organizada.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Passo 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center text-center bg-gray-800 border border-cyan-500 rounded-2xl p-6 shadow-lg"
          >
            <Globe size={48} strokeWidth={1.5} className="text-cyan-400 mb-4" />
            <h3 className="text-lg font-bold mb-2">Landing Pages</h3>
            <p className="text-gray-300 text-sm">A partir de <span className="text-cyan-400 font-semibold">R$ 150</span></p>
          </motion.div>

          {/* Passo 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center text-center bg-gray-800 border border-cyan-500 rounded-2xl p-6 shadow-lg"
          >
            <LayoutDashboard size={48} strokeWidth={1.5} className="text-emerald-400 mb-4" />
            <h3 className="text-lg font-bold mb-2">Site Institucional</h3>
            <p className="text-gray-300 text-sm">A partir de <span className="text-emerald-400 font-semibold">R$ 250</span></p>
          </motion.div>

          {/* Passo 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center text-center bg-gray-800 border border-cyan-500 rounded-2xl p-6 shadow-lg"
          >
            <MonitorCog size={48} strokeWidth={1.5} className="text-indigo-400 mb-4" />
            <h3 className="text-lg font-bold mb-2">Sistema Personalizado</h3>
            <p className="text-gray-300 text-sm">A partir de <span className="text-indigo-400 font-semibold">R$ 500</span></p>
          </motion.div>

          {/* Passo 4 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center text-center bg-gray-800 border border-cyan-500 rounded-2xl p-6 shadow-lg"
          >
            <MessageCircle size={48} strokeWidth={1.5} className="text-yellow-400 mb-4" />
            <h3 className="text-lg font-bold mb-2">Suporte Extra</h3>
            <p className="text-gray-300 text-sm">Valor <span className="text-yellow-400 font-semibold">a combinar</span></p>
          </motion.div>
        </div>
      </motion.section>

      <SectionSeparator />

      {/* CONTATO */}
      <motion.section className="py-20 px-6 max-w-4xl mx-auto text-center"
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        transition={{duration:0.8}}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500">
          Vamos conversar?
        </h2>
        <span className="block w-20 h-1 bg-cyan-400 rounded-full mt-2 mb-6 mx-auto"></span>
        <p className="text-gray-400 mb-8">Entre em contato e descubra como posso ajudar a transformar sua ideia em realidade.</p>
        <a href="https://wa.me/5519981752199" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-white font-semibold rounded-full hover:bg-cyan-600 transition">
          <FaWhatsapp size={20} /> Fale comigo
        </a>
      </motion.section>
    </main>
  );
}

// ----------------- ROADMAP COMPONENT -----------------
function Roadmap() {
  const roadmapRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (roadmapRef.current && !roadmapRef.current.contains(e.target as Node)) {
      setActiveStep(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const colorMap: { [key: string]: string } = {
    purple: "#a855f7",
    cyan: "#06b6d4",
    orange: "#f97316",
    amber: "#f59e0b",
    pink: "#ec4899",
    white: "#ffffff"
  };

  const etapaColors = etapas.map((etapa) => {
    const etapaColor = etapa.icon.props.className.match(/purple|cyan|orange|amber|pink/)?.[0] || "white";
    return colorMap[etapaColor];
  });

  const stops = etapaColors.map((c, i) => `${c} ${(i / (etapaColors.length - 1)) * 100}%`);
  const gradient = `linear-gradient(to right, ${stops.join(", ")})`;

  return (
    <div ref={roadmapRef} className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">

      {/* LINHA CONTÍNUA GRADIENTE */}
      <div
        className="hidden md:block absolute top-1/2 h-1 rounded-full z-0"
        style={{
          left: "calc(2.5rem)",
          right: "calc(2.5rem)",
          background: gradient,
        }}
      />

      {/* ETAPAS */}
      {etapas.map((etapa, index) => {
        const etapaColor = etapa.icon.props.className.match(/purple|cyan|orange|amber|pink/)?.[0] || "white";
        const etapaHex = colorMap[etapaColor];

        return (
          <div key={index} className="flex flex-col items-center text-center md:flex-1 relative z-10">

            {/* Círculo clicável */}
            <motion.div
              className={`w-20 h-20 flex items-center justify-center rounded-full bg-gray-800 shadow-lg border-4 cursor-pointer`}
              style={{ borderColor: etapaHex }}
              whileHover={{ scale: 1.15 }}
              onClick={() => setActiveStep(index === activeStep ? null : index)}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              {etapa.icon}
            </motion.div>

            <p className="mt-4 font-semibold" style={{ color: etapaHex }}>{etapa.title}</p>

            {/* Linha vertical para mobile */}
            {index < etapas.length - 1 && (
              <div
                className="md:hidden w-1 h-12 rounded-full mt-4 relative"
                style={{
                  background: `linear-gradient(to bottom, ${etapaHex}, ${colorMap[etapas[index + 1].icon.props.className.match(/purple|cyan|orange|amber|pink/)?.[0] || "white"]})`
                }}
              />
            )}

            {/* CARD ANIMADO */}
{/* CARD ANIMADO */}
<AnimatePresence>
  {hoveredStep === index && (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 10, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="absolute top-full mt-6 left-1/2 transform -translate-x-1/2 w-72 bg-gray-800 p-6 rounded-xl shadow-xl flex flex-col items-center text-center justify-center z-20"
    >
      {/* Conteúdo centralizado */}
      <div className="flex flex-col items-center justify-center">
        <h3
          className="font-bold text-lg mb-2 text-center"
          style={{ color: lightenColor(etapaHex, 0.3) }}
        >
          {etapa.title}
        </h3>
        <p className="text-gray-300 text-sm text-center">{etapa.description}</p>
      </div>
    </motion.div>
  )}
</AnimatePresence>


          </div>
        );
      })}
    </div>
  );
}
