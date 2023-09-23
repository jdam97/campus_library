import { loadEnv } from "vite";
import express from "express";
import v1 from "./v1/index.js";
import cors from "cors"; //debo colocarlos si o si ya que es una ley del navegador
const env = loadEnv("development", process.cwd(), 'VITE')
const app = express();
app.use(express.json())
app.use(cors());



//Endpoints
app.use("/v1",v1)


let config = {
    port: env.VITE_PORT_BACKEND,
    hostname: env.VITE_HOSTNAME
}

app.listen(config,()=>{
    console.log(`http://${config.hostname}:${config.port}`);
})