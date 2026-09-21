import mongoose from "mongoose";
import { DB_URL } from "./env.js";

const connectedDB = async () => {
  if (!DB_URL) {
    throw new Error("DB_URL is not defined in the environment variables.");
  }

  try {
    await mongoose.connect(DB_URL);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

export default connectedDB;
