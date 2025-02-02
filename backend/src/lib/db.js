import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDb connected: " + conn.connection.host);
    } catch (e) {
        console.error("MongoDb connection error: " + e);
    }
};