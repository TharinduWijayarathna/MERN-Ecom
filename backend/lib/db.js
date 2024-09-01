import mongoose from "mongoose";

export const connectDB = async () => { 
    try {
        const con =await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1); //1 mean exit with failure and 0 mean exit with success
    }
}