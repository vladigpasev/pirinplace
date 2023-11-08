"use server"

import z from "zod";
//@ts-ignore
import nodemailer from "nodemailer";

export async function sendEmail(prevState: any, formData: FormData) {
    const schema = z.object({
        name: z.string().nonempty(),
        email: z.string().email(),
        subject: z.string().nonempty(),
        message: z.string().nonempty(),
    });

    let data;
    try {
        // Parse the form data using the schema
        data = schema.parse({
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        });
    } catch (error) {
        console.error("Validation error: ", error);
        // Return a validation error message
        //@ts-ignore
        return { success: false, error: "Data validation failed" };
    }

    let transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false,
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD,
        },
        tls: {
            ciphers: 'SSLv3'
        }
    });

    let adminMailOptions = {
        from: `"${data.name}" <messages@pirinplace.com>`,
        to: process.env.ADMIN_EMAIL,
        subject: data.subject,
        text: data.message,
        html: `<p><b>Name:</b> ${data.name}</p>
               <p><b>Email:</b> ${data.email}</p>
               <p><b>Message:</b> ${data.message}</p>`,
        replyTo: data.email
    };

    let userMailOptions = {
        from: `"Pirin Place Messages" <messages@pirinplace.com>`,
        to: data.email,
        subject: "Your message has been received / Получихме вашето съобщение",
        text: `Thank you for your message! We have received it and will get back to you as soon as possible. For immediate assistance, please call us at the provided phone number.
        
Благодарим ви за вашето съобщение! Получихме го и ще ви отговорим възможно най-скоро. За бърза връзка, моля обадете се на посочения телефон.

Message Summary / Обобщение на съобщението:
${data.message}`,
        html: `<p>Thank you for your message! We have received it and will get back to you as soon as possible. For immediate assistance, please call us at the provided phone number.</p>
<p>Благодарим ви за вашето съобщение! Получихме го и ще ви отговорим възможно най-скоро. За бърза връзка, моля обадете се на посочения телефон.</p>
<hr>
<p><b>Message Summary / Обобщение на съобщението:</b></p>
<p>${data.message}</p>`
    };
    
    try {
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(userMailOptions)
        ]);
        console.log("Messages sent to admin and user.");
        return { success: true };
    } catch (error) {
        console.error("Error sending email: ", error);
        //@ts-ignore
        return { success: false, error: error.message };
    }
}