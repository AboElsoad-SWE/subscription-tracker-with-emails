import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

export const PORT = process.env.PORT || 3000;
export const DB_URL = process.env.DB_URL;
export const NODE_ENV = process.env.NODE_ENV || "development";
export const JWT_SECRET = process.env.jwtSecret || "defaultSecret";
export const JWT_EXPIRES_IN = process.env.jwtExpiresIn || "1h";
