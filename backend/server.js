import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";

dotenv.config();
const app = express();

//Port number
const PORT = process.env.PORT || 5000;

app.use(express.json());   //allows to parse json data

//auth
app.use("/api/auth", authRoutes);

app.listen(5000, () => {
    console.log("Server running on http://localhost:" + PORT);
    connectDB();
});