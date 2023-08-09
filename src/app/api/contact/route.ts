import { EMAIL_FROM, RESEND_API_KEY } from "@/config";
import { NextResponse } from "next/server"
import { Resend } from "resend";
import { EmailContactUser } from '../../../emails/index';

// export const runtime = "edge";

const resend = new Resend(RESEND_API_KEY);

export async function GET(request: Request) {
  console.log('entro')
  try {
    const res = await request.json();
    const { email, message, name } = res;
    await resend.sendEmail({
      from: EMAIL_FROM || 'onboarding@resend.dev',
      to: email,
      subject: 'Gracias por tu mensaje LBV SDA',
      react: EmailContactUser({name}),
    });
    return NextResponse.json({test: 'success'})
  } catch (error) {
    console.log('entro error', error)
    return NextResponse.json({ error });
  }
}