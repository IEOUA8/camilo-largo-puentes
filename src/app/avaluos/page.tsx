import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  MapPin,
  Settings,
  Car,
  Leaf,
  Briefcase,
  Scale,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";
import { AVALUOS_CATEGORIAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Avalúos y Valoración de Bienes | Camilo Largo Puentes",
  description:
    "Servicios técnicos de avalúo certificados bajo el Registro Abierto de Avaluadores (RAA) de la ANA. Inmuebles, maquinaria, vehículos, activos intangibles y peritajes judiciales.",
};

const ICONOS: Record<string, React.ElementType> = {
  "inmuebles-urbanos": Building2,
  "inmuebles-rurales": MapPin,
  maquinaria: Settings,
  vehiculos: Car,
  "recursos-naturales": Leaf,
  intangibles: Briefcase,
  peritajes: Scale,
};

const COLORES: Record<number, { bg: string; icon: string; border: string }> = {
  0: { bg: "bg-azul", icon: "text-dorado", border: "border-azul" },
  1: { bg: "bg-verde", icon: "text-dorado", border: "border-verde" },
  2: { bg: "bg-white", icon: "text-dorado", border: "border-gris-suave" },
  3: { bg: "bg-white", icon: "text-dorado", border: "border-gris-suave" },
  4: { bg: "bg-white", icon: "text-dorado", border: "border-gris-suave" },
  5: { bg: "bg-white", icon: "text-dorado", border: "border-gris-suave" },
  6: { bg: "bg-dorado/5", icon: "text-dorado", border: "border-dorado/30" },
};

export default function AvaluosPage() {
  return (
    <>
      {/* ── Encabezado ── */}
      <div className="bg-azul pt-32 sm:pt-36 lg:pt-44 pb-14 sm:pb-18 overflow-hidden relative">
        {/* Marca de agua mini */}
        <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
          <Scale size={320} strokeWidth={0.4} className="text-white" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-xs font-semibold tracking-widest uppercase text-dorado mb-3">
            Catálogo de servicios
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Avalúos y Valoración<br className="hidden sm:block" /> de Bienes
          </h1>
          <p className="font-sans text-base text-white/65 mt-4 max-w-2xl leading-relaxed">
            Servicios técnicos de avalúo que cubren la totalidad de categorías del
            Registro Abierto de Avaluadores (RAA) de la Asociación Nacional de
            Avaluadores (ANA). Desde bienes inmuebles hasta peritajes judiciales.
          </p>
          <div className="mt-5 h-[2px] w-12 bg-dorado" />

          {/* RAA Badge */}
          <div className="mt-8 inline-flex items-center gap-4 bg-white/8 border border-white/15 rounded-sm px-5 py-3">
            <div className="w-10 h-10 bg-dorado rounded-sm flex flex-col items-center justify-center shrink-0">
              <span className="font-sans text-white font-bold text-xs tracking-wider leading-none">RAA</span>
              <span className="font-sans text-white/70 text-[7px] mt-0.5">ANA</span>
            </div>
            <div>
              <div className="font-sans text-sm font-semibold text-white">
                Registro Abierto de Avaluadores
              </div>
              <div className="font-sans text-xs text-white/55 mt-0.5">
                Asociación Nacional de Avaluadores · Colombia
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Intro ── */}
      <section className="py-16 bg-crema border-b border-gris-suave">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { n: "7", label: "Categorías certificadas RAA" },
              { n: "ANA", label: "Asociación Nacional de Avaluadores" },
              { n: "100%", label: "Informes técnicos con respaldo legal" },
            ].map((stat) => (
              <div key={stat.label} className="p-6 bg-white border border-gris-suave rounded-sm">
                <div className="font-serif text-3xl font-semibold text-dorado mb-1">
                  {stat.n}
                </div>
                <div className="font-sans text-sm text-gris-texto/65 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Catálogo de categorías RAA ── */}
      <section className="py-20 lg:py-28 bg-gris-suave">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="font-sans text-xs font-semibold tracking-widest uppercase text-dorado mb-3">
              Categorías del Registro RAA
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-azul">
              Catálogo completo de avalúos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AVALUOS_CATEGORIAS.map((cat, i) => {
              const Icon = ICONOS[cat.id] ?? Scale;
              const col = COLORES[i] ?? COLORES[2];
              const isDark = col.bg === "bg-azul" || col.bg === "bg-verde";

              return (
                <div
                  key={cat.id}
                  id={cat.id}
                  className={`rounded-sm border ${col.border} ${col.bg} p-7 flex flex-col`}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <Icon
                      size={20}
                      className={`${col.icon} shrink-0 mt-0.5`}
                    />
                    <div>
                      <h3
                        className={`font-serif text-xl font-semibold leading-tight ${
                          isDark ? "text-white" : "text-azul"
                        }`}
                      >
                        {cat.titulo}
                      </h3>
                    </div>
                  </div>

                  <p
                    className={`font-sans text-sm leading-relaxed mb-5 ${
                      isDark ? "text-white/65" : "text-gris-texto/65"
                    }`}
                  >
                    {cat.descripcion}
                  </p>

                  <ul className="space-y-2 flex-1">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className={`flex items-start gap-2 font-sans text-sm ${
                          isDark ? "text-white/80" : "text-gris-texto/80"
                        }`}
                      >
                        <CheckCircle
                          size={13}
                          className={`${col.icon} shrink-0 mt-0.5`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-current/10">
                    <Link
                      href="/contacto"
                      className={`inline-flex items-center gap-1.5 font-sans text-xs font-semibold transition-colors group ${
                        isDark
                          ? "text-dorado hover:text-dorado-hover"
                          : "text-dorado hover:text-dorado-hover"
                      }`}
                    >
                      Solicitar cotización
                      <ArrowRight
                        size={12}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Nota sobre peritajes judiciales ── */}
      <section className="py-16 bg-azul">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Scale size={36} className="text-dorado mx-auto mb-5" />
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-white mb-4">
            Peritajes judiciales especializados
          </h2>
          <p className="font-sans text-base text-white/65 leading-relaxed max-w-2xl mx-auto mb-8">
            Los peritajes sobre daños y perjuicios requieren la combinación de
            conocimiento técnico de avalúos con formación jurídica avanzada.
            Camilo Largo Puentes cuenta con ambas, ofreciendo dictámenes técnicos
            sólidos y con respaldo para cualquier instancia judicial o arbitral.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 font-sans font-semibold text-sm bg-dorado text-white px-7 py-4 rounded-sm hover:bg-dorado-hover transition-colors tracking-wide group"
          >
            Solicitar peritaje
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <CTABanner
        title="¿Necesita un avalúo o cotización?"
        subtitle="Contáctenos con los detalles del bien a valorar y le enviaremos una propuesta técnica."
      />
    </>
  );
}
