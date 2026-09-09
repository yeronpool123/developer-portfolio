<div align="center">

# 🚀 Yeron Pool Cuero Montaño — Developer Portfolio

<p align="center">
  <b>Ingeniero en Tecnologías de la Información y Comunicaciones</b><br>
  Full-Stack Developer • AI Integration • Automation (n8n) • Software Architecture
</p>

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<br />

[🌐 Live Demo](#) • [📖 Documentation](#-arquitectura) • [🚀 Deployment](#-despliegue)

</div>

---

## 📌 Sobre el Proyecto

Portafolio web interactivo de alto rendimiento desarrollado con **Next.js App Router**, **TypeScript** y **Tailwind CSS**. Integra un **Chatbot de Inteligencia Artificial**, soporte multilingüe dinámico (Español, Inglés, Portugués), componentes de UI modernos basados en **shadcn/ui** y capacidades de automatización con **n8n**.

### ✨ Características Principales
* 🤖 **Asistente de IA Integrado:** Chatbot contextual configurado mediante API Routes dinámicas.
* 🌐 **Soporte Multilingüe:** Sistema de internacionalización (i18n) en ES / EN / PT con cambio de idioma instantáneo.
* 🎨 **UI/UX Avanzada:** Cursor personalizado, fondo de partículas dinámicas, animaciones Reveal-on-Scroll y Glassmorphism.
* ⚡ **Arquitectura Modular:** Separación limpia de mini-servicios, componentes UI reutilizables y capa de datos con Prisma ORM.

---

## 🛠️ Tech Stack

### Frontend & UI
* **Framework:** Next.js 15 (App Router)
* **Lenguaje:** TypeScript
* **Estilos:** Tailwind CSS, PostCSS, Framer Motion
* **Componentes UI:** shadcn/ui, Radix UI, Lucide Icons

### Backend & Base de Datos
* **API:** Next.js Serverless API Routes
* **ORM:** Prisma ORM
* **Base de Datos:** SQLite / PostgreSQL
* **Servicios Web:** Caddy / Node.js

### Integraciones & Automatización
* **AI Engine:** Google AI Studio / Gemini API / Custom LLM Services
* **Workflow Automation:** n8n Integration


---

## 🏗️ Arquitectura del Sistema

```text
               ┌─────────────────────────────────────────┐
               │          CLIENTE / NAVEGADOR            │
               │   Next.js React Server & Client Components│
               └────────────────────┬────────────────────┘
                                    │
                                    ▼
               ┌─────────────────────────────────────────┐
               │          NEXT.JS APP ROUTER             │
               │     /app/api/chat   |   /app/page       │
               └─────────┬──────────────────────┬────────┘
                         │                      │
                         ▼                      ▼
        ┌─────────────────────────┐    ┌─────────────────────────┐
        │   INTEGRACIÓN DE IA     │    │       PRISMA ORM        │
        │  Gemini / Custom LLM    │    │  Database Client (SQLite│
        └─────────────────────────┘    └────────┬────────────────┘
                                                │
                                                ▼
                                       ┌──────────────────┐
                                       │   BASE DE DATOS  │
                                       └──────────────────┘


📂 Estructura del Proyecto

portfolio/
├── 📁 prisma/                  # Esquema del ORM y migraciones
│   └── schema.prisma
├── 📁 public/                  # Assets estáticos, vectores e imágenes de proyectos
│   ├── logo.svg
│   └── 📁 projects/            # Capturas de proyectos
├── 📁 src/
│   ├── 📁 app/                 # Rutas de la aplicación y Server API Routes
│   │   ├── 📁 api/             # Endpoints (Chat IA, utilidades)
│   │   ├── globals.css         # Estilos globales y variables Tailwind
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── 📁 components/          # Arquitectura de componentes
│   │   ├── 📁 interactive/     # Chatbot IA, Selector de Lenguaje, Widget WhatsApp
│   │   ├── 📁 layout/          # Navbar, Fondo de partículas, Cursor
│   │   ├── 📁 portfolio/       # Hero, About, TechStack, Experiencia, Proyectos
│   │   ├── 📁 shared/          # Cartas Glassmorphism, Botones magnéticos
│   │   └── 📁 ui/              # Sistema de diseño base (shadcn/ui)
│   ├── 📁 data/                # Mock data y traducciones (es, en, pt)
│   ├── 📁 lib/                 # Inicialización de DB (Prisma) y helpers
│   └── 📁 stores/              # Gestión de estado global (Language)
├── 📄 .env.example             # Plantilla de variables de entorno protegidas
├── 📄 components.json          # Configuración de shadcn/ui
├── 📄 next.config.ts           # Configuración de Next.js
└── 📄 package.json


