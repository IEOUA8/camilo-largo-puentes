import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const { nombre, correo, telefono, ciudad, empresa, servicio, tipoInmueble, descripcion } = data;

    if (!nombre || !correo || !telefono || !ciudad || !servicio) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    // Supabase integration (disabled until env vars are configured)
    // const { createClient } = await import("@supabase/supabase-js");
    // const supabase = createClient(
    //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
    //   process.env.SUPABASE_SERVICE_ROLE_KEY!
    // );
    // await supabase.from("leads").insert([{ nombre, correo, telefono, ciudad, empresa, servicio, tipo_inmueble: tipoInmueble, descripcion }]);

    // Resend email integration (disabled until env vars are configured)
    // const { Resend } = await import("resend");
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({...});

    console.log("Nuevo lead:", { nombre, correo, telefono, ciudad, empresa, servicio, tipoInmueble, descripcion });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Error en /api/contact:", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
