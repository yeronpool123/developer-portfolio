export const techStackData = {
  frontend: {
    icon: "Monitor",
    items: [
      { name: "HTML5", color: "#e34f26" },
      { name: "CSS3", color: "#1572b6" },
      { name: "JavaScript", color: "#f7df1e" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "React.js (JSX)", color: "#61dafb" },
      { name: "Vue.js", color: "#4fc08d" },
      { name: "Angular", color: "#dd0031" },
      { name: "Tailwind CSS", color: "#06b6d4" },
    ],
  },
  backend: {
    icon: "Server",
    items: [
      { name: "Node.js", color: "#339933" },
      { name: "Express.js", color: "#000000" },
      { name: "APIs RESTful", color: "#0ea5e9" },
      { name: "PHP", color: "#777bb4" },
      { name: "Python", color: "#3776ab" },
      { name: "Django", color: "#092e20" },
      { name: "Flask", color: "#111111" },
      { name: "ASP.NET Core", color: "#512bd4" },
      { name: ".NET Framework", color: "#512bd4" },
      { name: "Java", color: "#ed8b00" },
      { name: "C#", color: "#239120" },
      { name: "C++", color: "#00599c" },
    ],
  },
  database: {
    icon: "Database",
    items: [
      { name: "MySQL", color: "#4479a1" },
      { name: "PostgreSQL", color: "#4169e1" },
    ],
  },
  devops: {
    icon: "Container",
    items: [
      { name: "Linux", color: "#fcc624" },
      { name: "Ubuntu Server", color: "#e95420" },
      { name: "LAMP", color: "#4479a1" },
      { name: "Git", color: "#f05032" },
      { name: "GitHub", color: "#181717" },
      { name: "Nginx", color: "#009639" },
      { name: "Apache", color: "#d22128" },
      { name: "Google Cloud", color: "#4285f4" },
      { name: "MCP", color: "#6366f1" },
      { name: "Visual Studio Community", color: "#5c2d91" },
    ],
  },
  cybersecurity: {
    icon: "Shield",
    items: [
      { name: "OWASP", color: "#000000" },
      { name: "ISO 27001", color: "#0067b9" },
      { name: "Hardening Linux", color: "#fcc624" },
      { name: "Web Security", color: "#0ea5e9" },
    ],
  },
  ai: {
    icon: "Brain",
    items: [
      { name: "Machine Learning", color: "#ff6f00" },
      { name: "LLMs", color: "#8b5cf6" },
      { name: "AI APIs", color: "#06b6d4" },
      { name: "Smart Automation", color: "#10b981" },
      { name: "n8n", color: "#ea4b71" },
      { name: "Análisis de Datos", color: "#f59e0b" },
      { name: "Unity", color: "#222222" },
      { name: "Godot", color: "#478cbf" },
      { name: "Producción Audiovisual", color: "#ec4899" },
    ],
  },
} as const;

export type TechCategory = keyof typeof techStackData;

export type ProjectGallery = {
  slug: string;
  screenshotDir: string;
  screenshots: string[];
};

export const projectCatalog: Array<
  ProjectGallery & {
    title: string;
    description: string;
    tech: string[];
    tag: string;
  }
> = [
  {
    slug: "globalfiber",
    screenshotDir: "/projects/globalfiber/",
    screenshots: [],
    title: "Aplicación web corporativa para GLOBALFIBER S.A.S",
    description:
      "Aplicación web completa para un servicio de Internet corporativo con alcance internacional. La solución centraliza la presentación de servicios y la operación digital de la empresa.",
    tech: ["Aplicación web", "Full Stack", "Servicios corporativos"],
    tag: "Proyecto profesional",
  },
  {
    slug: "pos-superfact",
    screenshotDir: "/projects/pos-superfact/",
    screenshots: [],
    title: 'Sistema POS para SuperFact',
    description:
      "Sistema de punto de venta orientado a registrar y administrar operaciones comerciales de SuperFact, con una interfaz enfocada en el flujo de atención y control de ventas.",
    tech: ["POS", "Gestión comercial", "Sistema web"],
    tag: "Sistemas empresariales",
  },
  {
    slug: "sistemas-facturacion",
    screenshotDir: "/projects/sistemas-facturacion/",
    screenshots: [],
    title: "Sistemas de facturación",
    description:
      "Conjunto de soluciones para apoyar la emisión y gestión de facturas, organizando la información comercial y facilitando el seguimiento de las operaciones.",
    tech: ["Facturación", "Gestión de datos", "Aplicación web"],
    tag: "Sistemas empresariales",
  },
  {
    slug: "citas-medicas",
    screenshotDir: "/projects/citas-medicas/",
    screenshots: [],
    title: "Sistema de automatización de citas médicas",
    description:
      "Sistema orientado a automatizar la coordinación de citas médicas y reducir tareas manuales en la organización de la atención.",
    tech: ["Automatización", "Citas médicas", "Gestión de datos"],
    tag: "Automatización",
  },
  {
    slug: "videovigilancia",
    screenshotDir: "/projects/videovigilancia/",
    screenshots: [],
    title: "Sistema de videovigilancia con detección de movimiento",
    description:
      "Sistema de videovigilancia que utiliza cámaras IP y USB, con Node.js como servidor y detección de movimientos para supervisar fuentes de video.",
    tech: ["Node.js", "Cámaras IP", "Cámaras USB", "Detección de movimiento"],
    tag: "Infraestructura",
  },
  {
    slug: "asistente-voz",
    screenshotDir: "/projects/asistente-voz/",
    screenshots: [],
    title: "Asistente de voz con Python",
    description:
      "Asistente de voz desarrollado con Python para automatizar tareas mediante interacción hablada y flujos de ejecución programados.",
    tech: ["Python", "Automatización", "Asistente de voz"],
    tag: "IA y automatización",
  },
  {
    slug: "gestion-hospitalaria",
    screenshotDir: "/projects/gestion-hospitalaria/",
    screenshots: [],
    title: "Sistema de gestión hospitalaria",
    description:
      "Sistema desarrollado con C# y Visual Studio Community, respaldado por una base de datos en SQL Server Management Studio. Centraliza la administración de la información hospitalaria mediante operaciones CRUD, consultas y persistencia sobre un modelo relacional con integridad de datos.",
    tech: ["C#", "Visual Studio Community", "SQL Server", "CRUD", "Modelo relacional"],
    tag: "Sistemas de gestión",
  },
  {
    slug: "streaming",
    screenshotDir: "/projects/streaming/",
    screenshots: [],
    title: "Sistema para visualizar contenido de streaming",
    description:
      "Plataforma web para visualizar contenido de streaming, con base de datos MySQL y un servidor Ubuntu Server como parte de su infraestructura.",
    tech: ["MySQL", "Sitio web", "Ubuntu Server"],
    tag: "Infraestructura y web",
  },
  {
    slug: "practicas-360",
    screenshotDir: "/projects/practicas-360/",
    screenshots: [],
    title: "Prácticas 360°",
    description:
      "Sistema para el seguimiento de prácticas preprofesionales en la Universidad Técnica Luis Vargas Torres de Esmeraldas, organizado para centralizar el control de este proceso académico.",
    tech: ["Seguimiento académico", "Aplicación web", "Gestión de procesos"],
    tag: "Proyecto académico",
  },
  {
    slug: "clinica-dental",
    screenshotDir: "/projects/clinica-dental/",
    screenshots: [],
    title: "Aplicación web para citas en Clínica Dental Tatiana Maldonado",
    description:
      "Proyecto de tesis para desarrollar una aplicación web de gestión de citas en la Clínica Dental Tatiana Maldonado de Esmeraldas.",
    tech: ["Aplicación web", "Gestión de citas", "Proyecto de tesis"],
    tag: "Proyecto académico",
  },
  {
    slug: "voto-electronico",
    screenshotDir: "/projects/voto-electronico/",
    screenshots: [],
    title: "Sistema de gestión de voto electrónico",
    description:
      "Sistema de voto electrónico organizado en cuatro capas: DAL, BLL, WIN y WEB, con separación de responsabilidades entre acceso a datos, lógica de negocio y sus interfaces.",
    tech: ["C#", "DAL", "BLL", "WIN", "WEB"],
    tag: "Arquitectura de software",
  },
  {
    slug: "zorro-trivia",
    screenshotDir: "/projects/zorro-trivia/",
    screenshots: [],
    title: 'Juego de azar "Zorro Trivia"',
    description:
      "Proyecto de videojuego centrado en una experiencia de trivia con mecánicas de azar y participación interactiva.",
    tech: ["Videojuegos", "Trivia", "Interacción"],
    tag: "Videojuegos",
  },
  {
    slug: "auditoria-informatica",
    screenshotDir: "/projects/auditoria-informatica/",
    screenshots: [],
    title: "Auditoría de seguridad informática en CNT",
    description:
      "Informe de auditoría de seguridad informática en la empresa CNT con Ethical Hacking utilizando el modelo de referencia OSSTMM. Instructor: Ing. José Argandoña, MSC.",
    tech: ["Auditoría informática", "Ethical Hacking", "OSSTMM"],
    tag: "Ciberseguridad",
  },
];