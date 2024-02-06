import { EMAIL_FROM, EMAIL_TO, RESEND_API_KEY } from "@/config";
import { NextResponse } from "next/server"
import { Resend } from "resend";
import { EmailContactUser } from '../../../emails/index';
import EmailThanks from "@/emails/thanks";

// export const runtime = "edge";
const resend = new Resend(RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const { email, message, name } = res;
    await resend.emails.send({
      from: EMAIL_FROM || 'onboarding@resend.dev',
      to: EMAIL_TO || 'checo.ipn@gmail.com',
      subject: 'Mensaje recibido desde el sitio web',
      react: EmailContactUser({name, message, email}),
    });

    await resend.emails.send({
      from: EMAIL_FROM || 'onboarding@resend.dev',
      to: email,
      subject: 'Gracias por tu mensaje LBV SDA',
      react: EmailThanks({name}),
    });

    return NextResponse.json({test: 'success'})
  } catch (error) {
    return NextResponse.json({ error });
  }
}