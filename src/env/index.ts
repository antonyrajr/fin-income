import dotenv from "dotenv";
import path from "path";
import { execSync } from "child_process";

const rootPath = execSync("pwd").toString().trim();

dotenv.config({
  path: path.join(rootPath, process.env.ENVIRONMENT ?? ""),
});

export const env = {
  NODE_ENV: process.env.NODE_ENV,
  API_URL: process.env.API_URL,
  DEBUG: process.env.DEBUG,
  PORT: process.env.PORT
};