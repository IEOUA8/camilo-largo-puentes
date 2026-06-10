"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const ESPECIALIDADES = [
  "Derecho Urbanístico",
  "Derecho Ambiental",
  "Avalúos",
  "Gestión Territorial",
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: EASE },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-crema">
      {/* Background geometric accent — solo desktop */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gris-suave/60" />
        <div className="absolute top-0 h-full w-[2px] bg-dorado/20" style={{ right: "50%" }} />
      </div>

      {/* Decorative lines — solo desktop */}
      <div className="hidden lg:block absolute left-8 top-1/4 w-[1px] h-32 bg-dorado/30" />
      <div className="hidden lg:block absolute left-8 w-6 h-[1px] bg-dorado/30" style={{ top: "calc(25% + 4rem)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <motion.p
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-sans text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-dorado mb-4 sm:mb-6"
            >
              Abogado · Especialista en Territorio e Inmobiliario
            </motion.p>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-azul leading-[1.05] mb-5 sm:mb-6"
            >
              Soluciones{" "}
              <em className="not-italic text-verde">Inmobiliarias</em>
              <br />
              Integrales
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-sans text-sm sm:text-base lg:text-lg text-gris-texto/80 leading-relaxed max-w-lg mb-8 sm:mb-10"
            >
              Asesoría jurídica, urbanística, ambiental y patrimonial para tomar
              decisiones seguras sobre el territorio, los bienes y los proyectos
              inmobiliarios.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 font-sans font-semibold text-sm bg-dorado text-white px-6 sm:px-7 py-3.5 sm:py-4 rounded-sm hover:bg-dorado-hover transition-colors tracking-wide group"
              >
                Solicitar asesoría
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 font-sans font-semibold text-sm border border-azul text-azul px-6 sm:px-7 py-3.5 sm:py-4 rounded-sm hover:bg-azul hover:text-white transition-all tracking-wide"
              >
                Ver servicios
              </Link>
            </motion.div>
          </div>

          {/* Right side visual — solo desktop */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: EASE }}
            className="relative hidden lg:flex flex-col justify-center"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Abogado", value: "CLP" },
                { label: "Especialista en Derecho Urbanístico", value: "" },
                { label: "Magíster en Derecho Ambiental", value: "" },
                { label: "Técnico en Avalúos", value: "" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className={`p-5 border border-gris-suave bg-white rounded-sm ${
                    i === 0 ? "bg-azul text-white border-azul" : ""
                  }`}
                >
                  {i === 0 ? (
                    <>
                      <div className="font-serif text-4xl font-bold text-dorado leading-none mb-1">
                        {item.value}
                      </div>
                      <div className="font-sans text-xs text-white/70 leading-tight">
                        {item.label}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-6 h-[2px] bg-dorado mb-3" />
                      <div className="font-sans text-sm text-gris-texto leading-tight font-medium">
                        {item.label}
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Specialty strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="relative bg-azul py-3 sm:py-4"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-8 gap-y-1.5">
            {ESPECIALIDADES.map((esp, i) => (
              <span
                key={esp}
                className="font-sans text-[10px] sm:text-xs font-medium text-white/80 tracking-widest uppercase flex items-center gap-3 sm:gap-4"
              >
                {esp}
                {i < ESPECIALIDADES.length - 1 && (
                  <span className="text-dorado opacity-60 hidden sm:inline">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll hint — oculto en móvil */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden sm:flex absolute bottom-20 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-azul/40"
      >
        <span className="font-sans text-[10px] tracking-widest uppercase">
          Explorar
        </span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
