import config from "dotenv";
config.config({ path: "./.env" });
export const PORT = process.env.PORT;
