import express from "express"
import FileUpload from "express-fileupload"
import cors from "cors"
import animalRouter from "../backend/routes/animalRouter.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(FileUpload())
app.use(express.static("public"))
app.use(animalRouter);

app.listen(3004, () =>{
    console.log("ta rodano")
})