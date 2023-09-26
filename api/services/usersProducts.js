import { connectDB } from "../db/atlas.js";

//productoss "disponibles" para usuarios
export const getProducts = async()=>{
    let db = await connectDB();
    let collection = db.collection('products');
    let data = await collection.find({estado:"disponible"})
    .toArray();
    console.log(data);
    return data
}


