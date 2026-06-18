export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { nombre, empresa, email, telefono, interes, mensaje } = body

    /* ── Validación básica ────────────────────────────────────────────── */
    if (!nombre || !empresa || !email || !mensaje) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'El correo electrónico no es válido.' },
        { status: 400 }
      )
    }

    console.log('[SMTP DEBUG]', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      user: process.env.SMTP_USER,
      passExists: !!process.env.SMTP_PASS,
      contactEmail: process.env.CONTACT_EMAIL,
    })

    /* ── Transporter Zoho SMTP ────────────────────────────────────────── */
    const transporter = nodemailer.createTransport({
      host:   process.env.SMTP_HOST,
      port:   Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    /* ── Contenido HTML del correo ────────────────────────────────────── */
    const fecha = new Date().toLocaleString('es-CL', {
      timeZone:     'America/Santiago',
      dateStyle:    'full',
      timeStyle:    'short',
    })

    const html = `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f6f9;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);max-width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#0a2d72;padding:28px 32px;">
            <p style="margin:0;color:#ffffff;font-size:20px;font-weight:700;letter-spacing:0.5px;">VOGEL CHILE</p>
            <p style="margin:4px 0 0;color:#ffffff;font-size:13px;">Nuevo mensaje desde el sitio web</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px;">
            <p style="margin:0 0 24px;color:#1a2b4a;font-size:16px;font-weight:600;">Se ha recibido un nuevo contacto</p>

            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #eef0f3;">
                  <span style="color:#6b7a99;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;">Nombre</span><br>
                  <span style="color:#1a2b4a;font-size:15px;margin-top:4px;display:block;">${nombre}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #eef0f3;">
                  <span style="color:#6b7a99;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;">Empresa</span><br>
                  <span style="color:#1a2b4a;font-size:15px;margin-top:4px;display:block;">${empresa}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #eef0f3;">
                  <span style="color:#6b7a99;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;">Correo electrónico</span><br>
                  <a href="mailto:${email}" style="color:#0062ff;font-size:15px;margin-top:4px;display:block;text-decoration:none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #eef0f3;">
                  <span style="color:#6b7a99;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;">Teléfono</span><br>
                  <span style="color:#1a2b4a;font-size:15px;margin-top:4px;display:block;">${telefono || '—'}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #eef0f3;">
                  <span style="color:#6b7a99;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;">Área de interés</span><br>
                  <span style="color:#1a2b4a;font-size:15px;margin-top:4px;display:block;">${interes || '—'}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #eef0f3;">
                  <span style="color:#6b7a99;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;">Mensaje</span><br>
                  <span style="color:#1a2b4a;font-size:15px;margin-top:4px;display:block;white-space:pre-line;">${mensaje}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;">
                  <span style="color:#6b7a99;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;">Fecha de envío</span><br>
                  <span style="color:#1a2b4a;font-size:15px;margin-top:4px;display:block;">${fecha}</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f4f6f9;padding:16px 32px;border-top:1px solid #eef0f3;">
            <p style="margin:0;color:#9aa3b5;font-size:12px;">Este correo fue generado automáticamente desde vogelchile.cl</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`

    /* ── Envío ────────────────────────────────────────────────────────── */
    await transporter.sendMail({
      from:    `"VOGEL Chile – Contacto Web" <${process.env.SMTP_USER}>`,
      to:      process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Nuevo contacto desde sitio web VOGEL Chile — ${nombre}`,
      html,
    })

    console.log(`[contact] Correo enviado desde ${email} (${nombre} / ${empresa})`)

    return NextResponse.json({ ok: true }, { status: 200 })

  } catch (err) {
    console.error('[contact] Error al enviar correo:', err)
    return NextResponse.json(
      { error: 'Error interno. Por favor intente más tarde o contáctenos directamente.' },
      { status: 500 }
    )
  }
}
