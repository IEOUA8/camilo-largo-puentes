"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building2,
  Leaf,
  BarChart3,
  Map,
  Home,
  ArrowRight,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { SERVICIOS } from "@/lib/constants";

const ICONOS = {
  building: Building2,
  leaf: Leaf,
  scale: BarChart3,
  map: Map,
  home: Home,
};

const COLOR_CLASSES = {
  azul: {
    icon: "text-azul",
    bg: "bg-azul/5",
    border: "border-azul/10",
    hover: "hover:border-azul/30",
  },
  verde: {
    icon: "text-verde",
    bg: "bg-verde/5",
    border: "border-verde/10",
    hover: "hover:border-verde/30",
  },
  dorado: {
    icon: "text-dorado",
    bg: "bg-dorado/5",
    border: "border-dorado/10",
    hover: "hover:border-dorado/30",
  },
};

export default function ServicesGrid({
  compact = false,
  showTitle = true,
}: {
  compact?: boolean;
  showTitle?: boolean;
}) {
  const displayServices = compact ? SERVICIOS.slice(0, 3) : SERVICIOS;

  return (
    <section className="py-20 lg:py-28 bg-crema">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {!compact && showTitle && (
          <SectionTitle
            eyebrow="Áreas de práctica"
            title="Servicios especializados"
            subtitle="Asesoría integral en las áreas jurídicas, técnicas y territoriales que requiere su proyecto o inversión."
          />
        )}

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${compact ? "" : ""}`}>
          {displayServices.map((servicio, i) => {
            const Icon = ICONOS[servicio.icono as keyof typeof ICONOS];
            const colors = COLOR_CLASSES[servicio.color as keyof typeof COLOR_CLASSES];

            return (
              <motion.div
                key={servicio.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
              >
                <div
                  className={`group h-full bg-white border ${colors.border} ${colors.hover} rounded-sm p-7 flex flex-col transition-all duration-300 hover:shadow-md`}
                >
                  <div className={`w-12 h-12 rounded-sm ${colors.bg} flex items-center justify-center mb-5`}>
                    <Icon size={22} className={colors.icon} />
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-azul mb-3 leading-tight">
                    {servicio.titulo}
                  </h3>

                  <p className="font-sans text-sm text-gris-texto/70 leading-relaxed flex-1 mb-5">
                    {servicio.descripcion}
                  </p>

                  {!compact && (
                    <ul className="mb-5 space-y-1">
                      {servicio.subservicios.slice(0, 3).map((sub) => (
                        <li
                          key={sub}
                          className="font-sans text-xs text-gris-texto/60 flex items-center gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-dorado shrink-0" />
                          {sub}
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link
                    href={`/servicios#${servicio.id}`}
                    className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-dorado hover:text-dorado-hover transition-colors group/link mt-auto"
                  >
                    Consultar este servicio
                    <ArrowRight
                      size={13}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {compact && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-center"
          >
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-azul border border-azul px-6 py-3 rounded-sm hover:bg-azul hover:text-white transition-all"
            >
              Ver todos los servicios
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
