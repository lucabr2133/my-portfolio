import { useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  LayoutTemplate,
  Search,
  Zap,
  Sliders,
} from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import MiImagen from "./assets/newEcommerce.png";
import socialImage from "./assets/newSocialMedia.png";
import Lenis from "lenis";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, ScrollToPlugin);
gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ========================================
   DATOS DE SERVICIOS
======================================== */
const services = [
  {
    title: "Custom Web Design",
    desc: "Unique, professional websites tailored to your brand identity. 100% responsive so they look flawless on any phone, tablet, or desktop.",
    icon: LayoutTemplate,
  },
  {
    title: "SEO Optimization",
    desc: "Technically optimized structure from day one so your business ranks at the top of Google search results and attracts organic clients.",
    icon: Search,
  },
  {
    title: "Speed & Performance",
    desc: "Websites with lightning-fast load times using modern technologies. Speed retains more visitors and maximizes conversion rates.",
    icon: Zap,
  },
  {
    title: "Self-Manageable",
    desc: "Platforms built so you can update content, images, or catalogs easily and independently, without relying on a developer.",
    icon: Sliders,
  },
];

/* ========================================
   DATOS DE PROYECTOS
======================================== */
const projects = [
  {
    title: "Self-Manageable E-Commerce",
    subtitle: "Online Video Game Store (Game Shop)",
    desc: "A high-performance online store with integrated Stripe payment gateway to automate your sales. Includes an intuitive admin panel to manage your product stock, customers, and purchases in real time.",
    img: MiImagen,
    techs: ["TypeScript", "React", "Next.js", "Stripe", "SQL", "Tailwind"],
    urlCode: "https://github.com/lucabr2133/next-app-ecommerce",
    urlView: "https://next-app-ecommerce-gamma.vercel.app/",
  },
  {
    title: "Communication Platform",
    subtitle: "Interactive Social Network",
    desc: "An interactive app optimized for real-time communication between users and brands. Designed with high security standards in authentication and response speed to guarantee user retention.",
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
function ServiceCard({ service }: { service: (typeof services)[0] }) {
  return (
    <div className="glow-card bg-neutral-900/40 backdrop-blur-xl border border-white/[0.04] p-8 rounded-3xl flex flex-col gap-5 text-left">
      <div className="w-12 h-12 rounded-xl bg-amber-400/[0.06] border border-amber-400/20 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.05)]">
        <service.icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-white tracking-wide">
        {service.title}
      </h3>
      <p className="text-sm text-gray-400 leading-relaxed font-light">
        {service.desc}
      </p>
    </div>
  );
}

/* ========================================
   SKILL CARD COMPONENT
======================================== */
function SkillCard({ skill }: { skill: (typeof skills)[0] }) {
  return (
    <div className="glow-card group w-full p-6 bg-neutral-900/40 backdrop-blur-xl flex flex-col justify-center items-center gap-4 border border-white/[0.04] rounded-2xl">
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
    </div>
  );
}

/* ========================================
   PROJECT CARD COMPONENT (ESTILO UNIFICADO)
======================================== */
function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="glow-card bg-neutral-900/40 backdrop-blur-xl border border-white/[0.06] rounded-3xl overflow-hidden flex flex-col">
      <div className="relative overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-auto object-cover block"
        />
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest">{project.subtitle}</p>
        <h3 className="text-white text-xl font-bold">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.desc}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.techs.map((tech) => (
            <span key={tech} className="text-xs px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-gray-300">{tech}</span>
          ))}
        </div>
        <div className="flex gap-3 pt-2">
          <a href={project.urlCode} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs text-gray-400 hover:text-amber-400 transition-colors">
            <Github className="w-4 h-4" /> View Code
          </a>
          <a href={project.urlView} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs text-gray-400 hover:text-amber-400 transition-colors">
            Live Demo →
          </a>
        </div>
      </div>
    </div>
  );
}

/* ========================================
   MAIN APP COMPONENT
======================================== */

export default function App() {
  const navSections = [
    { id: "start", name: "Home" },
    { id: "services", name: "Services" },
    { id: "projects", name: "Projects" },
    { id: "about", name: "About" },
    { id: "contact", name: "Contact" },
  ];

  const containerRef = useRef<HTMLElement>(null);

  // Funciones auxiliares para separar texto sin depender de SplitText Premium
  const splitTextToSpans = (text: string, className: string) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className={`${className} inline-block`}
        style={{ minWidth: char === " " ? "0.25em" : "auto" }}
      >
        {char}
      </span>
    ));
  };

  const splitWordsToSpans = (text: string, className: string) => {
    return text.split(" ").map((word, index) => (
      <span key={index} className={`${className} inline-block mr-[0.25em]`}>
        {word}
      </span>
    ));
  };

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // ===== 1. LENIS SMOOTH SCROLL (inicializado UNA sola vez) =====
      const lenis = new Lenis();
      lenis.on("scroll", ScrollTrigger.update);
      const tickHandler = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tickHandler);
      gsap.ticker.lagSmoothing(0);

      // ===== 2. ANIMACIONES DE ENTRADA (HERO) =====
      gsap.from("li", {
        y: -50, opacity: 0,
        ease: "power4.out", stagger: 0.05, duration: 0.8,
      });
      gsap.from(".char-title", {
        y: 80, opacity: 0, rotateX: -80,
        stagger: 0.04, duration: 0.8, ease: "power4.out",
      });
      gsap.from(".char-subtitle", {
        y: 40, opacity: 0,
        stagger: 0.02, duration: 0.6, ease: "power3.out", delay: 0.4,
      });
      gsap.from(".word-desc", {
        y: 20, opacity: 0,
        stagger: 0.015, duration: 0.5, ease: "power2.out", delay: 0.7,
      });
      gsap.from("button", {
        y: 40, opacity: 0,
        ease: "back.out(1.5)", stagger: 0.1, duration: 0.8, delay: 0.9,
      });

      // ===== 3. ANIMACIÓN TITULO PROYECTOS =====
      gsap.from(".char-proyects", {
        y: 100,
        scrollTrigger: {
          trigger: ".char-proyects",
          start: "top bottom",
          end: "top 90%",
          scrub: 3,
        },
      });

      // ===== 5. REFRESH EN WINDOW LOAD (para imágenes) =====
      const handleLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", handleLoad);

      return () => {
        lenis.destroy();
        gsap.ticker.remove(tickHandler);
        window.removeEventListener("load", handleLoad);
      };
    },
    { scope: containerRef },
  );

  return (
    <main
      ref={containerRef}
      className="relative w-full text-white"
    >
      {/* ===== FONDO PREMIUM ===== */}
      <div className="fixed inset-0 grid-background pointer-events-none z-0" />

      {/* Ambient Glows */}

      {/* ===== HEADER / NAVIGATION ===== */}
      <header className="w-full p-4 bg-transparent fixed z-20 backdrop-blur-2xl top-0 font-light text-sm">
        <nav>
          <ul className="flex gap-4 justify-between items-center">
            {/* El Logo */}
            <li className="font-bold text-2xl text-yellow-200 cursor-pointer">
              LB.
            </li>

            {/* Los Links */}
            <div className="flex gap-8 ">
              {navSections.map((section) => (
                <li
                  key={section.name}
                  className="liSection cursor-pointer relative hover:text-white transition-colors"
                >
                  {section.name}
                </li>
              ))}
            </div>
          </ul>
        </nav>
      </header>
      {/* ===== HERO SECTION ===== */}
      <section
        style={{
          background: "linear-gradient(159deg, #321a1a 8%, #000000 100%)",
        }}
        id="start"
        className=" flex-col h-screen z-10 flex items-center justify-center w-full gap-10"
      >
        <h1 className="text-amber-400/80 text-6xl uppercase font-extrabold tracking-wider overflow-hidden">
          {splitTextToSpans("Luca Brandan", "char-title")}
        </h1>
        <h2 className="uppercase font-bold text-3xl tracking-wider overflow-hidden">
          {splitTextToSpans("Fullstack Developer", "char-subtitle")}
        </h2>
        <h2 className="uppercase text-center w-100 text-sm overflow-hidden flex flex-wrap justify-center">
          {splitWordsToSpans(
            "Designing and building interactive, accessible web experiences that help businesses grow.",
            "word-desc",
          )}
        </h2>
        <div className="flex gap-4 [&>button]:cursor-pointer">
          <button className="bg-white text-black px-5 py-2 rounded-lg min-w-[150px] hover:-translate-y-1 uppercase font-bold text-sm">
            View My Projects
          </button>
          <button className="bg-transparent hover:bg-amber-400 hover:text-black border border-y-amber-400 text-amber-400  px-5 py-2 rounded-lg min-w-[150px] uppercase font-bold text-sm">
            Get in Touch
          </button>
          <button className="bg-transparent border border-gray-700 hover:border-amber-400   px-5 py-2 rounded-lg min-w-[150px] uppercase font-bold text-sm">
            <a href="/Resume.pdf">Resume</a>
          </button>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section id="projects" className="relative z-10 w-full max-w-6xl mx-auto py-28 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            {splitTextToSpans("My Projects", "char-proyects")}
          </h2>
          <div className="section-line" />
          <p className="text-gray-500 text-sm md:text-base font-light max-w-lg mx-auto">
            A selection of previous work built to the highest standards
            of quality, speed, and usability.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </section>

      {/* ===== SERVICIOS SECTION ===== */}
      <section
        id="services"
        className="relative z-10 w-full max-w-6xl mx-auto py-28 px-6"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Services
            <span className="text-amber-400">.</span>
          </h2>
          <div className="section-line" />
          <p className="text-gray-500 text-sm md:text-base font-light max-w-lg mx-auto">
            Professional web solutions focused on growing your brand and
            optimizing your online results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <section
        id="skills"
        className="relative z-10 w-full max-w-5xl mx-auto py-28 px-6"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Tech Stack
            <span className="text-amber-400">.</span>
          </h2>
          <div className="section-line" />
          <p className="text-gray-500 text-sm md:text-base font-light max-w-lg mx-auto">
            Modern tools and languages that guarantee your website is
            scalable, secure, and fast.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </section>

      {/* ===== ABOUT ME SECTION ===== */}
      <section
        id="about"
        className="relative z-10 w-full max-w-4xl mx-auto py-28 px-6"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            About Me
            <span className="text-amber-400">.</span>
          </h2>
          <div className="section-line" />
        </div>

        <div className="glow-card bg-neutral-900/40 backdrop-blur-xl p-8 md:p-14 rounded-3xl border border-white/[0.04] relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/[0.03] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/[0.02] rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-6 text-center">
            <p className="text-gray-300 text-base md:text-lg leading-[1.9] font-light">
              I'm a{" "}
              <span className="text-amber-400 font-medium">
                Freelance Fullstack Developer
              </span>{" "}
              passionate about building clean user interfaces, smooth interactions,
              and robust, scalable applications. My main stack includes{" "}
              <span className="text-white font-medium">
                React, Next.js, Node.js and TypeScript
              </span>
              .
            </p>

            <p className="text-gray-400 text-base md:text-lg leading-[1.9] font-light">
              I'm currently studying{" "}
              <span className="text-gray-200">
                Information Systems Engineering
              </span>{" "}
              and constantly improving my English. I'm passionate about solving
              complex problems and bringing ideas to life as world-class digital
              experiences.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-6 pt-6 border-t border-white/[0.04]">
              {[
                { value: "2+", label: "Years of Experience" },
                { value: "8+", label: "Technologies" },
                { value: "5+", label: "Projects" },
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
        </div>
      </section>

      {/* ===== FOOTER / CONTACT ===== */}
      <footer
        id="contact"
        className="relative z-10 w-full border-t border-white/[0.03] py-20 mt-10"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-400/60 font-semibold mb-4">
              Contact
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
              Ready to build something
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                amazing together?
              </span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-light max-w-md mx-auto mb-10">
              Tell me about your idea or business. I'm open to new
              web development projects and collaborations.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
              <a
                href="mailto:lucab2188@gmail.com?subject=Web%20Project%20Inquiry%20-%20Luca%20Brandan&body=Hi%20Luca,%20I'd%20like%20to%20ask%20you%20about%20a%20website%20for%20my%20business..."
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-amber-400 text-black font-bold text-sm tracking-wide w-full sm:w-auto text-center hover:bg-amber-300 hover:scale-[1.03] active:scale-[0.97] hover:-translate-y-[2px] transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                Start a Project
              </a>

              <a
                href="https://wa.me/549XXXXXXXXXX?text=Hi%20Luca,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20ask%20about%20a%20web%20project%20for%20my%20business"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/25 text-emerald-300 hover:bg-emerald-500/[0.1] hover:border-emerald-400/35 hover:scale-[1.03] active:scale-[0.97] hover:-translate-y-[2px] transition-all duration-200 text-sm font-semibold w-full sm:w-auto text-center"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
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
                <a
                  key={social.label}
                  href={social.href}
                  target={
                    social.href.startsWith("mailto") ? undefined : "_blank"
                  }
                  rel={
                    social.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-amber-400/20 text-gray-500 hover:text-amber-400 hover:scale-[1.1] hover:-translate-y-[2px] active:scale-[0.95] transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-[11px] text-gray-600 mt-12 tracking-wide">
              © {new Date().getFullYear()} Luca Brandan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
