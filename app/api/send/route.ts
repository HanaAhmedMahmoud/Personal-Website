import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const { error } = await resend.emails.send({
      from: "Acme <hanaahmedmahmoud1@gmail.com>", 
      to: ["hanaahmedmahmoud1@gmail.com"],
      subject: `Inquiry from ${name}`,
      html: `<p>${message}</p>`,
      replyTo: email,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}


