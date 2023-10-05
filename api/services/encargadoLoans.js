import { connectDB } from "../db/atlas.js";
import { ObjectId } from "mongodb";

//Post de loans(contratos prestamos)
export const postLoans = async(value)=>{
    let db = await connectDB();
    let collection = db.collection('loans');
    let fechaInicio = new Date(value.fecha_inicio)
    let fechaEntrega = new Date(value.fecha_entrega)
    let loan ={...value,estado:"activo",fecha_inicio:fechaInicio,fecha_entrega:fechaEntrega}
    let data = await collection.insertOne(loan);
    return data
}
//Get todas las reservas pendientes
export const getBookingActivos = async()=>{
    let db = await connectDB();
    let collection = db.collection('booking');
    let data = await collection.find({estado:"pendiente"})
    .toArray();
    return data
}

//Get todos los contratos activos
export const getLoansActivos = async()=>{
    let db = await connectDB();
    let collection = db.collection('loans');
    let data = await collection.find({estado:"activo"})
    .toArray();
    return data
}

//Get todos los prestamos
export const getAllLoans = async()=>{
    let db = await connectDB();
    let collection = db.collection('loans');
    let data = await collection.find()
    .toArray();
    return data
}

//Get prestamo por cedula
export const getByCc = async(cedula)=>{
    let db = await connectDB();
    let collection = db.collection('loans');
    let data = await collection.aggregate([
        {
            $match: { cedulaUser: cedula }
        },
        {
            $lookup: {
                from: "products",
                localField: "codigoProducto",
                foreignField: "codigoProducto",
                as: "producto"
            }
        },
        {
            $lookup: {
                from: "users",
                localField: "cedulaUser",
                foreignField: "cedula",
                as: "usuario_prestamo"
            },
        },
        {
            $unwind: "$usuario_prestamo"
        }, 
        {
            $project: {
                _id: 0,
                fecha_inicio: 1,
                fecha_entrega: 1,
                estado: 1,
                codigoProducto: 1,
                nombreProducto: "$producto.nombre",
                usuario: {
                    nombre: "$usuario_prestamo.nombre",
                    apellido: "$usuario_prestamo.apellido",
                    direccion: "$usuario_prestamo.direccion",
                    telefono: "$usuario_prestamo.telefono",
                    email: "$usuario_prestamo.email",
                    cedula: "$usuario_prestamo.cedula",
                    rol: "$usuario_prestamo.rol"
                }
            }
        }
    ]).toArray();
    return data;
}

//Eliminar reservas
export const deleteBooking = async(value)=>{
    console.log(value);
    const db = await connectDB();
    const collection = db.collection('booking');
    const data = await collection.deleteOne({_id: new ObjectId(value)})
    return data
}

//Actualizar Reservas
export const updateBooking = async(value)=>{
    console.log(value.estado);
    const db = await connectDB();
    const collection = db.collection('booking');
    let data = await collection.updateOne({_id:new ObjectId(value._id)},{$set:{estado:value.estado}})
    return data
}