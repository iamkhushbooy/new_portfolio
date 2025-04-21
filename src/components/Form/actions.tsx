'use server';

import { transporter } from "../../../emailConfig";

export async function submitFormAction(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !phone || !message) {
        return 'Fill all the details.';
    }

    try {
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

        return 'Submitted';
    } catch (error) {
        console.error("Email send error:", error);
        return 'Error occurred while sending email';
    }
}
