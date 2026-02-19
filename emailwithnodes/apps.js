import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
let port =7000;
let apps = express();


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

apps.listen(port, () => {
    console.log(`Server is running on port ${port}`)
}).on("error", (error) => {
    console.log("Error occurred while starting the server.", error)
})