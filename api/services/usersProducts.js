import { connectDB } from "../db/atlas.js";
import { ObjectId } from "mongodb";

//productoss "disponibles" para usuarios
export const getProducts = async()=>{
    let db = await connectDB();
    let collection = db.collection('products');
    let data = await collection.find({estado:"disponible"})
    .toArray();
    return data
}

//Hacer una reserva
export const postBooking = async(value)=>{
    const db = await connectDB();
    const collection = db.collection('booking');
    let fechaInicio = new Date(value.fecha_recogida);
    let fechaFinal = new Date(value.fecha_entrega_solicitada);
    let datos = {...value,fecha_recogida:fechaInicio,fecha_entrega_solicitada:fechaFinal};
    const data = await collection.insertOne(datos);
    console.log(data);
    return data
}

//Eliminar reserva
export const deleteBooking = async(value)=>{
    console.log(value);
    const db = await connectDB();
    const collection = db.collection('booking');
    const data = await collection.deleteOne({_id: new ObjectId(value)})
    return data
}
