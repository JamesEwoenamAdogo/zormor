import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import { routes } from "./Routes/placeRoutes.js"

dotenv.config()


const port = process.env.PORT
const app= express()

app.listen(port, ()=>{
    console.log(`Serve running at ${port}`)
})
const mongo = process.env.MONGO_URL
mongoose.connect(mongo).then(()=>{
    console.log(`Database connected`)
})

app.use("/api/v1",routes)




