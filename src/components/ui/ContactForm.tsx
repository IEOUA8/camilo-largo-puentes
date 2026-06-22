"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

type FormData = {
  nombre: string;
  correo: string;
  telefono: string;
  ciudad: string;
  empresa: string;
  servicio: string;
  tipoInmueble: string;
  descripcion: string;
  consentimiento: boolean;
};

const SERVICIOS_OPCIONES = [
  "Derecho Urbanístico",
  "Derecho Ambiental",
  "Avalúo Comercial de Inmuebles",
  "Avalúo de Maquinaria y Equipos",
  "Avalúo de Vehículos",
  "Avalúo de Activos Intangibles (Marcas, Patentes)",
  "Peritaje Judicial — Daños y Perjuicios",
  "Gestión Territorial",
  "Consultoría Inmobiliaria",
  "Otro",
];

const TIPOS_INMUEBLE = [
  "Lote",
  "Casa",
  "Apartamento",
  "Local comercial",
  "Bodega",
  "Predio rural",
  "Proyecto urbanístico",
  "Proyecto inmobiliario",
  "Empresa",
  "Otro",
];

const INITIAL: FormData = {
  nombre: "",
  correo: "",
  telefono: "",
  ciudad: "",
  empresa: "",
  servicio: "",
  tipoInmueble: "",
  descripcion: "",
  consentimiento: false,
};

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm(INITIAL);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <CheckCircle size={48} className="text-verde" />
        <h3 className="font-serif text-2xl font-semibold text-azul">
          Gracias por contactarnos
        </h3>
        <p className="font-sans text-base text-gris-texto/70 max-w-sm">
          Hemos recibido su solicitud y nos comunicaremos pronto.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 font-sans text-sm font-medium text-dorado underline underline-offset-4 hover:text-dorado-hover transition-colors"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full font-sans text-sm text-gris-texto bg-white border border-gris-suave rounded-sm px-4 py-3 focus:outline-none focus:border-azul/50 focus:ring-1 focus:ring-azul/20 transition-colors placeholder:text-gris-texto/40";
  const labelClass =
    "block font-sans text-xs font-medium text-azul tracking-wide mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "error" && (
        <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-sm text-red-700">
          <AlertCircle size={16} />
          <p className="font-sans text-sm">
            Hubo un error al enviar el formulario. Intente nuevamente.
          </p>
        </div>
      )}

      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nombre" className={labelClass}>
            Nombre completo *
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            value={form.nombre}
            onChange={handleChange}
            placeholder="Su nombre completo"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="correo" className={labelClass}>
            Correo electrónico *
          </label>
          <input
            id="correo"
            name="correo"
            type="email"
            required
            value={form.correo}
            onChange={handleChange}
            placeholder="correo@ejemplo.com"
            className={inputClass}
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="telefono" className={labelClass}>
            Teléfono / WhatsApp *
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            required
            value={form.telefono}
            onChange={handleChange}
            placeholder="+57 300 000 0000"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="ciudad" className={labelClass}>
            Ciudad *
          </label>
          <input
            id="ciudad"
            name="ciudad"
            type="text"
            required
            value={form.ciudad}
            onChange={handleChange}
            placeholder="Su ciudad"
            className={inputClass}
          />
        </div>
      </div>

      {/* Empresa */}
      <div>
        <label htmlFor="empresa" className={labelClass}>
          Empresa o entidad{" "}
          <span className="font-normal text-gris-texto/50">(opcional)</span>
        </label>
        <input
          id="empresa"
          name="empresa"
          type="text"
          value={form.empresa}
          onChange={handleChange}
          placeholder="Nombre de la empresa"
          className={inputClass}
        />
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="servicio" className={labelClass}>
            Servicio de interés *
          </label>
          <select
            id="servicio"
            name="servicio"
            required
            value={form.servicio}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Seleccione un servicio</option>
            {SERVICIOS_OPCIONES.map((op) => (
              <option key={op} value={op}>
                {op}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="tipoInmueble" className={labelClass}>
            Tipo de inmueble o proyecto
          </label>
          <select
            id="tipoInmueble"
            name="tipoInmueble"
            value={form.tipoInmueble}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Seleccione un tipo</option>
            {TIPOS_INMUEBLE.map((op) => (
              <option key={op} value={op}>
                {op}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="descripcion" className={labelClass}>
          Descripción del caso
        </label>
        <textarea
          id="descripcion"
          name="descripcion"
          rows={4}
          value={form.descripcion}
          onChange={handleChange}
          placeholder="Cuéntenos brevemente qué necesita resolver."
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Consent */}
      <label className="flex items-start gap-3 cursor-pointer group">
        <input
          type="checkbox"
          name="consentimiento"
          required
          checked={form.consentimiento}
          onChange={handleChange}
          className="mt-0.5 w-4 h-4 accent-dorado cursor-pointer"
        />
        <span className="font-sans text-xs text-gris-texto/70 leading-relaxed group-hover:text-gris-texto transition-colors">
          Acepto el tratamiento de mis datos personales y autorizo ser
          contactado por Camilo Largo Puentes.
        </span>
      </label>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 font-sans font-semibold text-sm bg-dorado text-white py-4 rounded-sm hover:bg-dorado-hover transition-colors tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            Solicitar asesoría o cotización
            <Send size={14} />
          </>
        )}
      </button>
    </form>
  );
}
