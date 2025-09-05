// PROJECTS.TS

export interface Project {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  borderColor: string;
  technologies: string[];
  year: number;
  features: string[];
  links?: {
    demo?: string;
    repo?: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "FitZone - App Fitness",
    description:
      "Aplicativo completo para fitness e bem-estar, com planos personalizados, monitoramento por smartwatch e integração com redes sociais.",
    imageSrc: "/images/fitzone.jpg",
    borderColor: "border-cyan-500",
    technologies: ["React Native", "TypeScript", "Expo", "TailwindCSS"],
    year: 2025,
    features: [
      "Planos de treino personalizados",
      "Monitoramento por smartwatch",
      "Integração com redes sociais",
      "Relatórios de desempenho",
      "Interface intuitiva e responsiva",
    ],
    links: {
      demo: "https://fitzone-demo.com",
      repo: "https://github.com/seuusuario/fitzone",
    },
  },
  {
    id: 2,
    title: "Bella Derme - Clínica Estética",
    description:
      "Site institucional elegante e responsivo para clínica estética, com agendamento online e portfólio de tratamentos.",
    imageSrc: "/images/belladerme.jpg",
    borderColor: "border-pink-400",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "React"],
    year: 2024,
    features: [
      "Agendamento online de consultas",
      "Design elegante e responsivo",
      "Portfólio de tratamentos",
      "SEO otimizado",
    ],
    links: {
      demo: "https://belladerme-demo.com",
    },
  },
  {
    id: 3,
    title: "NerdWear - Moda Geek",
    description:
      "Loja virtual de moda geek, com catálogo de produtos, filtros interativos e um visual moderno para fãs da cultura pop.",
    imageSrc: "/images/nerdwear.jpg",
    borderColor: "border-yellow-400",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "TailwindCSS",
      "Shopify",
    ],
    year: 2023,
    features: [
      "Catálogo de produtos com filtros avançados",
      "Carrinho e checkout integrados",
      "Layout moderno para fãs de cultura pop",
      "Integração com Shopify",
    ],
    links: {
      demo: "https://nerdwear-demo.com",
      repo: "https://github.com/seuusuario/nerdwear",
    },
  },
];
