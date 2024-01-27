import { EMAIL_FROM, RESEND_API_KEY } from "@/config";
import { NextResponse } from "next/server"
import { Resend } from "resend";
import { EmailContactUser } from '../../../emails/index';

// export const runtime = "edge";
const resend = new Resend(RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const { email, message, name } = res;
    await resend.emails.send({
      from: EMAIL_FROM || 'onboarding@resend.dev',
      to: 'checo.ipn@gmail.com',
      subject: 'Gracias por tu mensaje LBV SDA',
      react: EmailContactUser({name, message, email}),
    });
    return NextResponse.json({test: 'success'})
  } catch (error) {
    return NextResponse.json({ error });
  }
}