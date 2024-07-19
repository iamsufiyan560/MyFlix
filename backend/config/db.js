import mongoose from "mongoose";
import { ENV_VARS } from "./env.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV_VARS.MONGO_URI);
    console.log("MongoDB connected: " + conn.connection.host);
  } catch (error) {
    console.error("Error connecting to MONGODB: " + error.message);
    process.exit(1);
  }
};
