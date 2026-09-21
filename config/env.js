import config from "dotenv";
config.config({ path: "./.env" });
export const {PORT , DB_URL} = process.env;
