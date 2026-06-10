import type { Metadata } from "next";
import { Award, BookOpen, Scale, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Sobre Camilo Largo Puentes | Abogado Especialista",
  description:
    "Conozca a Camilo Largo Puentes, abogado especialista en Derecho Urbanístico, Magíster en Derecho Ambiental y Técnico en Avalúos.",
};

const CREDENCIALES = [
  {
    icono: Scale,
    titulo: "Abogado",
    sub: "Formación jurídica integral",
    color: "bg-azul border-azul text-white",
    iconColor: "text-dorado",
  },
  {
    icono: BookOpen,
    titulo: "Especialista en Derecho Urbanístico",
    sub: "Planificación y gestión del territorio",
    color: "bg-verde border-verde text-white",
    iconColor: "text-dorado",
  },
  {
    icono: Award,
    titulo: "Magíster en Derecho Ambiental",
    sub: "Sostenibilidad y normativa ambiental",
    color: "bg-white border-gris-suave",
    iconColor: "text-dorado",
  },
  {
    icono: Award,
    titulo: "Técnico Laboral en Avalúos",
    sub: "Valoración técnica de inmuebles",
    color: "bg-white border-gris-suave",
    iconColor: "text-dorado",
  },
  {
    icono: Briefcase,
    titulo: "Consultor Inmobiliario",
    sub: "Soluciones jurídicas integrales",
    color: "bg-white border-gris-suave",
    iconColor: "text-dorado",
  },
];

export default function SobreCamiloPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-azul pt-32 sm:pt-36 lg:pt-44 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-xs font-semibold tracking-widest uppercase text-dorado mb-3">
            Sobre el abogado
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
            Camilo Largo Puentes
          </h1>
          <div className="mt-4 h-[2px] w-12 bg-dorado" />
        </div>
      </div>

      {/* Bio + credentials */}
      <section className="py-20 lg:py-28 bg-gris-suave">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: bio */}
            <div>
              <p className="font-sans text-xs font-semibold tracking-widest uppercase text-dorado mb-6">
                Perfil profesional
              </p>
              <div className="space-y-5 font-sans text-base text-gris-texto/80 leading-relaxed">
                <p>
                  Camilo Largo Puentes es abogado especialista en Derecho Urbanístico,
                  Magíster en Derecho Ambiental y Técnico Laboral por Competencias en
                  Avalúos. Su práctica integra conocimiento jurídico, visión territorial
                  y análisis técnico para acompañar procesos inmobiliarios, urbanísticos,
                  ambientales y patrimoniales.
                </p>
                <p>
                  Con una trayectoria construida sobre la sólida combinación de formación
                  jurídica avanzada y conocimiento técnico del territorio, ha desarrollado
                  una práctica profesional centrada en brindar acompañamiento estratégico
                  a personas naturales, empresas e instituciones que enfrentan decisiones
                  complejas en materia inmobiliaria, urbanística y ambiental.
                </p>
                <p>
                  Su especialización en Derecho Urbanístico le permite comprender y
                  aplicar los instrumentos de planeación, gestión y financiación del suelo
                  que rigen el desarrollo urbano en Colombia, ofreciendo orientación
                  precisa ante situaciones relacionadas con licencias, cambios de uso,
                  planes parciales, macroproyectos y todo tipo de actuaciones urbanísticas.
                </p>
                <p>
                  El Magíster en Derecho Ambiental enriquece su práctica con una
                  perspectiva de sostenibilidad y cumplimiento normativo indispensable
                  en el contexto actual, donde el desarrollo territorial debe articularse
                  con la protección de los recursos naturales.
                </p>
                <p>
                  La formación técnica en Avalúos le otorga herramientas de valoración
                  objetiva que complementan el análisis jurídico, permitiéndole ofrecer
                  conceptos técnicos sólidos sobre el valor de mercado de inmuebles en
                  contextos patrimoniales, litigiosos o transaccionales.
                </p>
              </div>

              {/* Quote */}
              <div className="mt-8 p-5 border-l-2 border-dorado bg-white">
                <p className="font-serif text-base italic text-gris-texto/70 leading-relaxed">
                  "La seguridad jurídica en el territorio es el fundamento de
                  cualquier inversión exitosa."
                </p>
                <p className="font-sans text-xs text-dorado font-medium mt-2 tracking-wide">
                  — Camilo Largo Puentes
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 font-sans text-sm font-semibold bg-dorado text-white px-6 py-3 rounded-sm hover:bg-dorado-hover transition-colors group"
                >
                  Solicitar asesoría
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/servicios"
                  className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-azul border border-azul px-6 py-3 rounded-sm hover:bg-azul hover:text-white transition-all"
                >
                  Ver servicios
                </Link>
              </div>
            </div>

            {/* Right: credentials */}
            <div>
              <p className="font-sans text-xs font-semibold tracking-widest uppercase text-dorado mb-6">
                Formación y credenciales
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CREDENCIALES.map((cred) => {
                  const Icon = cred.icono;
                  return (
                    <div
                      key={cred.titulo}
                      className={`p-5 rounded-sm border ${cred.color}`}
                    >
                      <Icon size={18} className={`mb-3 ${cred.iconColor}`} />
                      <div
                        className={`font-serif text-base font-semibold leading-tight mb-1 ${
                          cred.color.includes("bg-white") ? "text-azul" : "text-white"
                        }`}
                      >
                        {cred.titulo}
                      </div>
                      <div
                        className={`font-sans text-xs leading-tight ${
                          cred.color.includes("bg-white")
                            ? "text-gris-texto/60"
                            : "text-white/70"
                        }`}
                      >
                        {cred.sub}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="¿Listo para resolver su caso?"
        subtitle="Solicite una orientación inicial y conozca la ruta más adecuada para su necesidad jurídica, territorial o inmobiliaria."
      />
    </>
  );
}
