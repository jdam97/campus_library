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
    let data = await collection.insertOne(value);
    return data //retorna el bojectId del producto ingresado
}

//Actualizar productos
export const updateProduct = async(value)=>{
    const db = await connectDB();
    const collection = db.collection('products');
    let datos = {...value}
    let data = await collection.updateOne({codigoProducto:value.codigoProducto},{$set:datos})
    return data
}
