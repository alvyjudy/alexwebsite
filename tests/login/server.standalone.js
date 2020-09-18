
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import {serverIns} from "./server.embed.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envFilePath = path.join(__dirname, ".env")

const data = `APIENDPOINT="${process.env.APIENDPOINT}"`
fs.writeFile(envFilePath, data, ()=>{console.log('.env file created')})
