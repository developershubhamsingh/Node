import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const apps = express();
const port = process.env.PORT || 7000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//view engine
apps.set("view engine", "ejs");
// “👇👇It tells Express to decode the incoming form data and store it inside req.body.”
//Form ka data Express read karega aur req.body me store karega.
// without urlencoded req.body   // undefined
//// with urlencoded req.body = { username: "Rahul", email: "test@gmail.com" }
// extended: true means “Form data can also accept nested objects.”
apps.use(express.urlencoded({ extended: true }))

//👇👇static file //
apps.use("/uploads", express.static(path.join(__dirname, "uploads")))
// apps.use(express.static(__dirname + "/uploads"))

// storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "uploads"))
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()} - ${file.originalname}`)
    }
})
//to get separate file types //

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpg|jpeg|png/;
    const mimetype = allowedTypes.test(file.mimetype);
    if (mimetype) {
        cb(null, true)
    } else {
        cb(new Error("Only images jpg/jpeg/png are allowed "), false)
    }
}

// if don't want any filter n all then only write it as :
// const upload = multer(storage)

const upload = multer({
    //destructuring can be done also //
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: fileFilter
})

apps.get("/", (req, res) => {
    res.render("index")
})
//जब आप Multer का इस्तेमाल करते हो:
//uploads.single("image")
//तो Multer उस फ़ाइल को पढ़कर req.file में रख देता है।
apps.post("/uploads", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(404).send("No File uploaded")
    }
    const name = req.body.name
    const imagePath = `/uploads/${req.file.filename}`
    // res.render("success", { name, imagePath })
    res.send(`success, ${name},${imagePath}`)

})
apps.listen(port, () => {
    console.log("Server Running on port", port)
})