export const SERVICIOS = [
  {
    id: "derecho-urbanistico",
    titulo: "Derecho Urbanístico",
    descripcion:
      "Asesoría especializada en normativa urbana, licencias, uso del suelo, instrumentos de planeación y gestión de proyectos urbanísticos.",
    subservicios: [
      "Licencias urbanísticas",
      "Uso del suelo",
      "Planes de Ordenamiento Territorial",
      "Normativa urbana",
      "Instrumentos de gestión del suelo",
      "Viabilidad jurídica de proyectos",
    ],
    icono: "building",
    color: "azul",
  },
  {
    id: "derecho-ambiental",
    titulo: "Derecho Ambiental",
    descripcion:
      "Acompañamiento jurídico en asuntos ambientales, sostenibilidad, cumplimiento normativo y gestión de riesgos asociados al desarrollo territorial.",
    subservicios: [
      "Normativa ambiental",
      "Permisos ambientales",
      "Gestión de riesgos ambientales",
      "Desarrollo sostenible",
      "Cumplimiento normativo",
      "Conflictos ambientales",
    ],
    icono: "leaf",
    color: "verde",
  },
  {
    id: "avaluos",
    titulo: "Avalúos y Valoración",
    descripcion:
      "Apoyo técnico en valoración de bienes inmuebles para decisiones patrimoniales, comerciales, jurídicas e inmobiliarias.",
    subservicios: [
      "Avalúos comerciales",
      "Valoración de inmuebles",
      "Análisis patrimonial",
      "Avalúos para procesos jurídicos",
      "Estudios de valor de mercado",
      "Conceptos técnicos",
    ],
    icono: "scale",
    color: "dorado",
  },
  {
    id: "gestion-territorial",
    titulo: "Gestión Territorial",
    descripcion:
      "Consultoría en procesos de planeación, ordenamiento, gestión territorial y análisis estratégico del suelo.",
    subservicios: [
      "Ordenamiento territorial",
      "Gestión del suelo",
      "Planeación territorial",
      "Análisis de proyectos",
      "Desarrollo urbano sostenible",
      "Estudios de viabilidad territorial",
    ],
    icono: "map",
    color: "verde",
  },
  {
    id: "consultoria-inmobiliaria",
    titulo: "Consultoría Inmobiliaria",
    descripcion:
      "Soluciones jurídicas y técnicas para inversionistas, propietarios, desarrolladores y empresas que requieren seguridad en sus decisiones inmobiliarias.",
    subservicios: [
      "Estudios de títulos",
      "Análisis de riesgos",
      "Estructuración jurídica",
      "Viabilidad inmobiliaria",
      "Acompañamiento en compraventa",
      "Revisión documental",
    ],
    icono: "home",
    color: "azul",
  },
] as const;

export const PROCESO_PASOS = [
  {
    numero: "01",
    titulo: "Diagnóstico",
    descripcion:
      "Revisión inicial de la necesidad jurídica, técnica o inmobiliaria.",
  },
  {
    numero: "02",
    titulo: "Análisis",
    descripcion:
      "Evaluación normativa, documental, territorial o patrimonial.",
  },
  {
    numero: "03",
    titulo: "Estrategia",
    descripcion:
      "Definición de la ruta más conveniente para el caso.",
  },
  {
    numero: "04",
    titulo: "Gestión",
    descripcion:
      "Acompañamiento jurídico y técnico durante el proceso.",
  },
  {
    numero: "05",
    titulo: "Seguimiento",
    descripcion:
      "Comunicación y revisión constante hasta el cierre.",
  },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-camilo", label: "Sobre Camilo" },
  { href: "/servicios", label: "Servicios" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const WHATSAPP_NUMBER = "573000000000";
export const WHATSAPP_MESSAGE =
  "Hola Camilo, me gustaría solicitar una asesoría.";
export const CORREO_CONTACTO = "contacto@camilolargo.com";
export const TELEFONO = "+57 300 000 0000";
export const CIUDAD = "Colombia";

export const BLOG_ARTICULOS = [
  {
    slug: "derecho-urbanistico-asesoria",
    titulo:
      "¿Qué es el derecho urbanístico y cuándo necesita asesoría especializada?",
    categoria: "Derecho Urbanístico",
    resumen:
      "El derecho urbanístico regula la organización del territorio y el uso del suelo. Conozca cuándo es necesaria una asesoría especializada.",
    fecha: "2024-12-01",
  },
  {
    slug: "uso-del-suelo-proyectos-inmobiliarios",
    titulo: "Importancia del uso del suelo en proyectos inmobiliarios.",
    categoria: "Gestión Territorial",
    resumen:
      "El uso del suelo determina qué actividades se pueden realizar en un predio. Antes de invertir, conozca cómo verificarlo.",
    fecha: "2024-11-15",
  },
  {
    slug: "avaluos-comerciales-que-son",
    titulo: "Avalúos comerciales: qué son y para qué sirven.",
    categoria: "Avalúos",
    resumen:
      "Un avalúo comercial es la herramienta técnica que determina el valor real de mercado de un inmueble.",
    fecha: "2024-11-01",
  },
  {
    slug: "derecho-ambiental-desarrollo-inmobiliario",
    titulo: "Derecho ambiental y desarrollo inmobiliario sostenible.",
    categoria: "Derecho Ambiental",
    resumen:
      "El cumplimiento de la normativa ambiental no es solo una obligación legal, es una ventaja competitiva para proyectos inmobiliarios.",
    fecha: "2024-10-15",
  },
  {
    slug: "riesgos-juridicos-compra-inmueble",
    titulo: "Riesgos jurídicos antes de comprar un inmueble.",
    categoria: "Consultoría Inmobiliaria",
    resumen:
      "Antes de firmar cualquier contrato, es fundamental conocer los riesgos jurídicos que pueden afectar la inversión.",
    fecha: "2024-10-01",
  },
  {
    slug: "ordenamiento-territorial-propietarios",
    titulo: "Ordenamiento territorial: claves para propietarios e inversionistas.",
    categoria: "Gestión Territorial",
    resumen:
      "El ordenamiento territorial define las reglas del juego del desarrollo urbano. Comprenderlo es clave para cualquier decisión de inversión.",
    fecha: "2024-09-15",
  },
] as const;
