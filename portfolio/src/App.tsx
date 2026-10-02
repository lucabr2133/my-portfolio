import { useRef, useState } from "react";
import {
  MessageCircle,
  MapPin,
  Check,
  ArrowRight,
  ExternalLink,
  Clock,
  Menu,
  X,
  Plus,
  Minus,
  Star,
} from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const WHATSAPP_NUMBER = "5491139387373";
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/* ========================================================
   DATOS EDITORIALES INSPIRADOS EN CONSULTANCY FRAMER
======================================================== */

const services = [
  {
    number: "01",
    title: "Diseño Web Comercial",
    desc: "Creamos la vitrina digital de tu negocio. Una página atractiva, profesional y pensada desde cero para que cualquier persona que entre entienda qué ofrecés y quiera contactarte.",
    tag: "A Medida",
  },
  {
    number: "02",
    title: "Optimización para WhatsApp",
    desc: "Integramos botones estratégicos en toda la página para que el visitante no tenga que buscar tu número: con un solo toque inicia una conversación directa con vos.",
    tag: "Conversión Directa",
  },
  {
    number: "03",
    title: "Posicionamiento Local en Google",
    desc: "Estructuramos tu sitio y enlazamos tu ficha de Google Maps para que los vecinos y clientes que busquen tus servicios en tu ciudad o barrio te encuentren primero.",
    tag: "Clientes de Zona",
  },
  {
    number: "04",
    title: "Velocidad & Experiencia Móvil",
    desc: "El 80% de tus clientes entra desde el celular. Tu página cargará en menos de un segundo sin trabas ni demoras, garantizando que nadie se vaya a la competencia.",
    tag: "Ultrarrápido",
  },
];

const benefits = [
  {
    title: "Sin abonos mensuales forzosos",
    desc: "La web es tuya para siempre. No te cobramos mensualidades fijas ni te atamos a costos ocultos para que mantengas tu libertad.",
  },
  {
    title: "Decisiones claras y transparentes",
    desc: "Sabés exactamente qué incluye tu web desde el primer día: precio cerrado, tiempos definidos y sin sorpresas.",
  },
  {
    title: "Resultados en tiempo récord",
    desc: "Trabajamos con un proceso ágil para tener tu página lista y funcionando en internet entre 5 y 7 días hábiles.",
  },
  {
    title: "Garantía de satisfacción total",
    desc: "Abonás el 50% de seña para comenzar y el saldo restante recién cuando revisás la web en tu celular y aprobás todo.",
  },
];

const marqueeItems = [
  "Diseño Comercial Estratégico",
  "Carga en Menos de 1 Segundo",
  "Consultas Directas por WhatsApp",
  "Sin Mensualidades Forzosas",
  "Posicionamiento en Google Maps",
  "Entrega en 5 a 7 Días",
  "100% Adaptado a Celulares",
  "Garantía de Satisfacción 50/50",
];

const projects = [
  {
    id: "expedicion-norte",
    title: "Expedición Norte",
    category: "Turismo & Excursiones",
    desc: "Sitio web comercial para agencia de viajes regional. Permite a los turistas recorrer fotos de las excursiones, consultar tarifas y reservar fechas directamente por WhatsApp en segundos.",
    results: "+120 consultas de reserva por mes",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Catálogo interactivo de paseos y salidas guiadas",
      "Botón directo de 'Consultar Fecha por WhatsApp'",
      "Sección de opiniones y fotos de clientes reales",
      "Preguntas frecuentes para resolver dudas al instante",
    ],
    demoUrl: `${WHATSAPP_BASE_URL}?text=Hola%20LB%20STUDIO%2C%20vi%20el%20proyecto%20de%20Expedici%C3%B3n%20Norte%20y%20me%20gustar%C3%ADa%20una%20web%20similar%20para%20mi%20negocio.`,
  },
  {
    id: "estudio-creativo",
    title: "Estudio Creativo",
    category: "Diseño Gráfico & Branding",
    desc: "Portfolio visual de alto impacto para un estudio de diseño e identidad de marca. Diseñado para transmitir prestigio, mostrar antes y después de proyectos y captar presupuestos corporativos.",
    results: "+45% de presupuestos aprobados",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Galería elegante de casos de éxito y marcas",
      "Formulario simplificado para cotizaciones rápidas",
      "Estilo minimalista oscuro de alta categoría",
      "Optimización para verse impecable en tablets y celulares",
    ],
    demoUrl: `${WHATSAPP_BASE_URL}?text=Hola%20LB%20STUDIO%2C%20vi%20el%20proyecto%20de%20Estudio%20Creativo%20y%20quiero%20cotizar%20un%20portfolio%20para%20mis%20servicios.`,
  },
  {
    id: "servicios-oficios",
    title: "Servicios & Oficios",
    category: "Taller Mecánico & Servicios",
    desc: "Página web de captación local para taller especializado. Pensada para que conductores cercanos encuentren la ubicación exacta con mapa, horarios de guardia y soliciten turno con un clic.",
    results: "Líder en búsquedas en su barrio",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Botón de llamada rápida de urgencia en cabecera",
      "Ubicación exacta con mapa de Google Maps integrado",
      "Detalle transparente de servicios y soluciones",
      "Horarios de atención y botón de 'Pedir Turno por WhatsApp'",
    ],
    demoUrl: `${WHATSAPP_BASE_URL}?text=Hola%20LB%20STUDIO%2C%20vi%20el%20proyecto%20de%20Servicios%20%26%20Oficios%20y%20necesito%20una%20web%20para%20mi%20taller%2Flocal.`,
  },
];

const testimonials = [
  {
    name: "Matías Rossi",
    role: "Director, Expedición Norte",
    text: "Teníamos solo una cuenta de Instagram y se nos perdían un montón de reservas. Con la página web los turistas ven las fotos, los precios y nos escriben directo para pagar. En el primer mes se pagó sola.",
  },
  {
    name: "Valeria Mendez",
    role: "Fundadora, Estudio Creativo",
    text: "El nivel de profesionalismo de LB STUDIO es impecable. Lograron exactamente la estética refinada que queríamos para cotizar proyectos a clientes corporativos de mayor envergadura.",
  },
  {
    name: "Carlos Gomez",
    role: "Titular, Servicios & Oficios",
    text: "Lo que más valoro es que fue todo directo por WhatsApp, sin reuniones largas ni palabras raras. La probaron en mi teléfono, me encantó y recién ahí pagué el resto. Muy recomendables.",
  },
];

const comparisonData = [
  {
    feature: "Diseño personalizado para tu negocio",
    lb: "Sí, adaptado a tus clientes y rubro",
    others: "Plantillas genéricas repetidas",
    diy: "Diseño improvisado sin estrategia",
  },
  {
    feature: "Costos mensuales obligatorios",
    lb: "Ninguno ($0 de abono mensual)",
    others: "Abonos mensuales forzosos",
    diy: "Pagos mensuales a plataformas",
  },
  {
    feature: "Forma de pago con respaldo",
    lb: "50% de seña y 50% al aprobar",
    others: "Te exigen el 100% antes de ver nada",
    diy: "Inversión de tu propio tiempo valioso",
  },
  {
    feature: "Plazo de entrega garantizado",
    lb: "5 a 7 días hábiles",
    others: "Semanas o meses de demora",
    diy: "Proyectos que quedan a mitad de camino",
  },
  {
    feature: "Atención y soporte humano",
    lb: "Directo por WhatsApp con tu diseñador",
    others: "Tickets lentos o soporte con bots",
    diy: "Sin nadie a quien consultar dudas",
  },
];

const steps = [
  {
    step: "01",
    title: "Nos contás tu idea",
    desc: "Charlamos unos minutos por WhatsApp sobre qué hacés, qué vendés y qué necesitás en tu web. Te orientamos sin costo ni compromiso.",
    time: "Día 1",
  },
  {
    step: "02",
    title: "Creamos tu página",
    desc: "Nosotros nos ocupamos de todo: textos comerciales, diseño limpio, conexión a WhatsApp y puesta en marcha en internet.",
    time: "Días 2 al 6",
  },
  {
    step: "03",
    title: "Revisás y aprobás",
    desc: "La probás desde tu propio celular. Ajustamos lo que quieras a tu gusto, te encanta y recién en ese momento saldás el 50% final.",
    time: "Día 7",
  },
];


const faqs = [
  {
    q: "¿Por qué no cobran mensualidades fijas?",
    a: "Creemos en la transparencia. La página web es 100% tuya una vez terminada. No te atamos a abonos mensuales forzosos para que tengas el control total de tu presupuesto y no pagues de más.",
  },
  {
    q: "¿Cuánto tiempo demora la entrega?",
    a: "Entre 5 y 7 días hábiles desde que nos compartís la información básica de tu negocio (fotos, servicios y formas de contacto).",
  },
  {
    q: "¿Qué pasa si quiero hacer un cambio antes de pagar el saldo?",
    a: "Está contemplado en nuestra garantía. Revisás la página en tu teléfono y realizamos los ajustes necesarios hasta que estés plenamente conforme antes de abonar el 50% final.",
  },
  {
    q: "¿Cómo se realiza el pago?",
    a: "Se abona el 50% inicial mediante transferencia bancaria para comenzar con el diseño, y el 50% restante únicamente cuando la web esté lista y aprobada por vos.",
  },
];

export default function App() {
  const containerRef = useRef<HTMLElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Formulario de consulta
  const [formName, setFormName] = useState("");
  const [formBusiness, setFormBusiness] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola LB STUDIO, mi nombre es ${formName || "un cliente"}. Tengo un negocio de ${formBusiness || "servicios"}. ${formMessage ? `Quería consultarles: ${formMessage}` : "Me gustaría cotizar una página web."}`;
    window.open(`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element, {
        offset: -80,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const lenis = new Lenis();
      lenisRef.current = lenis;
      lenis.on("scroll", ScrollTrigger.update);
      const tickHandler = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tickHandler);
      gsap.ticker.lagSmoothing(0);

      gsap.from(".hero-text", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      return () => {
        lenis.destroy();
        gsap.ticker.remove(tickHandler);
      };
    },
    { scope: containerRef }
  );

  return (
    <main
      ref={containerRef}
      className="relative w-full bg-[#FAFAFA] text-[#171717] min-h-screen"
    >
      {/* ========================================================
          1. NAVBAR (Limpio, sobrio y editorial)
      ======================================================== */}
      <header className="sticky top-0 z-40 w-full bg-[#FAFAFA]/90 backdrop-blur-md border-b editorial-border">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("inicio");
            }}
            className="flex items-baseline gap-2 group cursor-pointer"
          >
            <span className="font-extrabold text-xl tracking-tight text-neutral-950">
              LB STUDIO
            </span>
            <span className="text-xs text-neutral-400 font-medium hidden sm:inline">
              / Presencia Digital
            </span>
          </a>

          {/* Links de Navegación */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
            <button
              onClick={() => scrollTo("servicios")}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollTo("beneficios")}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollTo("trabajos")}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Trabajos
            </button>
            <button
              onClick={() => scrollTo("proceso")}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Proceso
            </button>
            <button
              onClick={() => scrollTo("faq")}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Preguntas
            </button>
            <button
              onClick={() => scrollTo("contacto")}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Contacto
            </button>
          </nav>

          {/* Botón CTA Header */}
          <div className="flex items-center gap-3">
            <a
              href={`${WHATSAPP_BASE_URL}?text=Hola%20LB%20STUDIO%2C%20me%20gustar%C3%ADa%20pedir%20un%20presupuesto%20para%20una%20p%C3%A1gina%20web.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-neutral-950 hover:bg-black text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-200"
            >
              <span>Pedir Presupuesto</span>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-700 hover:text-black rounded-lg"
              aria-label="Menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b editorial-border px-6 py-5 flex flex-col gap-3 shadow-lg">
            <button
              onClick={() => scrollTo("servicios")}
              className="text-left text-sm font-medium py-1.5 text-neutral-700 hover:text-black"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollTo("beneficios")}
              className="text-left text-sm font-medium py-1.5 text-neutral-700 hover:text-black"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollTo("trabajos")}
              className="text-left text-sm font-medium py-1.5 text-neutral-700 hover:text-black"
            >
              Trabajos Realizados
            </button>
            <button
              onClick={() => scrollTo("proceso")}
              className="text-left text-sm font-medium py-1.5 text-neutral-700 hover:text-black"
            >
              Cómo Trabajamos
            </button>
            <button
              onClick={() => scrollTo("faq")}
              className="text-left text-sm font-medium py-1.5 text-neutral-700 hover:text-black"
            >
              Preguntas Frecuentes
            </button>
            <button
              onClick={() => scrollTo("contacto")}
              className="text-left text-sm font-medium py-1.5 text-neutral-700 hover:text-black"
            >
              Contacto Directo
            </button>
            <a
              href={`${WHATSAPP_BASE_URL}?text=Hola%20LB%20STUDIO%2C%20me%20gustar%C3%ADa%20pedir%20un%20presupuesto%20para%20una%20p%C3%A1gina%20web.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-neutral-950 text-white font-semibold text-xs py-3 rounded-full"
            >
              <span>Pedir Presupuesto por WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </header>

      {/* ========================================================
          2. HERO SECTION (Editorial, sobrio y seguro)
      ======================================================== */}
      <section id="inicio" className="pt-20 pb-20 md:pt-32 md:pb-28 px-6 max-w-5xl mx-auto">
        <div className="max-w-3xl">
          <p className="hero-text text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-6">
            Estudio de Desarrollo Web Comercial
          </p>

          <h1 className="hero-text text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-950 leading-[1.08]">
            Hacemos la página web de tu negocio para que consigas más clientes.
          </h1>

          <p className="hero-text mt-6 text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed max-w-2xl">
            Creamos sitios modernos, ultrarrápidos y adaptados a celulares,
            pensados para que la gente te encuentre en Google y te contacte directo a tu WhatsApp.
          </p>

          <div className="hero-text mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={`${WHATSAPP_BASE_URL}?text=Hola%20LB%20STUDIO%2C%20quiero%20cotizar%20la%20p%C3%A1gina%20web%20para%20mi%20negocio.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-neutral-950 hover:bg-black text-white font-medium text-sm px-8 py-3.5 rounded-full transition-all duration-200"
            >
              <span>Cotizar por WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-neutral-400" />
            </a>

            <button
              onClick={() => scrollTo("trabajos")}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-100 text-neutral-900 border editorial-border font-medium text-sm px-7 py-3.5 rounded-full transition-all duration-200 cursor-pointer"
            >
              Ver Trabajos Anteriores
            </button>
          </div>

          <p className="hero-text mt-6 text-xs text-neutral-500">
            Sin costos mensuales fijos · Pagás el 50% recién cuando tu web está terminada y aprobada.
          </p>
        </div>

        {/* Panel de Métricas tipo Consultancy */}
        <div className="mt-20 pt-8 border-t editorial-border grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight">5 a 7 días</div>
            <div className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">
              Plazo de entrega promedio
            </div>
          </div>
          <div className="sm:border-l editorial-border sm:pl-8">
            <div className="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight">100% móvil</div>
            <div className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">
              Adaptado a cualquier pantalla
            </div>
          </div>
          <div className="sm:border-l editorial-border sm:pl-8">
            <div className="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight">$0 sorpresa</div>
            <div className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">
              Sin abonos ni letra chica
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. DECLARACIÓN EDITORIAL ("Who we are")
      ======================================================== */}
      <section className="py-20 px-6 max-w-5xl mx-auto border-t editorial-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Quiénes Somos
            </p>
          </div>
          <div className="md:col-span-8">
            <p className="text-2xl sm:text-3xl md:text-4xl font-normal text-neutral-950 leading-relaxed tracking-tight">
              Somos un estudio de desarrollo web enfocado en <span className="font-semibold text-neutral-950 underline decoration-neutral-300 underline-offset-4">claridad, seriedad y resultados comerciales</span>. Creemos que una web no es un gasto, sino la herramienta principal para que un negocio genere confianza y aumente sus ventas todos los días.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. SERVICIOS (Grid elegante con bordes finos)
      ======================================================== */}
      <section id="servicios" className="py-24 px-6 max-w-5xl mx-auto border-t editorial-border">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-3">
            Nuestros Servicios
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
            Todo lo que tu negocio necesita en internet.
          </h2>
          <p className="mt-3 text-neutral-600 text-base leading-relaxed">
            Soluciones integrales diseñadas para que vos te dediques a trabajar mientras tu web atrae y recibe consultas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="editorial-card p-8 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-neutral-400 font-semibold">
                    {s.number}
                  </span>
                  <span className="text-xs text-neutral-600 bg-neutral-100 px-3 py-1 rounded-full font-medium">
                    {s.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-950 mb-3">
                  {s.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                <span>Disponible para tu proyecto</span>
                <Check className="w-4 h-4 text-neutral-950" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          5. BENEFICIOS & LO QUE NOS DIFERENCIA
      ======================================================== */}
      <section id="beneficios" className="py-24 px-6 max-w-5xl mx-auto border-t editorial-border">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-3">
            Lo Que Nos Diferencia
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
            Tranquilidad y seguridad para tu inversión.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="flex flex-col">
              <div className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-900 mb-4">
                <Check className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-neutral-950 mb-2">
                {b.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          MARQUEE DE PALABRAS CLAVE (Estilo Consultancy Framer)
      ======================================================== */}
      <div className="w-full py-6 border-y editorial-border bg-white overflow-hidden whitespace-nowrap">
        <div className="inline-flex gap-8 items-center text-xs font-semibold uppercase tracking-widest text-neutral-500">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <span key={idx} className="flex items-center gap-8">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
            </span>
          ))}
        </div>
      </div>

      {/* ========================================================
          6. TRABAJOS REALIZADOS (Casos de Éxito)
      ======================================================== */}
      <section id="trabajos" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-3">
            Casos de Éxito
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
            Páginas web creadas para negocios reales.
          </h2>
          <p className="mt-3 text-neutral-600 text-base leading-relaxed">
            Estructuras comerciales probadas que transmiten confianza inmediata y aumentan el volumen de consultas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="editorial-card rounded-2xl overflow-hidden flex flex-col group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                <img
                  src={proj.image}
                  alt={proj.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/95 text-neutral-800 shadow-xs">
                  {proj.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg font-bold text-neutral-950 mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {proj.desc}
                  </p>

                  <div className="mb-6 py-2 px-3 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0" />
                    <span className="text-xs text-neutral-700 font-medium">
                      {proj.results}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(proj)}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-neutral-900 hover:text-black py-2.5 border-t border-neutral-100 transition-colors cursor-pointer"
                >
                  <span>Ver detalles del proyecto</span>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          7. TESTIMONIOS (Estilo Consultancy Template)
      ======================================================== */}
      <section className="py-24 px-6 max-w-5xl mx-auto border-t editorial-border">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-3">
            Opiniones de Clientes
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
            Lo que dicen quienes ya confiaron en nosotros.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="editorial-card rounded-2xl p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 text-neutral-900 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-neutral-950 text-neutral-950" />
                  ))}
                </div>
                <p className="text-neutral-700 text-sm leading-relaxed mb-6">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100">
                <div className="font-bold text-sm text-neutral-950">{t.name}</div>
                <div className="text-xs text-neutral-500">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          8. TABLA COMPARATIVA ("Why Clients Choose Us")
      ======================================================== */}
      <section className="py-24 px-6 max-w-5xl mx-auto border-t editorial-border">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-3">
            La Mejor Elección
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
            Por qué los negocios eligen trabajar con LB STUDIO
          </h2>
          <p className="mt-3 text-neutral-600 text-base">
            Combinamos diseño comercial, trato humano y rapidez para que no pierdas tiempo ni dinero.
          </p>
        </div>

        <div className="editorial-card rounded-2xl overflow-hidden divide-y editorial-border">
          <div className="grid grid-cols-1 md:grid-cols-12 p-5 bg-neutral-50 font-semibold text-xs text-neutral-500 uppercase tracking-wider">
            <div className="md:col-span-4">Aspecto</div>
            <div className="hidden md:block md:col-span-4 text-neutral-950 font-bold">Con LB STUDIO</div>
            <div className="hidden md:block md:col-span-4">Otras agencias / Freelancers</div>
          </div>
          {comparisonData.map((c) => (
            <div
              key={c.feature}
              className="grid grid-cols-1 md:grid-cols-12 p-5 gap-2 md:gap-4 items-center"
            >
              <div className="md:col-span-4 text-sm font-semibold text-neutral-900">
                {c.feature}
              </div>
              <div className="md:col-span-4 text-sm text-neutral-950 font-medium flex items-center gap-2">
                <span className="font-bold">✓</span>
                <span>{c.lb}</span>
              </div>
              <div className="md:col-span-4 text-sm text-neutral-500 flex items-center gap-2">
                <span className="text-neutral-400">✕</span>
                <span>{c.others}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          9. CÓMO TRABAJAMOS (3 Pasos Claros)
      ======================================================== */}
      <section id="proceso" className="py-24 px-6 max-w-5xl mx-auto border-t editorial-border">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-3">
            El Proceso
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
            Tu página web lista en 3 pasos simples.
          </h2>
          <p className="mt-3 text-neutral-600 text-base leading-relaxed">
            Sin tecnicismos ni reuniones que no van a ningún lado. Vos te ocupás de tu negocio mientras nosotros nos encargamos de todo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((st) => (
            <div
              key={st.step}
              className="editorial-card rounded-2xl p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-2xl font-bold text-neutral-300 font-mono">
                    {st.step}
                  </span>
                  <span className="text-xs text-neutral-500 font-medium">
                    {st.time}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-neutral-950 mb-2">
                  {st.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-100 text-xs text-neutral-400">
                Paso indispensable
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          10. PREGUNTAS FRECUENTES (FAQs)
      ======================================================== */}
      <section id="faq" className="py-24 px-6 max-w-3xl mx-auto border-t editorial-border">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-3 text-center">
            Dudas Comunes
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 text-center mb-10">
            Preguntas frecuentes
          </h2>
          <div className="divide-y editorial-border">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="py-4">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left flex items-center justify-between text-sm sm:text-base font-semibold text-neutral-900 hover:text-black cursor-pointer gap-4"
                >
                  <span>{faq.q}</span>
                  {openFaq === i ? (
                    <Minus className="w-4 h-4 text-neutral-500 shrink-0" />
                  ) : (
                    <Plus className="w-4 h-4 text-neutral-400 shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed pr-8">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          11. CONTACTO & FORMULARIO (Estilo Consultancy)
      ======================================================== */}
      <section id="contacto" className="py-24 px-6 max-w-5xl mx-auto border-t editorial-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-3">
              Contacto
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 leading-tight">
              Hablemos de tu proyecto.
            </h2>
            <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
              Escribinos hoy para contarnos qué necesitás. Te respondemos con claridad, ideas concretas y un presupuesto a tu medida.
            </p>

            <div className="mt-8 flex flex-col gap-4 text-sm text-neutral-700">
              <a
                href={`${WHATSAPP_BASE_URL}?text=Hola%20LB%20STUDIO%2C%20quisiera%20hacerles%20una%20consulta.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-black transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span>WhatsApp: +54 9 11 3938-7373</span>
              </a>

              <div className="flex items-center gap-3 text-neutral-600">
                <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900">
                  <Clock className="w-4 h-4" />
                </div>
                <span>Lunes a Sábados de 9:00 a 20:00 hs</span>
              </div>

              <div className="flex items-center gap-3 text-neutral-600">
                <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Buenos Aires, Argentina (Atención online a todo el país)</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <form
              onSubmit={handleFormSubmit}
              className="editorial-card p-8 rounded-2xl flex flex-col gap-5"
            >
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">
                  Tu Nombre
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Juan Pérez"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 border editorial-border text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">
                  Tu Negocio o Rubro
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Odontología / Taller mecánico / Indumentaria"
                  value={formBusiness}
                  onChange={(e) => setFormBusiness(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 border editorial-border text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">
                  ¿Qué te gustaría que tenga tu página web?
                </label>
                <textarea
                  rows={3}
                  placeholder="Contanos brevemente qué querés lograr o qué dudas tenés..."
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 border editorial-border text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-black text-white font-medium text-sm py-3.5 px-6 rounded-full transition-all duration-200 cursor-pointer"
              >
                <span>Enviar consulta por WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-neutral-400" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ========================================================
          12. FOOTER (Sobrio, editorial)
      ======================================================== */}
      <footer className="border-t editorial-border py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="max-w-sm">
            <span className="font-extrabold text-lg tracking-tight text-neutral-950 block mb-2">
              LB STUDIO
            </span>
            <p className="text-neutral-500 text-xs leading-relaxed mb-4">
              Desarrollo de páginas web comerciales para comercios, profesionales y emprendedores de toda Argentina.
            </p>
            <p className="text-xs text-neutral-400">
              © 2026 LB STUDIO · Presencia Digital. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 text-xs text-neutral-600">
            <span className="font-semibold text-neutral-950 uppercase tracking-wider mb-1">
              Atención Online
            </span>
            <span>Lunes a Sábados de 9:00 a 20:00 hs</span>
            <a
              href={`${WHATSAPP_BASE_URL}?text=Hola%20LB%20STUDIO%2C%20quisiera%20hacerles%20una%20consulta.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-950 font-semibold hover:underline"
            >
              +54 9 11 3938-7373
            </a>
          </div>
        </div>
      </footer>

      {/* ========================================================
          BOTÓN FLOTANTE DISCRETO (Sin verde chillón)
      ======================================================== */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={`${WHATSAPP_BASE_URL}?text=Hola%20LB%20STUDIO%2C%20quiero%20hacerles%20una%20consulta%20por%20una%20p%C3%A1gina%20web.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-black text-white text-xs font-medium px-4 py-3 rounded-full shadow-xl transition-all hover:scale-103"
          aria-label="Contactar por WhatsApp"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Consultar por WhatsApp</span>
        </a>
      </div>

      {/* ========================================================
          MODAL INTERACTIVO DE FICHA DE PROYECTO
      ======================================================== */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-white rounded-2xl overflow-hidden shadow-2xl border editorial-border">
            <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-neutral-800 flex items-center justify-center hover:bg-white cursor-pointer shadow-sm"
                aria-label="Cerrar modal"
              >
                <X className="w-4 h-4" />
              </button>
              <span className="absolute bottom-3 left-4 text-xs font-medium px-2.5 py-1 rounded-md bg-white/95 text-neutral-800 shadow-xs">
                {selectedProject.category}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-neutral-950 mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-5">
                {selectedProject.desc}
              </p>

              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                Puntos destacados:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {selectedProject.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-xs text-neutral-700">
                    <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t editorial-border flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-neutral-500">
                  ¿Querés una web similar para tu negocio?
                </span>
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-black text-white font-medium text-xs px-5 py-2.5 rounded-full"
                >
                  <span>Pedir presupuesto</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
