import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nom, email, telephone, sujet, message, format } = body;

    // Configure your SMTP transport here
    // Example using Gmail, or use a service like Resend, Brevo, etc.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const sujetLabels: Record<string, string> = {
      individuel: "Individuel – adulte",
      couple: "Couple",
      adolescent: "Adolescent",
      professionnel: "Professionnel",
      autre: "Autre / Je ne sais pas",
    };

    const formatLabels: Record<string, string> = {
      presentiel: "En cabinet",
      visio: "Visioconférence",
      indifferent: "Peu importe",
    };

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Georgia, serif; color: #2C4A3E; background: #F5EFE4; margin: 0; padding: 0; }
          .container { max-width: 560px; margin: 0 auto; background: white; }
          .header { background: #2C4A3E; padding: 32px; text-align: center; }
          .header h1 { color: #F5EFE4; font-size: 1.4rem; font-weight: 400; letter-spacing: 0.2em; margin: 0; }
          .header p { color: rgba(245,239,228,0.6); font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; margin: 8px 0 0; font-family: sans-serif; }
          .body { padding: 36px; }
          .field { margin-bottom: 24px; border-bottom: 1px solid rgba(44,74,62,0.1); padding-bottom: 18px; }
          .field:last-child { border-bottom: none; }
          .label { font-family: sans-serif; font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(44,74,62,0.45); margin-bottom: 6px; }
          .value { font-size: 1rem; color: #2C4A3E; }
          .message-box { background: #F5EFE4; padding: 20px; border-left: 3px solid #C4774A; font-size: 0.95rem; line-height: 1.7; white-space: pre-wrap; }
          .footer { background: #F5EFE4; padding: 20px 36px; text-align: center; font-family: sans-serif; font-size: 0.72rem; color: rgba(44,74,62,0.45); }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>NHK</h1>
            <p>Nouvelle demande de rendez-vous</p>
          </div>
          <div class="body">
            <div class="field">
              <div class="label">Nom complet</div>
              <div class="value">${nom}</div>
            </div>
            <div class="field">
              <div class="label">Email</div>
              <div class="value">${email}</div>
            </div>
            ${telephone ? `<div class="field"><div class="label">Téléphone</div><div class="value">${telephone}</div></div>` : ""}
            <div class="field">
              <div class="label">Type d'accompagnement</div>
              <div class="value">${sujetLabels[sujet] || sujet}</div>
            </div>
            <div class="field">
              <div class="label">Format souhaité</div>
              <div class="value">${formatLabels[format] || format}</div>
            </div>
            <div class="field">
              <div class="label">Message</div>
              <div class="message-box">${message}</div>
            </div>
          </div>
          <div class="footer">
            Cabinet NHK – Nadia KOUT Psychopraticienne
          </div>
        </div>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"NHK – Formulaire contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || "nhk.psycho@gmail.com",
      replyTo: email,
      subject: `[NHK] Demande de RDV – ${nom} (${sujetLabels[sujet] || sujet})`,
      html: htmlContent,
    });

    // Auto-reply to client
    await transporter.sendMail({
      from: `"Nadia KOUT – NHK" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Votre demande a bien été reçue – NHK",
      html: `
        <!DOCTYPE html>
        <html lang="fr">
        <head><meta charset="UTF-8"><style>
          body { font-family: Georgia, serif; color: #2C4A3E; background: #F5EFE4; margin: 0; }
          .container { max-width: 520px; margin: 0 auto; background: white; }
          .header { background: #2C4A3E; padding: 32px; text-align: center; }
          .header h1 { color: #F5EFE4; font-size: 1.4rem; font-weight: 400; letter-spacing: 0.2em; margin: 0; }
          .body { padding: 40px; }
          .body p { line-height: 1.8; font-size: 0.97rem; color: rgba(44,74,62,0.8); }
          .highlight { color: #C4774A; font-style: italic; }
          .footer { background: #F5EFE4; padding: 20px 36px; text-align: center; font-family: sans-serif; font-size: 0.72rem; color: rgba(44,74,62,0.4); }
        </style></head>
        <body>
          <div class="container">
            <div class="header"><h1>NHK</h1></div>
            <div class="body">
              <p>Bonjour ${nom},</p>
              <p>
                J'ai bien reçu votre demande et je vous remercie de me faire confiance pour vous accompagner. 
                Je vous répondrai dans les <span class="highlight">48 heures</span> pour convenir d'un moment d'échange.
              </p>
              <p>
                En attendant, n'hésitez pas à me contacter directement si vous avez des questions urgentes.
              </p>
              <p style="margin-top: 32px;">
                Avec bienveillance,<br/>
                <strong>Nadia KOUT</strong>
              </p>
            </div>
            <div class="footer">Cabinet NHK – Psychopraticienne · nhk.psycho@gmail.com</div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail error:", error);
    return NextResponse.json({ error: "Sending failed" }, { status: 500 });
  }
}
