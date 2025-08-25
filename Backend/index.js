import express from "express";
import mongoose from "mongoose";
import contactRouter from "./routes/contactRoutes.js";

const PORT = 5000;
const app = express();
app.use(express.json());

app.get("/test", (req, res) => {
   res.send("Hello world")    
})

app.use("/api/contact", contactRouter)



const connectToDB = async () => {
    try {
        const response = await mongoose.connect("mongodb://localhost:27017/Portfolio");
        console.log("Connected to DB", response.connection.name);
    } catch (error) {
        console.log(error)
    }
    
} 
connectToDB();

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`)
})

