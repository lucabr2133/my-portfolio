import { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ExternalLink,
  Code2,
  Sparkles,
  MessageCircle,
  LayoutTemplate,
  Search,
  Zap,
  Sliders,
} from "lucide-react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { Link } from "react-scroll";

import MiImagen from "./assets/newEcommerce.png";
import socialImage from "./assets/newSocialMedia.png";

/* ========================================
   DATOS DE SERVICIOS
======================================== */
const services = [
  {
    title: "Diseño Web a Medida",
    desc: "Sitios web únicos y profesionales adaptados a la identidad de tu marca. 100% responsivos para que se vean impecables desde cualquier celular, tablet o computadora.",
    icon: LayoutTemplate,
  },
  {
    title: "Posicionamiento SEO",
    desc: "Estructura técnica optimizada desde el primer día para que tu negocio aparezca en los primeros resultados de búsqueda de Google y atraiga clientes orgánicos.",
    icon: Search,
  },
  {
    title: "Velocidad y Carga Rápida",
    desc: "Sitios web con tiempos de carga instantáneos utilizando tecnologías modernas. La velocidad retiene más visitas y maximiza las tasas de conversión.",
    icon: Zap,
  },
  {
    title: "Autoadministrable",
    desc: "Plataformas desarrolladas para que puedas actualizar información, imágenes o catálogos de manera simple y autónoma, sin depender de un programador.",
    icon: Sliders,
  },
];

/* ========================================
   DATOS DE PROYECTOS
======================================== */
const projects = [
  {
    title: "E-Commerce Autoadministrable",
    subtitle: "Tienda Online de Videojuegos (Game Shop)",
    desc: "Una tienda online de alto rendimiento con pasarela de pagos Stripe integrada para automatizar tus ventas. Incluye un panel de administración intuitivo para gestionar tu stock de productos, clientes y compras en tiempo real.",
    img: MiImagen,
    techs: ["TypeScript", "React", "Next.js", "Stripe", "SQL", "Tailwind"],
    urlCode: "https://github.com/lucabr2133/next-app-ecommerce",
    urlView: "https://next-app-ecommerce-gamma.vercel.app/",
  },
  {
    title: "Plataforma de Comunicación",
    subtitle: "Red Social Interactiva",
    desc: "Aplicación interactiva optimizada para la comunicación en tiempo real entre usuarios y marcas. Diseñada con altos estándares de seguridad en autenticación y velocidad de respuesta para garantizar la retención de usuarios.",
    img: socialImage,
    techs: [
      "TypeScript",
      "React",
      "Postgres",
      "Prisma",
      "Node",
      "Express",
      "Socket.io",
      "Vitest",
    ],
    urlCode: "https://github.com/lucabr2133/Social-media",
    urlView: "https://echo32232.netlify.app/",
  },
];

/* ========================================
   DATOS DE HABILIDADES
======================================== */
const skills = [
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Node.js", icon: "node" },
  { name: "Express", icon: "express" },
];

/* ========================================
   SERVICE CARD COMPONENT
======================================== */
function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="glow-card bg-neutral-900/40 backdrop-blur-xl border border-white/[0.04] p-8 rounded-3xl flex flex-col gap-5 text-left"
    >
      <div className="w-12 h-12 rounded-xl bg-amber-400/[0.06] border border-amber-400/20 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.05)]">
        <service.icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-white tracking-wide">
        {service.title}
      </h3>
      <p className="text-sm text-gray-400 leading-relaxed font-light">
        {service.desc}
      </p>
    </motion.div>
  );
}

/* ========================================
   SKILL CARD COMPONENT
======================================== */
function SkillCard({
  skill,
  index,
}: {
  skill: (typeof skills)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="glow-card group w-full p-6 bg-neutral-900/40 backdrop-blur-xl flex flex-col justify-center items-center gap-4 border border-white/[0.04] rounded-2xl"
    >
      <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:border-amber-400/20 group-hover:bg-amber-400/[0.03] transition-all duration-300">
        <img
          width={32}
          height={32}
          src={`/${skill.icon}.svg?v=2`}
          alt={`${skill.name} logo`}
          className="object-contain"
        />
      </div>
      <span className="uppercase font-semibold text-sm tracking-widest text-gray-300 group-hover:text-amber-300 transition-colors duration-300">
        {skill.name}
      </span>
    </motion.div>
  );
}

/* ========================================
   PROJECT CARD COMPONENT (ESTILO UNIFICADO)
======================================== */
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="featured-project"
    >
      <div className="relative rounded-3xl overflow-hidden bg-neutral-950">
        {/* Imagen del Proyecto - Full Width */}
        <div className="project-image-wrapper aspect-video md:aspect-[21/9]">
          <img
            src={project.img}
            alt={`Vista previa de ${project.title}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenido sobre la imagen */}
        <div
          className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.7) 40%, rgba(5,5,5,0.1) 70%, transparent 100%)",
          }}
        >
          {/* Badge */}
          <div className="flex items-center gap-3 mb-4">
            <span className="pulse-badge inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3 h-3" />
              Solución Comercial
            </span>
          </div>

          <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-1">
            {project.title}
          </h3>

          <p className="text-sm md:text-base text-amber-300/80 font-medium tracking-wide mb-4">
            {project.subtitle}
          </p>

          <p className="text-sm md:text-base text-gray-300/90 max-w-2xl leading-relaxed mb-6 font-light">
            {project.desc}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techs.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white/[0.06] border border-white/[0.08] rounded-lg text-xs font-medium text-gray-300 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Botones */}
          <div className="flex gap-4">
            <motion.a
              href={project.urlView}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary inline-flex items-center gap-2 px-7 py-3 rounded-xl text-black font-bold text-sm tracking-wide"
            >
              <ExternalLink className="w-4 h-4" />
              Ver Sitio Web
            </motion.a>
            <motion.a
              href={project.urlCode}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-sm text-gray-100 hover:bg-white/[0.08] hover:border-amber-400/20 transition-all font-medium"
            >
              <Code2 className="w-4 h-4" />
              Ver Código
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ========================================
   MAIN APP COMPONENT
======================================== */
export default function App() {
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "Diseño Web a Medida",
    "Optimización SEO",
    "Sitios de Carga Ultra Rápida",
    "Desarrollo E-Commerce",
  ];

  // Efecto de typing animado cíclico
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, typedText.length - 1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
      }, 80);
    }

    if (!isDeleting && typedText === currentPhrase) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIndex]);

  const handleCopyEmail = () => {
    window.navigator.clipboard.writeText("lucab2188@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navSections = [
    { id: "start", name: "Inicio" },
    { id: "services", name: "Servicios" },
    { id: "projects", name: "Proyectos" },
    { id: "about", name: "Sobre Mí" },
    { id: "contact", name: "Contacto" },
  ];

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center text-white bg-[#050505]">
      {/* ===== FONDO PREMIUM ===== */}
      <div className="fixed inset-0 grid-background pointer-events-none z-0" />

      {/* Ambient Glows */}
      <div className="fixed top-[5%] left-[5%] w-[400px] h-[400px] rounded-full bg-amber-500/[0.04] blur-[160px] pointer-events-none z-0 animate-float-slow" />
      <div className="fixed top-[50%] right-[5%] w-[500px] h-[500px] rounded-full bg-amber-600/[0.03] blur-[180px] pointer-events-none z-0 animate-float-slower" />
      <div className="fixed bottom-[10%] left-[20%] w-[300px] h-[300px] rounded-full bg-amber-700/[0.05] blur-[140px] pointer-events-none z-0 animate-float-fast" />

      {/* ===== HEADER / NAVIGATION ===== */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-[#050505]/80 border-b border-white/[0.03]">
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg font-bold tracking-wider"
          >
            <span className="text-white">LB</span>
            <span className="text-amber-400">.</span>
          </motion.span>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 text-[13px] text-gray-400 font-medium uppercase tracking-[0.15em]">
            {navSections.map((section, i) => (
              <motion.li
                key={section.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={section.id}
                  smooth
                  spy
                  offset={-80}
                  duration={600}
                  activeClass="!text-amber-400"
                  className="cursor-pointer hover:text-white transition-colors duration-300 py-1"
                >
                  {section.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </nav>

        {/* Mobile Panel */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-b border-white/[0.03] bg-[#050505]/95 backdrop-blur-2xl"
            >
              <ul className="flex flex-col px-6 py-4 gap-1">
                {navSections.map((section) => (
                  <li key={section.id}>
                    <Link
                      to={section.id}
                      smooth
                      spy
                      offset={-80}
                      duration={600}
                      onClick={() => setMenuOpen(false)}
                      activeClass="!text-amber-400"
                      className="block cursor-pointer py-3 text-gray-400 hover:text-white transition text-sm font-medium tracking-wide border-b border-white/[0.03] last:border-0"
                    >
                      {section.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section
        id="start"
        className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-6 gap-6 pt-24"
      >
        {/* Badge de estado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 mb-2"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium text-emerald-300 tracking-wide">
            Disponible para nuevos proyectos
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.15] text-center"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400">
            Presencia digital premium para tu negocio:
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-300 to-amber-500">
            rápido, moderno y optimizado para Google
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="h-8 flex items-center"
        >
          <span className="text-base sm:text-lg md:text-xl tracking-[0.2em] text-gray-400 font-light uppercase typing-cursor">
            {typedText}
          </span>
        </motion.div>

        {/* CTAs Principales */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 w-full max-w-2xl px-4"
        >
          <motion.a
            href="mailto:lucab2188@gmail.com?subject=Consulta%20sobre%20proyecto%20web%20-%20Luca%20Brandan&body=Hola%20Luca,%20me%20gustar%C3%ADa%20consultarte%20por%20un%20sitio%20web%20para%20mi%20negocio..."
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-black font-bold text-sm tracking-wide w-full sm:w-auto text-center"
          >
            <Mail className="w-4 h-4" />
            Iniciar Proyecto
          </motion.a>

          {/* NOTA: Cambiar '549XXXXXXXXXX' por tu número de WhatsApp real con código de área */}
          <motion.a
            href="https://wa.me/541139387373?text=Hola%20Luca,%20vi%20tu%20portfolio%20y%20quiero%20consultarte%20por%20un%20proyecto%20web%20para%20mi%20negocio"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/25 text-emerald-300 hover:bg-emerald-500/[0.1] hover:border-emerald-400/35 transition-all text-sm font-semibold w-full sm:w-auto text-center"
          >
            <MessageCircle className="w-4 h-4" />
            Consultar por WhatsApp
          </motion.a>
        </motion.div>

        {/* Links de redes secundarios y copiar email */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mt-6 text-xs text-gray-500"
        >
          <a
            href="https://www.linkedin.com/in/luca-brandan-59b14a2b0/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href="https://github.com/lucabr2133"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition"
          >
            Ver C.V.
          </a>
          <span>•</span>
          <button
            onClick={handleCopyEmail}
            className="hover:text-amber-400 transition cursor-pointer flex items-center gap-1"
          >
            {copied ? (
              <span className="text-emerald-400 font-medium">¡Copiado!</span>
            ) : (
              <span>lucab2188@gmail.com</span>
            )}
          </button>
        </motion.div>
      </section>

      {/* ===== SERVICIOS SECTION ===== */}
      <section
        id="services"
        className="relative z-10 w-full max-w-6xl mx-auto py-28 px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Servicios
            <span className="text-amber-400">.</span>
          </h2>
          <div className="section-line" />
          <p className="text-gray-500 text-sm md:text-base font-light max-w-lg mx-auto">
            Soluciones web profesionales enfocadas en hacer crecer tu marca y
            optimizar tus resultados en línea.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section
        id="projects"
        className="relative z-10 w-full max-w-6xl mx-auto py-20 px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Proyectos Realizados
            <span className="text-amber-400">.</span>
          </h2>
          <div className="section-line" />
          <p className="text-gray-500 text-sm md:text-base font-light max-w-lg mx-auto">
            Una muestra de trabajos previos desarrollados con altos estándares
            de calidad, velocidad y usabilidad.
          </p>
        </motion.div>

        {/* Proyectos unificados */}
        <div className="flex flex-col gap-16">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <section
        id="skills"
        className="relative z-10 w-full max-w-5xl mx-auto py-28 px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Tecnologías Utilizadas
            <span className="text-amber-400">.</span>
          </h2>
          <div className="section-line" />
          <p className="text-gray-500 text-sm md:text-base font-light max-w-lg mx-auto">
            Herramientas y lenguajes modernos que garantizan que tu sitio web
            sea escalable, seguro y rápido.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </section>

      {/* ===== ABOUT ME SECTION ===== */}
      <section
        id="about"
        className="relative z-10 w-full max-w-4xl mx-auto py-28 px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Sobre Mí
            <span className="text-amber-400">.</span>
          </h2>
          <div className="section-line" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glow-card bg-neutral-900/40 backdrop-blur-xl p-8 md:p-14 rounded-3xl border border-white/[0.04] relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/[0.03] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/[0.02] rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-6 text-center">
            <p className="text-gray-300 text-base md:text-lg leading-[1.9] font-light">
              Soy un{" "}
              <span className="text-amber-400 font-medium">
                Desarrollador Fullstack Freelance
              </span>{" "}
              apasionado por crear interfaces de usuario limpias, interacciones
              fluidas y aplicaciones robustas y escalables. Mi stack principal
              incluye{" "}
              <span className="text-white font-medium">
                React, Next.js, Node.js y TypeScript
              </span>
              .
            </p>

            <p className="text-gray-400 text-base md:text-lg leading-[1.9] font-light">
              Actualmente curso{" "}
              <span className="text-gray-200">
                Ingeniería en Sistemas de Información
              </span>{" "}
              y mejoro constantemente mi nivel de inglés. Me entusiasma resolver
              problemas complejos y materializar ideas en experiencias digitales
              de primer nivel.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-6 pt-6 border-t border-white/[0.04]">
              {[
                { value: "2+", label: "Años de experiencia" },
                { value: "8+", label: "Tecnologías" },
                { value: "5+", label: "Proyectos" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-amber-400 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] md:text-xs text-gray-500 uppercase tracking-widest mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===== FOOTER / CONTACT ===== */}
      <footer
        id="contact"
        className="relative z-10 w-full border-t border-white/[0.03] py-20 mt-10"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-amber-400/60 font-semibold mb-4">
              Contacto
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
              ¿Listo para crear algo
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                increíble juntos?
              </span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-light max-w-md mx-auto mb-10">
              Contame más sobre tu idea o negocio. Estoy abierto a nuevos
              proyectos de desarrollo web y colaboraciones.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="mailto:lucab2188@gmail.com?subject=Consulta%20sobre%20proyecto%20web%20-%20Luca%20Brandan&body=Hola%20Luca,%20me%20gustar%C3%ADa%20consultarte%20por%20un%20sitio%20web%20para%20mi%20negocio..."
                className="btn-primary inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-black font-bold text-sm tracking-wide w-full sm:w-auto text-center"
              >
                <Mail className="w-4 h-4" />
                Iniciar Proyecto
              </motion.a>

              <motion.a
                href="https://wa.me/549XXXXXXXXXX?text=Hola%20Luca,%20vi%20tu%20portfolio%20y%20quiero%20consultarte%20por%20un%20proyecto%20web%20para%20mi%20negocio"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/25 text-emerald-300 hover:bg-emerald-500/[0.1] hover:border-emerald-400/35 transition-all text-sm font-semibold w-full sm:w-auto text-center"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </motion.a>
            </div>

            {/* Social row */}
            <div className="flex justify-center gap-3 mt-12">
              {[
                {
                  href: "mailto:lucab2188@gmail.com?subject=Consulta%20sobre%20proyecto%20web",
                  icon: Mail,
                  label: "Email",
                },
                {
                  href: "https://github.com/lucabr2133",
                  icon: Github,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/luca-brandan-59b14a2b0/",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target={
                    social.href.startsWith("mailto") ? undefined : "_blank"
                  }
                  rel={
                    social.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-amber-400/20 text-gray-500 hover:text-amber-400 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-[11px] text-gray-600 mt-12 tracking-wide">
              © {new Date().getFullYear()} Luca Brandan. Todos los derechos
              reservados.
            </p>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
