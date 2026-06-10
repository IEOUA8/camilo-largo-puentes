import type { Metadata } from "next";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CTABanner from "@/components/sections/CTABanner";
import ProcessSection from "@/components/sections/ProcessSection";
import { SERVICIOS } from "@/lib/constants";
import { Building2, Leaf, BarChart3, Map, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios | Camilo Largo Puentes",
  description:
    "Servicios especializados en derecho urbanístico, derecho ambiental, avalúos, gestión territorial y consultoría inmobiliaria integral.",
};

const ICONOS = { building: Building2, leaf: Leaf, scale: BarChart3, map: Map, home: Home };
const COLOR_MAP = {
  azul: "border-l-azul",
  verde: "border-l-verde",
  dorado: "border-l-dorado",
};

export default function ServiciosPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-azul pt-32 sm:pt-36 lg:pt-44 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-xs font-semibold tracking-widest uppercase text-dorado mb-3">
            Áreas de práctica
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
            Servicios especializados
          </h1>
          <p className="font-sans text-base text-white/70 mt-4 max-w-xl leading-relaxed">
            Asesoría integral en las áreas jurídicas, técnicas y territoriales
            que requiere su proyecto o inversión.
          </p>
          <div className="mt-5 h-[2px] w-12 bg-dorado" />
        </div>
      </div>

      <ServicesGrid showTitle={false} />

      {/* Detailed services */}
      <section className="py-20 bg-gris-suave">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICIOS.map((servicio) => {
            const Icon = ICONOS[servicio.icono as keyof typeof ICONOS];
            const borderColor = COLOR_MAP[servicio.color as keyof typeof COLOR_MAP];
            return (
              <div
                key={servicio.id}
                id={servicio.id}
                className={`bg-white p-8 rounded-sm border-l-4 ${borderColor} shadow-sm scroll-mt-24`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-gris-suave rounded-sm flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-dorado" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-semibold text-azul">
                      {servicio.titulo}
                    </h2>
                    <p className="font-sans text-sm text-gris-texto/70 mt-2 leading-relaxed">
                      {servicio.descripcion}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-dorado mb-4">
                    Servicios incluidos
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {servicio.subservicios.map((sub) => (
                      <li
                        key={sub}
                        className="flex items-center gap-2 font-sans text-sm text-gris-texto/80"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-dorado shrink-0" />
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <ProcessSection />

      <CTABanner
        title="¿En qué servicio podemos ayudarle?"
        subtitle="Contáctenos y le orientaremos sobre la ruta jurídica y técnica más adecuada para su caso."
      />
    </>
  );
}
