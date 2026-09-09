import type { Translations } from "./es";

export const en: Translations = {
  nav: {
    home: "Home",
    about: "About",
    stack: "Technologies",
    n8n: "n8n",
    experience: "Experience",
    projects: "Projects",
    certifications: "Certifications",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, I'm",
    name: "Yeron Pool Cuero Montaño",
    titles: [
      "Full Stack Developer",
      "Cybersecurity Enthusiast",
      "Linux Administrator",
      "n8n Automation Specialist",
      "AI & IoT Explorer",
    ],
    description:
      "Information and Communication Technologies Engineer with a passion for creating innovative solutions that transform how we interact with technology.",
    cta: {
      projects: "View Projects",
      cv: "Download CV",
      certs: "Certifications",
      contact: "Contact Me",
    },
  },
  about: {
    title: "About Me",
    subtitle: "Engineer passionate about technological innovation",
    description:
      "I am a professional committed to excellence in software development, Linux system administration, and cybersecurity solutions implementation. My experience spans from full stack web development to enterprise automation with n8n, including AI integration and IoT technologies.",
    description2:
      "I firmly believe technology should be a bridge to solutions that positively impact society. Every project I undertake reflects my dedication to quality, security, and innovation.",
    highlights: [
      {
        icon: "code",
        title: "Web Development",
        description: "Modern applications with the latest market technologies",
      },
      {
        icon: "server",
        title: "Linux & DevOps",
        description: "Administration and deployment of high-performance servers",
      },
      {
        icon: "shield",
        title: "Cybersecurity",
        description: "System protection following OWASP and ISO27001 standards",
      },
      {
        icon: "brain",
        title: "AI & Automation",
        description: "Intelligent AI integration and automated workflows",
      },
      {
        icon: "network",
        title: "IoT",
        description: "IoT solution development",
      },
      {
        icon: "workflow",
        title: "n8n Automation",
        description: "Complex and scalable enterprise workflows",
      },
    ],
  },
  techStack: {
    title: "Tech Stack",
    subtitle: "Tools and technologies I master",
    categories: {
      frontend: {
        title: "Frontend",
        description: "Modern and responsive interfaces",
      },
      backend: {
        title: "Backend",
        description: "Robust APIs and scalable services",
      },
      database: {
        title: "Databases",
        description: "Efficient data management",
      },
      devops: {
        title: "DevOps",
        description: "Infrastructure and continuous deployment",
      },
      cybersecurity: {
        title: "Cybersecurity",
        description: "Enterprise-level security",
      },
      ai: {
        title: "Artificial Intelligence",
        description: "Intelligent automation and ML",
      },
    },
  },
  n8n: {
    title: "n8n Specialty",
    subtitle: "Next-generation enterprise automation",
    description:
      "Design and implementation of complex automation workflows using n8n, integrating enterprise services, REST APIs, webhooks, AI agents, and RAG systems to create intelligent and scalable automation ecosystems.",
    capabilities: [
      {
        title: "Event-Driven Workflows",
        description: "Designing flows that react to real-time events to automate critical business processes.",
      },
      {
        title: "REST API Integration",
        description: "Seamless connection with external services via REST APIs for bidirectional data synchronization.",
      },
      {
        title: "Webhooks & Events",
        description: "Implementing webhooks to receive and process third-party events in real time.",
      },
      {
        title: "ETL Automation",
        description: "Automated Extraction, Transformation, and Loading processes across multiple platforms.",
      },
      {
        title: "AI Agents",
        description: "Integrating language models and intelligent agents for advanced cognitive automation.",
      },
      {
        title: "RAG Systems",
        description: "Implementing Retrieval-Augmented Generation for enterprise knowledge-based responses.",
      },
      {
        title: "Service Orchestration",
        description: "Coordinating multiple microservices in complex and distributed workflows.",
      },
      {
        title: "WhatsApp Integration",
        description: "Automating business communication through intelligent WhatsApp bots.",
      },
      {
        title: "CRM Automation",
        description: "Complete CRM process automation for customer relationship management.",
      },
      {
        title: "Data Synchronization",
        description: "Real-time synchronization between platforms like CRM, ERP, email, and databases.",
      },
    ],
    workflow: {
      trigger: "Trigger",
      webhook: "Webhook",
      aiAgent: "AI Agent",
      database: "Database",
      notification: "Notification",
    },
  },
  experience: {
    title: "Professional Experience",
    subtitle: "My journey in the tech world",
    items: [
      {
        role: "Computing Trainer",
        company: "Educational Institution",
        period: "2022 - Present",
        description:
          "Training in technological tools, office software, basic programming, and digital security. Designing educational curricula oriented towards market technical competencies.",
        skills: ["Teaching", "Office", "Programming", "Digital Security"],
      },
      {
        role: "Freelance Web Developer",
        company: "Independent Projects",
        period: "2021 - Present",
        description:
          "Full stack web application development for diverse clients. Implementing solutions ranging from landing pages to complete enterprise management systems.",
        skills: ["Full Stack", "React", "Node.js", "UI/UX Design"],
      },
      {
        role: "Systems Intern",
        company: "Tech Organization",
        period: "2020 - 2021",
        description:
          "Technical support, Linux server administration, network infrastructure maintenance, and collaboration on corporate web development projects.",
        skills: ["Linux", "Networking", "Tech Support", "Web Development"],
      },
      {
        role: "Teaching Assistant",
        company: "University",
        period: "2019 - 2020",
        description:
          "Teaching support in programming and IT subjects. Mentoring students in software development projects.",
        skills: ["Mentoring", "Programming", "Algorithms", "Databases"],
      },
      {
        role: "Content Creator and Creative Designer",
        company: "Councilman José Maffares Guagua's Office (Municipality of Esmeraldas)",
        period: "JUN 2024 - JAN 2026",
        description:
          "Content creation and creative design for Councilman José Maffares Guagua's office at the Municipality of Esmeraldas.",
        skills: ["Content Creation", "Creative Design"],
      },
    ],
  },
  projects: {
    title: "Featured Projects",
    subtitle: "Solutions I've built",
    featured: {
      tag: "Featured Project",
      title: "Streaming Platform",
      subtitle: "Netflix / Amazon Prime Style",
      description:
        "Complete multimedia streaming platform with catalog management, adaptive playback, subscription system, user profiles, and smart recommendations.",
      tech: [
        "Ubuntu Server",
        "Yii Framework",
        "MySQL",
        "Node.js APIs",
        "Angular",
        "Ionic",
      ],
      features: [
        "Content catalog with advanced search",
        "Adaptive video playback (HLS/DASH)",
        "Subscription and payment system",
        "Multiple user profiles",
        "Preference-based recommendations",
        "Complete admin panel",
        "Mobile app with Ionic",
        "Global CDN distribution",
      ],
    },
    items: [
      {
        title: "Dental Clinic Management System",
        description:
          "Comprehensive system for dental clinic management with appointment scheduling, electronic medical records, billing, and analytical reports.",
        tech: ["Web", "Database", "Reports", "Online Appointments"],
        tag: "Healthcare",
      },
      {
        title: "Academic Management System",
        description:
          "Educational platform for academic institution management with grade control, attendance, enrollment, and parent communication.",
        tech: ["Web", "Education", "Analytics", "Communication"],
        tag: "EdTech",
      },
    ],
  },
  certifications: {
    title: "Certifications",
    subtitle: "International professional accreditations",
    items: [
      {
        title: "Cisco Networking",
        issuer: "Cisco Systems",
        description: "Certification in enterprise networking and connectivity.",
        color: "#049fd9",
      },
      {
        title: "Linux Administration",
        issuer: "Linux Foundation",
        description: "Professional Linux system administration.",
        color: "#fcc624",
      },
      {
        title: "ISO 27001",
        issuer: "ISO International",
        description: "Information security management.",
        color: "#0067b9",
      },
      {
        title: "ASP.NET Core",
        issuer: "Microsoft",
        description: "Web development with .NET Core framework.",
        color: "#512bd4",
      },
      {
        title: "Full Stack Web Dev",
        issuer: "International",
        description: "Complete web development frontend and backend.",
        color: "#0ea5e9",
      },
      {
        title: "n8n Automation",
        issuer: "n8n.io",
        description: "Enterprise automation with n8n.",
        color: "#ea4b5b",
      },
    ],
  },
  chatbot: {
    title: "AI Assistant",
    placeholder: "Type your question...",
    welcome:
      "Hello! I'm Yeron's virtual assistant. I can tell you about his experience, projects, technologies, and more.",
    suggestions: [
      "Who is Yeron?",
      "What technologies does he know?",
      "Tell me about his projects",
      "How can I contact him?",
    ],
  },
  whatsapp: {
    tooltip: "Chat on WhatsApp",
    qrTitle: "Scan the QR code",
  },
  footer: {
    status: "Available for Freelance projects",
    cta: "Let's Work Together",
    rights: "All rights reserved.",
    builtWith: "Built with",
  },
};