import { DB_URL } from "./config/env.js";
import mongoose from "mongoose";
if (!DB_URL) {
  throw new Error("DB_URL is not defined in the environment variables.");
}
const conectedDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  }
};
export default conectedDB;
