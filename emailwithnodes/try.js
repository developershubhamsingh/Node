import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail.com",
    auth: {
        user: process.env.GMAIL,
        pass: process.env.PASS,
    }
})

const mailOptions = {
    from: process.env.GMAIL,
    to: process.env.SENDEMAILSTO,
    subject: "Nodemailer testings",
    text: "Test mail from node"
}

transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.log("Error occurred cannot send mails .", err)
    } else {
        console.log(" Emails sent.", info.response)
    }
})