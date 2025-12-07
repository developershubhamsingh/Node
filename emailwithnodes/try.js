import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
    host: "smtp.resend.com",
    port: 587,//default port//
    auth: {
        user: "resend",//default user//
        pass: process.env.PASS_KEY//smtp keys//
    }
})

const mailOptions = {
    from: process.env.GMAIL,
    to: process.env.SEND_EMAILS_TO,
    subject: "Resend smtp Test",
    text: "Email successfully sent using Resend SMTP + Nodemailer!"
}

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log("❌ Error occurred:", error);
    } else {
        console.log("✅ Email sent:", info.response);
    }
});