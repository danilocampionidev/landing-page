export interface Project {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  borderColor: string;
  technologies: string[]; // adiciona como obrigatório
}

export const projects: Project[] = [
  {
    id: 1,
    title: "FitZone - App Fitness",
    description: "Aplicativo completo para fitness e bem-estar, com planos personalizados, monitoramento por smartwatch e integração com redes sociais.",
    imageSrc: "/images/fitzone.jpg",
    borderColor: "border-cyan-500",
    technologies: ["React Native", "TypeScript", "Expo", "TailwindCSS"],
  },
  {
    id: 2,
    title: "Bella Derme - Clínica Estética",
    description: "Site institucional elegante e responsivo para clínica estética, com agendamento online e portfólio de tratamentos.",
    imageSrc: "/images/belladerme.jpg",
    borderColor: "border-pink-400",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "React"],
  },
  {
    id: 3,
    title: "NerdWear - Moda Geek",
    description: "Loja virtual de moda geek, com catálogo de produtos, filtros interativos e um visual moderno para fãs da cultura pop.",
    imageSrc: "/images/nerdwear.jpg",
    borderColor: "border-yellow-400",
    technologies: ["Next.js", "TypeScript", "React", "TailwindCSS", "Shopify"],
  },
];
