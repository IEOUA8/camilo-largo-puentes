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
    titulo: "Avalúos y Valoración de Bienes",
    descripcion:
      "Servicios técnicos de avalúo certificados bajo el Registro Abierto de Avaluadores (RAA) de la Asociación Nacional de Avaluadores (ANA). Cobertura de inmuebles, maquinaria, vehículos, recursos naturales, activos intangibles y peritajes judiciales.",
    subservicios: [
      "Bienes inmuebles urbanos (casas, aptos, locales, bodegas)",
      "Predios rurales y fincas",
      "Maquinaria y equipo industrial",
      "Vehículos automotores",
      "Recursos naturales y activos ambientales",
      "Activos intangibles — marcas, patentes y franquicias",
      "Peritajes judiciales — daños y perjuicios",
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

export const AVALUOS_CATEGORIAS = [
  {
    id: "inmuebles-urbanos",
    titulo: "Bienes Inmuebles Urbanos",
    descripcion:
      "Valoración técnica de inmuebles en zonas urbanas para cualquier propósito jurídico, comercial o patrimonial.",
    items: [
      "Apartamentos y casas de habitación",
      "Locales comerciales y consultorios",
      "Oficinas y centros empresariales",
      "Bodegas e inmuebles industriales",
      "Lotes urbanos y urbanizables",
      "Edificios y propiedad horizontal",
      "Centros comerciales",
    ],
  },
  {
    id: "inmuebles-rurales",
    titulo: "Bienes Inmuebles Rurales",
    descripcion:
      "Avalúos de predios agrícolas, agropecuarios, forestales y de uso mixto en zonas rurales.",
    items: [
      "Predios rurales y agropecuarios",
      "Fincas de recreo y haciendas",
      "Lotes rurales y parcelaciones",
      "Terrenos de uso forestal",
      "Mejoras, cultivos y plantaciones",
    ],
  },
  {
    id: "maquinaria",
    titulo: "Maquinaria y Equipo",
    descripcion:
      "Valoración de maquinaria industrial, equipos especializados e instalaciones productivas.",
    items: [
      "Maquinaria industrial y de producción",
      "Equipos médicos y hospitalarios",
      "Equipos tecnológicos y de cómputo",
      "Herramientas y equipos especializados",
      "Plantas y líneas de producción",
    ],
  },
  {
    id: "vehiculos",
    titulo: "Vehículos Automotores",
    descripcion:
      "Avalúo de toda clase de vehículos: particulares, comerciales, de carga y maquinaria vial.",
    items: [
      "Vehículos particulares",
      "Vehículos comerciales y de carga",
      "Motocicletas",
      "Maquinaria vial y de construcción",
      "Maquinaria agrícola",
      "Flota vehicular empresarial",
    ],
  },
  {
    id: "recursos-naturales",
    titulo: "Recursos Naturales y Medio Ambiente",
    descripcion:
      "Valoración de activos ambientales, recursos naturales y cuantificación de daño ecológico.",
    items: [
      "Recursos hídricos y fuentes de agua",
      "Recursos forestales y maderables",
      "Activos ambientales y servicios ecosistémicos",
      "Reservas naturales y áreas de conservación",
      "Valoración de daño ambiental",
    ],
  },
  {
    id: "intangibles",
    titulo: "Activos Intangibles",
    descripcion:
      "Valoración de marcas, patentes, franquicias y otros activos de conocimiento e innovación.",
    items: [
      "Marcas y nombres comerciales",
      "Patentes e inventos",
      "Franquicias y licencias",
      "Software y propiedad intelectual",
      "Goodwill empresarial",
    ],
  },
  {
    id: "peritajes",
    titulo: "Peritajes Judiciales",
    descripcion:
      "Dictámenes técnicos especializados para procesos judiciales, arbitrales y administrativos.",
    items: [
      "Daños y perjuicios patrimoniales",
      "Lucro cesante y daño emergente",
      "Perjuicios por afectación de inmuebles",
      "Dictámenes técnicos para litigios",
      "Conceptos de valor para procesos judiciales",
    ],
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
  { href: "/sobre-camilo", label: "Trayectoria" },
  { href: "/servicios", label: "Servicios" },
  { href: "/avaluos", label: "Avalúos" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const WHATSAPP_NUMBER = "573000000000"; // TODO: Actualizar con número real
export const WHATSAPP_MESSAGE =
  "Hola Camilo, me gustaría solicitar una asesoría.";
export const CORREO_CONTACTO = "contacto@camilolargo.com"; // TODO: Actualizar
export const TELEFONO = "+57 300 000 0000"; // TODO: Actualizar con número real
export const CIUDAD = "Bogotá D.C., Colombia";
export const DIRECCION_OFICINA = "Bogotá D.C., Colombia"; // TODO: Agregar dirección exacta de oficina

// TODO: Reemplazar con la URL de embed real — obtener desde Google Maps > Compartir > Insertar un mapa
export const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127395.59!2d-74.1990!3d4.6097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2sBogot%C3%A1%2C+Colombia!5e0!3m2!1ses!2sco!4v1700000000000";
export const GOOGLE_MAPS_LINK =
  "https://maps.google.com/?q=Bogota,Colombia"; // TODO: Actualizar con enlace a ubicación exacta

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
