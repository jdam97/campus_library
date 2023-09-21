import { loadEnv } from "vite";
import { MongoClient } from "mongodb";

const env = loadEnv("development", process.cwd(), 'ATLAS')

const DB = JSON.parse(env.ATLAS_CONNECTION);

export async function connectDB(){
    try{
        const URI = `mongodb+srv://${DB.user}:${DB.password}@cluster0.lfged0r.mongodb.net/${DB.database}`
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        const client = await MongoClient.connect(URI,options);
        console.log("Conectado");
        return client.db();
    } catch(error){
        return {status:500,message:error}
    }
}