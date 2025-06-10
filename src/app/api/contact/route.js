import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialiseer Resend met je API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, message } = body;

    await resend.emails.send({
      from: "Cedric Tech <contact@cedrictech.nl>",
      to: "cedrictechbusiness@gmail.com",
      reply_to: email,
      subject: `Nieuw bericht van ${firstName} ${lastName}`,
      html: `
    <div style="background-color: #f9fafb; padding: 40px 0; font-family: Arial, sans-serif; text-align: center;">
      <div style="max-width: 560px; margin: 0 auto; background: white; padding: 32px; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.06); text-align: left;">
        <h2 style="margin-top: 0; color: #111827;">📥 Nieuw bericht via contactformulier</h2>
        <p style="font-size: 16px; color: #4b5563;">
          <strong>Naam:</strong> ${firstName} ${lastName}<br />
          <strong>E-mail:</strong> <a href="mailto:${email}" style="color: #3b82f6;">${email}</a>
        </p>
        <div style="margin: 24px 0; padding: 16px; background-color: #f3f4f6; border-left: 4px solid #3b82f6; color: #374151; white-space: pre-line;">
          ${message}
        </div>
        <p style="font-size: 14px; color: #9ca3af;">Verzonden via het formulier op <a href="https://cedrictech.nl" style="color:#6366f1;">cedrictech.nl</a></p>
      </div>
    </div>
  `,
    });

    await resend.emails.send({
      from: "Cedric Tech <contact@cedrictech.nl>",
      to: email,
      subject: "🎉 We hebben je bericht ontvangen!",
      html: `
    <div style="background-color: #f0f4ff; padding: 40px 0; font-family: Arial, sans-serif; text-align: center;">
      <div style="max-width: 560px; margin: 0 auto; background: white; padding: 32px; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.06); text-align: left;">
        <h2 style="margin-top: 0; color: #1e3a8a;">Bedankt voor je bericht, ${firstName} 👋</h2>
        <p style="font-size: 16px; color: #4b5563;">
          We hebben je bericht goed ontvangen en nemen snel contact met je op.<br />
          Hieronder vind je een kopie van je bericht:
        </p>
        <div style="margin: 24px 0; padding: 16px; background-color: #f3f4f6; border-left: 4px solid #6366f1; color: #374151; white-space: pre-line;">
          ${message}
        </div>
        <p style="font-size: 16px; color: #4b5563;">
          📬 Mocht je aanvullende info hebben, stuur gerust een reply naar dit e-mailadres.
        </p>
        <p style="margin-top: 32px; font-size: 14px; color: #6b7280;">
          Met vriendelijke groet,<br />
          <strong>Cedric van CedricTech</strong>
        </p>
      </div>
    </div>
  `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Fout bij versturen:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
