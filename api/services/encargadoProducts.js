import {connectDB} from "../db/atlas.js";

//Listar todos los productos
export const getAllProducts = async()=>{
    const db = await connectDB();
    const collection = db.collection('products');
    const data = await collection.find()
    .toArray();
    return data
}

//Crear nuevo producto
export const createProduct = async(value)=>{
    const db = await connectDB();
    const collection = db.collection('products');
    await collection.insertOne(value);
}