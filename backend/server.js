import express from "express";
import dotenv from "dotenv";

//import routes 
import authRoutes from "./routes/auth.route.js";

dotenv.config();
const app = express();

//Port number
const PORT = process.env.PORT || 5000;

//auth

app.use("/api/auth", authRoutes);

app.listen(5000, () => {
    console.log("Server running on http://localhost:" + PORT);
});