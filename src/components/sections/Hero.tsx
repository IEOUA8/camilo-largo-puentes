"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const ESPECIALIDADES = [
  "Derecho Urbanístico",
  "Derecho Ambiental",
  "Avalúos RAA · ANA",
  "Gestión Territorial",
  "Consultoría Inmobiliaria",
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.14, duration: 0.75, ease: EASE },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-azul">
      {/* ── Fondo: cuadrícula urbana sutil ── */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroGrid" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M 56 0 L 0 0 0 56" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" opacity="0.05" />
        </svg>
      </div>

      {/* ── Marca de agua: silueta ciudad ── */}
      <div className="absolute bottom-0 right-0 w-full lg:w-3/5 h-full pointer-events-none overflow-hidden">
        <svg
          className="absolute bottom-0 right-0 w-full h-full"
          viewBox="0 0 900 480"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMaxYMax meet"
        >
          {/* Skyline principal */}
          <path
            d="M 0,480 L 0,370 L 55,370 L 55,330 L 90,330 L 90,290
               L 120,290 L 120,260 L 160,260 L 160,220 L 190,220
               L 190,180 L 205,180 L 205,150 L 215,150 L 215,110
               L 222,110 L 222,80 L 228,80 L 228,60 L 233,60
               L 233,80 L 238,80 L 238,110 L 245,110 L 245,150
               L 255,150 L 255,180 L 270,180 L 270,220 L 310,220
               L 310,190 L 345,190 L 345,155 L 385,155 L 385,175
               L 420,175 L 420,140 L 460,140 L 460,165 L 500,165
               L 500,200 L 540,200 L 540,230 L 580,230 L 580,260
               L 620,260 L 620,290 L 660,290 L 660,315 L 700,315
               L 700,340 L 750,340 L 750,365 L 800,365 L 800,390
               L 900,390 L 900,480 Z"
            fill="white"
            opacity="0.05"
          />
          {/* Ventanas del edificio más alto */}
          <g fill="white" opacity="0.07">
            <rect x="209" y="155" width="5" height="3" />
            <rect x="217" y="155" width="5" height="3" />
            <rect x="225" y="155" width="5" height="3" />
            <rect x="209" y="163" width="5" height="3" />
            <rect x="217" y="163" width="5" height="3" />
            <rect x="225" y="163" width="5" height="3" />
            <rect x="209" y="171" width="5" height="3" />
            <rect x="217" y="171" width="5" height="3" />
            <rect x="225" y="171" width="5" height="3" />
          </g>
          {/* Línea de horizonte */}
          <line x1="0" y1="390" x2="900" y2="390" stroke="white" strokeWidth="0.5" opacity="0.08" />
        </svg>

        {/* Acentos circulares decorativos */}
        <div className="absolute top-16 right-16 w-80 h-80 border border-white/5 rounded-full" />
        <div className="absolute top-32 right-32 w-52 h-52 border border-white/5 rounded-full" />
      </div>

      {/* ── Acento dorado lateral ── */}
      <div className="absolute left-0 top-0 w-[3px] h-full bg-gradient-to-b from-transparent via-dorado/30 to-transparent hidden lg:block" />

      {/* ── Contenido principal ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-44 pb-20 sm:pb-24 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-3 mb-6 sm:mb-8"
          >
            <span className="block w-8 h-[1px] bg-dorado shrink-0" />
            <p className="font-sans text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-dorado">
              Abogado · Especialista en Territorio e Inmobiliario
            </p>
          </motion.div>

          {/* Nombre */}
          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-sans text-lg sm:text-xl lg:text-2xl font-light text-white/50 tracking-[0.15em] uppercase mb-3 sm:mb-4"
          >
            Camilo Largo Puentes
          </motion.p>

          {/* Título principal */}
          <motion.h1
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-serif font-semibold leading-[0.92] mb-6 sm:mb-8"
          >
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] text-white">
              Soluciones
            </span>
            <em className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] not-italic text-dorado">
              Inmobiliarias
            </em>
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] text-white">
              Integrales
            </span>
          </motion.h1>

          {/* Descripción */}
          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-sans text-sm sm:text-base lg:text-lg text-white/50 leading-relaxed max-w-xl mb-10 sm:mb-12"
          >
            Asesoría jurídica, urbanística, ambiental y patrimonial para tomar
            decisiones seguras sobre el territorio, los bienes y los proyectos
            inmobiliarios.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 font-sans font-semibold text-sm bg-dorado text-white px-7 py-4 rounded-sm hover:bg-dorado-hover transition-colors tracking-wide group"
            >
              Solicitar asesoría o cotización
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center gap-2 font-sans font-semibold text-sm border border-white/25 text-white px-7 py-4 rounded-sm hover:bg-white/8 transition-all tracking-wide"
            >
              Ver servicios
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── Franja de especialidades ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85, duration: 0.6 }}
        className="relative border-t border-white/10 py-4 sm:py-5 mt-auto"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-8 gap-y-2">
            {ESPECIALIDADES.map((esp, i) => (
              <span
                key={esp}
                className="font-sans text-[10px] sm:text-[11px] font-medium text-white/45 tracking-widest uppercase flex items-center gap-3 sm:gap-5"
              >
                {esp}
                {i < ESPECIALIDADES.length - 1 && (
                  <span className="text-dorado/40 hidden sm:inline">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Scroll hint ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="hidden lg:flex absolute bottom-24 left-8 flex-col items-center gap-2 text-white/20"
      >
        <div className="w-[1px] h-10 bg-white/15" />
        <ChevronDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
