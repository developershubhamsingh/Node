import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
let port = process.env.PORT || 3000;
let apps = express();

apps.use(express.json())

const transporter = nodemailer.createTransport({
    // तुम SMTP server के gate number 587 से connect कर रहे हो।
    //यह Gmail का recommended email sending port है।
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD
    }
})

apps.post("/sendmail", async (req, res) => {
    try {
        const mailOptions = {
            from: process.env.USER,
            to: process.env.RECEIVER,
            subject: " Testing node mails .",
            text: " This is Test email through node ."
        }
        let info = await transporter.sendMail(mailOptions);
        res.status(200).json({
            success: true,
            message: "Email Sent Successfully",
            response: info.response
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error Occurred In Sending Email",
            error: error.message
        })
    }

})



apps.listen(port, () => {
    console.log("Server is running on port", port)
}).on("error", (error) => {
    console.log("Error occurred while starting the server.", error)
})