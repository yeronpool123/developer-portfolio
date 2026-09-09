import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yeron Pool Cuero Montaño | Full Stack Developer & Automation Specialist",
  description:
    "Ingeniero en TIC, Desarrollador Web Full Stack, Especialista en Automatización con n8n. Apasionado por la Ciberseguridad, IA e IoT. Portafolio profesional interactivo.",
  keywords: [
    "Yeron Pool",
    "Full Stack Developer",
    "n8n Automation",
    "Cybersecurity",
    "Linux",
    "Web Developer",
    "TypeScript",
    "React",
    "Node.js",
    "Ecuador",
  ],
  authors: [{ name: "Yeron Pool Cuero Montaño", url: "https://wa.me/593994853308" }],
  creator: "Yeron Pool Cuero Montaño",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💻</text></svg>",
  },
  openGraph: {
    title: "Yeron Pool Cuero Montaño | Full Stack Developer",
    description:
      "Ingeniero en TIC con experiencia en desarrollo web, automatización n8n, ciberseguridad e IA.",
    url: "https://yeronpool.dev",
    siteName: "Yeron Pool - Portfolio",
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US", "pt_BR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yeron Pool Cuero Montaño | Full Stack Developer",
    description:
      "Ingeniero en TIC con experiencia en desarrollo web, automatización n8n, ciberseguridad e IA.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Yeron Pool Cuero Montaño",
              jobTitle: "Full Stack Developer & Automation Specialist",
              url: "https://yeronpool.dev",
              sameAs: ["https://wa.me/593994853308"],
              knowsAbout: [
                "Web Development",
                "n8n Automation",
                "Cybersecurity",
                "Linux Administration",
                "Artificial Intelligence",
                "IoT",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Universidad",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}