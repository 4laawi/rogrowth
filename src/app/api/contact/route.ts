import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, company, contact, phone, email, subject, service, projectType, budget, message } = body;

    const contactInfo = contact || [phone, email].filter(Boolean).join(" | ");

    if (!name || (!contactInfo && !phone && !email)) {
      return NextResponse.json(
        { error: "Numele și datele de contact (telefon/email) sunt obligatorii." },
        { status: 400 }
      );
    }

    const resolvedService = projectType || subject || service || "General";
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.CONTACT_NOTIFICATION_EMAIL || "contact@rogrowth.ro";

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: "RoGrowth Lead <onboarding@resend.dev>",
        to: notificationEmail,
        replyTo: email && email.includes("@") ? email : undefined,
        subject: `[Cerere Ofertă RoGrowth] ${name} - ${resolvedService} (${budget || "Fără buget specificat"})`,
        html: `
          <h2>Cerere nouă de ofertă pe RoGrowth.ro</h2>
          <p><strong>Nume:</strong> ${name}</p>
          <p><strong>Telefon:</strong> ${phone || "Nespecificat"}</p>
          <p><strong>Email:</strong> ${email || "Nespecificat"}</p>
          <p><strong>Tip Proiect:</strong> ${resolvedService}</p>
          <p><strong>Buget Estimativ:</strong> ${budget || "Nespecificat"}</p>
          <p><strong>Companie / Domeniu:</strong> ${company || "Nespecificat"}</p>
          <p><strong>Mesaj &amp; Cerințe:</strong></p>
          <p style="white-space: pre-wrap; background: #f4f4f5; padding: 12px; border-radius: 8px;">${message || "Fără detalii suplimentare"}</p>
          <hr />
          <p style="font-size: 12px; color: #71717a;">Trimis de pe formularul interactiv RoGrowth.ro</p>
        `,
      });
    } else {
      // In development or when API key is pending, log the lead
      console.log("[RoGrowth Lead Received]", {
        name,
        phone,
        email,
        projectType: resolvedService,
        budget,
        company,
        contact: contactInfo,
        message,
        receivedAt: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      { success: true, message: "Cererea a fost transmisă cu succes." },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      { error: "A apărut o eroare la procesarea cererii. Te rugăm să ne contactezi direct pe WhatsApp sau email." },
      { status: 500 }
    );
  }
}
