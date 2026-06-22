import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Trayectoria Profesional | Camilo Largo Puentes",
  description:
    "Conozca la trayectoria profesional de Camilo Largo Puentes: abogado especialista en Derecho Urbanístico (Universidad del Rosario), Magíster en Derecho Ambiental (Universidad de Palermo, Buenos Aires) y avaluador registrado en el RAA de la ANA.",
};

const CREDENCIALES = [
  {
    sigla: "Ab.",
    titulo: "Abogado",
    sub: "Formación jurídica integral",
    institucion: null,
    pais: null,
    tipo: "principal",
  },
  {
    sigla: "Esp.",
    titulo: "Especialista en Derecho Urbanístico",
    sub: "Planificación urbana y gestión del territorio",
    institucion: "Universidad del Rosario",
    pais: "Bogotá, Colombia",
    eslogan: "Nova et Vetera",
    tipo: "universidad",
  },
  {
    sigla: "Mg.",
    titulo: "Magíster en Derecho Ambiental",
    sub: "Sostenibilidad y normativa ambiental",
    institucion: "Universidad de Palermo",
    pais: "Buenos Aires, Argentina",
    eslogan: "La universidad que hace falta",
    tipo: "universidad",
  },
  {
    sigla: "Téc.",
    titulo: "Técnico Laboral en Avalúos",
    sub: "Valoración técnica por competencias",
    institucion: null,
    pais: null,
    tipo: "tecnico",
  },
] as const;

export default function TrayectoriaPage() {
  return (
    <>
      {/* ── Encabezado ── */}
      <div className="bg-azul pt-32 sm:pt-36 lg:pt-44 pb-14 sm:pb-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-xs font-semibold tracking-widest uppercase text-dorado mb-3">
            Trayectoria profesional
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Camilo Largo Puentes
          </h1>
          <p className="font-sans text-base text-white/65 mt-4 max-w-2xl leading-relaxed">
            Abogado especializado en Derecho Urbanístico, Magíster en Derecho
            Ambiental y avaluador certificado, con una práctica orientada al
            acompañamiento estratégico en asuntos inmobiliarios, territoriales y
            patrimoniales.
          </p>
          <div className="mt-5 h-[2px] w-12 bg-dorado" />
        </div>
      </div>

      {/* ── Sección principal: bio + credenciales ── */}
      <section className="py-20 lg:py-28 bg-gris-suave">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* ── Izquierda: perfil biográfico ── */}
            <div>
              {/* Placeholder foto profesional */}
              <div className="w-full aspect-[4/3] bg-azul/8 border-2 border-dashed border-azul/20 rounded-sm flex flex-col items-center justify-center mb-8 text-center px-6">
                <div className="w-16 h-16 rounded-full bg-azul/10 flex items-center justify-center mb-3">
                  <span className="font-serif text-2xl font-semibold text-azul/40">CLP</span>
                </div>
                <p className="font-sans text-xs text-azul/40 leading-relaxed">
                  Fotografía profesional<br />
                  <span className="text-dorado/60">Por agregar</span>
                </p>
              </div>

              <p className="font-sans text-xs font-semibold tracking-widest uppercase text-dorado mb-5">
                Perfil profesional
              </p>

              <div className="space-y-4 font-sans text-base text-gris-texto/80 leading-relaxed">
                <p>
                  Camilo Largo Puentes es abogado especialista en Derecho
                  Urbanístico (Universidad del Rosario), Magíster en Derecho
                  Ambiental (Universidad de Palermo, Buenos Aires) y Técnico
                  Laboral por Competencias en Avalúos, con Registro Abierto de
                  Avaluadores (RAA) de la Asociación Nacional de Avaluadores (ANA).
                </p>
                <p>
                  Su práctica integra conocimiento jurídico avanzado, visión
                  territorial interdisciplinaria y análisis técnico de valoración
                  para acompañar procesos inmobiliarios, urbanísticos, ambientales
                  y patrimoniales con la precisión que cada caso demanda.
                </p>
                <p>
                  La especialización en Derecho Urbanístico le permite comprender
                  y aplicar los instrumentos de planeación, gestión y financiación
                  del suelo que rigen el desarrollo urbano, ofreciendo orientación
                  precisa en licencias, cambios de uso, planes parciales y
                  macroproyectos.
                </p>
                <p>
                  La Maestría en Derecho Ambiental de la Universidad de Palermo
                  (Argentina) incorpora una perspectiva de sostenibilidad y
                  cumplimiento normativo esencial en contextos donde el desarrollo
                  territorial debe articularse con la protección del ambiente.
                </p>
                <p>
                  La certificación en Avalúos bajo el Registro RAA de la ANA
                  otorga herramientas técnicas de valoración objetiva que
                  complementan el análisis jurídico, cubriendo inmuebles,
                  maquinaria, vehículos, recursos naturales, activos intangibles
                  y peritajes judiciales.
                </p>
              </div>

              {/* Principio profesional — sin comillas */}
              <div className="mt-8 p-6 border-l-2 border-dorado bg-white">
                <p className="font-sans text-[10px] font-semibold tracking-widest uppercase text-dorado mb-3">
                  Principio profesional
                </p>
                <p className="font-serif text-lg text-azul leading-snug">
                  La seguridad jurídica en el territorio es el fundamento
                  de cualquier inversión exitosa.
                </p>
                <p className="font-sans text-xs text-gris-texto/45 mt-3">
                  Camilo Largo Puentes · Abogado Especialista
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 font-sans text-sm font-semibold bg-dorado text-white px-6 py-3 rounded-sm hover:bg-dorado-hover transition-colors group"
                >
                  Solicitar asesoría o cotización
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="/servicios"
                  className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-azul border border-azul px-6 py-3 rounded-sm hover:bg-azul hover:text-white transition-all"
                >
                  Ver servicios
                </Link>
              </div>
            </div>

            {/* ── Derecha: credenciales + RAA ── */}
            <div>
              <p className="font-sans text-xs font-semibold tracking-widest uppercase text-dorado mb-6">
                Formación y credenciales
              </p>

              <div className="space-y-4">
                {/* Credencial: Abogado */}
                <div className="p-5 rounded-sm border border-azul bg-azul text-white flex items-start gap-4">
                  <div className="w-10 h-10 bg-dorado/20 rounded-sm flex items-center justify-center shrink-0">
                    <span className="font-serif text-dorado font-bold text-sm">Ab.</span>
                  </div>
                  <div>
                    <div className="font-serif text-base font-semibold text-white leading-tight">
                      Abogado
                    </div>
                    <div className="font-sans text-xs text-white/65 mt-0.5">
                      Formación jurídica integral
                    </div>
                  </div>
                </div>

                {/* Credencial: Especialista — Universidad del Rosario */}
                <div className="p-5 rounded-sm border border-verde bg-verde text-white">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-dorado/20 rounded-sm flex items-center justify-center shrink-0">
                      <span className="font-serif text-dorado font-bold text-sm">Esp.</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-serif text-base font-semibold text-white leading-tight">
                        Especialista en Derecho Urbanístico
                      </div>
                      <div className="font-sans text-xs text-white/65 mt-0.5">
                        Planificación urbana y gestión del territorio
                      </div>
                    </div>
                  </div>
                  {/* Universidad */}
                  <div className="mt-4 pt-3 border-t border-white/15 flex items-center gap-3">
                    {/* Logo placeholder — reemplazar con <Image src="/logo-universidad-rosario.png" .../> */}
                    <div className="w-8 h-8 bg-white/15 rounded-sm flex items-center justify-center shrink-0">
                      <span className="font-serif text-white/80 font-bold text-xs">UR</span>
                    </div>
                    <div>
                      <div className="font-sans text-xs font-semibold text-white">
                        Universidad del Rosario
                      </div>
                      <div className="font-sans text-[10px] text-white/55">
                        Bogotá, Colombia · Nova et Vetera
                      </div>
                    </div>
                  </div>
                </div>

                {/* Credencial: Magíster — Universidad de Palermo */}
                <div className="p-5 rounded-sm border border-gris-suave bg-white">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-azul/8 rounded-sm flex items-center justify-center shrink-0">
                      <span className="font-serif text-azul font-bold text-sm">Mg.</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-serif text-base font-semibold text-azul leading-tight">
                        Magíster en Derecho Ambiental
                      </div>
                      <div className="font-sans text-xs text-gris-texto/60 mt-0.5">
                        Sostenibilidad y normativa ambiental
                      </div>
                    </div>
                  </div>
                  {/* Universidad */}
                  <div className="mt-4 pt-3 border-t border-gris-suave flex items-center gap-3">
                    {/* Logo placeholder — reemplazar con <Image src="/logo-universidad-palermo.png" .../> */}
                    <div className="w-8 h-8 bg-azul/8 rounded-sm flex items-center justify-center shrink-0">
                      <span className="font-serif text-azul font-bold text-xs">UP</span>
                    </div>
                    <div>
                      <div className="font-sans text-xs font-semibold text-azul">
                        Universidad de Palermo
                      </div>
                      <div className="font-sans text-[10px] text-gris-texto/50">
                        Buenos Aires, Argentina · La universidad que hace falta
                      </div>
                    </div>
                  </div>
                </div>

                {/* Credencial: Técnico Laboral */}
                <div className="p-5 rounded-sm border border-gris-suave bg-white flex items-start gap-4">
                  <div className="w-10 h-10 bg-gris-suave rounded-sm flex items-center justify-center shrink-0">
                    <span className="font-serif text-dorado font-bold text-xs">Téc.</span>
                  </div>
                  <div>
                    <div className="font-serif text-base font-semibold text-azul leading-tight">
                      Técnico Laboral en Avalúos
                    </div>
                    <div className="font-sans text-xs text-gris-texto/60 mt-0.5">
                      Valoración técnica por competencias laborales
                    </div>
                  </div>
                </div>

                {/* ── RAA Badge — destacado ── */}
                <div className="p-5 rounded-sm border-2 border-dorado/40 bg-dorado/5 flex items-center gap-4">
                  <div className="w-14 h-14 bg-dorado rounded-sm flex flex-col items-center justify-center shrink-0">
                    <span className="font-sans text-white font-bold text-xs tracking-wider leading-none">
                      RAA
                    </span>
                    <span className="font-sans text-white/70 text-[8px] tracking-wider mt-0.5">
                      ANA
                    </span>
                  </div>
                  <div>
                    <div className="font-serif text-base font-semibold text-azul leading-tight">
                      Registro Abierto de Avaluadores
                    </div>
                    <div className="font-sans text-xs text-gris-texto/65 mt-0.5 leading-relaxed">
                      Asociación Nacional de Avaluadores (ANA) · Colombia
                    </div>
                    <Link
                      href="/avaluos"
                      className="inline-flex items-center gap-1 font-sans text-xs font-semibold text-dorado hover:text-dorado-hover transition-colors mt-2"
                    >
                      Ver catálogo de avalúos
                      <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="¿Listo para resolver su caso?"
        subtitle="Solicite una orientación inicial y conozca la ruta jurídica, técnica o de valoración más adecuada para su necesidad."
      />
    </>
  );
}
