import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL,
        pass: process.env.PASS
    }
})

const mailOptions = {
    from: process.env.GMAIL,
    to: process.env.SENDEMAILSTO,
    subject: " Testing node mails .",
    text: " This is Test email through node ."
}

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log("Error occurred Cannot send mails.", error)
    } else {
        console.log("Email sent  :", info.response)
    }
})

