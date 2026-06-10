import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";
import { BLOG_ARTICULOS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog | Camilo Largo Puentes",
  description:
    "Artículos especializados en derecho urbanístico, derecho ambiental, avalúos, gestión territorial e inmobiliario.",
};

const CATEGORIAS = [
  "Todos",
  "Derecho Urbanístico",
  "Derecho Ambiental",
  "Avalúos",
  "Gestión Territorial",
  "Consultoría Inmobiliaria",
];

export default function BlogPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-azul pt-44 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-sans text-xs font-semibold tracking-widest uppercase text-dorado mb-3">
            Conocimiento especializado
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-white">
            Blog y artículos
          </h1>
          <p className="font-sans text-base text-white/70 mt-4 max-w-xl leading-relaxed">
            Análisis, orientación y actualidad en derecho urbanístico, ambiental,
            avalúos e inversión inmobiliaria.
          </p>
          <div className="mt-5 h-[2px] w-12 bg-dorado" />
        </div>
      </div>

      <section className="py-20 bg-crema">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Categories filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {CATEGORIAS.map((cat) => (
              <button
                key={cat}
                className={`font-sans text-xs font-medium px-4 py-2 rounded-sm border transition-colors ${
                  cat === "Todos"
                    ? "bg-azul text-white border-azul"
                    : "bg-white text-gris-texto border-gris-suave hover:border-azul hover:text-azul"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_ARTICULOS.map((articulo) => (
              <article
                key={articulo.slug}
                className="group bg-white border border-gris-suave rounded-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col"
              >
                {/* Color bar */}
                <div className="h-1 bg-dorado" />

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex items-center gap-1.5 font-sans text-xs text-dorado font-medium">
                      <Tag size={11} />
                      {articulo.categoria}
                    </span>
                    <span className="text-gris-suave">·</span>
                    <span className="flex items-center gap-1.5 font-sans text-xs text-gris-texto/50">
                      <Calendar size={11} />
                      {new Date(articulo.fecha).toLocaleDateString("es-CO", {
                        year: "numeric",
                        month: "long",
                      })}
                    </span>
                  </div>

                  <h2 className="font-serif text-xl font-semibold text-azul leading-tight mb-3 group-hover:text-verde transition-colors">
                    {articulo.titulo}
                  </h2>

                  <p className="font-sans text-sm text-gris-texto/70 leading-relaxed flex-1 mb-5">
                    {articulo.resumen}
                  </p>

                  <Link
                    href={`/blog/${articulo.slug}`}
                    className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-dorado hover:text-dorado-hover transition-colors group/link"
                  >
                    Leer artículo
                    <ArrowRight
                      size={12}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Coming soon notice */}
          <div className="mt-16 text-center p-10 bg-gris-suave rounded-sm border border-gris-suave">
            <h3 className="font-serif text-xl font-semibold text-azul mb-2">
              Más artículos próximamente
            </h3>
            <p className="font-sans text-sm text-gris-texto/60 max-w-md mx-auto">
              Reciba orientación especializada directamente de Camilo Largo Puentes.
            </p>
            <Link
              href="/contacto"
              className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold bg-dorado text-white px-6 py-3 rounded-sm hover:bg-dorado-hover transition-colors"
            >
              Recibir orientación especializada
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
