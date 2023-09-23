import { connectDB } from "../db/atlas.js";

//products "disponibles" for users
export const getProducts = async()=>{
    let db = await connectDB();
    let collection = db.collection('products');
    let data = await collection.find({estado:"disponible"})
    .toArray();
    console.log(data);
    return data
}