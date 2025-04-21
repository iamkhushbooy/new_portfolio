import { NextRequest, NextResponse } from "next/server";
import { transporter } from "../../../emailConfig";

export const POST  = async (req: NextRequest) => {
  try {
    const { name, email, phone, message } = await req.json();
    await transporter.sendMail({
      from: 'ky143858@gmail.com',
      to: 'khushboocsjmu@gmail.com',
      subject: 'Contact Form Submission',
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
          <h2 style="color: #4CAF50;">Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <h3 style="color: #4CAF50;">Message</h3>
          <p>${message}</p>
        </div>
      `,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });
    console.log(name, email, phone, message);
    return NextResponse.json({ msg: 'Submitted' });
  } catch (error) {
    return NextResponse.json({ msg: 'Error occurred' });
  }
};
