import * as products from "../services/encargadoProducts.js";
import * as loans from "../services/encargadoLoans.js";

//Mostrar todos los productos
export const getAllproducts = async(req,res)=>{
    try {
        let data = await products.getAllProducts();
        res.status(200).json({
            status:200,
            message:"Nice!",
            data
        })
    } catch (error) {
        res.send.json({
            message:"Error en listar todos los productos",
            error:error.message
        })
    }
}
//Mostrar todas las reservas pendientes
export const getLoansActivos = async(req,res)=>{
    try {
        let data = await loans.getBookingActivos();
        res.status(200).json({
            status:200,
            message:"Nice!",
            data
        })
    } catch (error) {
        res.send.json({
            message:"Error en listar todas las reservas pendientes",
            error:error.message
        })
    }
}


//Crear nuevo producto
export const createProduct = async(req,res)=>{
    try {
        let data = await products.createProduct(req.body);
        res.status(201).json({
            status:201,
            message:"Usuario creado exitosamente",
            data
        })
    } catch (error) {
        res.status(500).json({
            message:"Error al crear producto",
            error:error.message
        })
    }
}

//Actualizar productos
export const updateProduct = async(req,res)=>{
    try {
        let data = await products.updateProduct(req.body);
        res.status(200).json({
            status:200,
            message:"Nice!",
            data
        })
    } catch (error) {
        res.status(500).json({
            message:"Error al crear usuario",
            error:error.message
        })
    }
}

//hacer un contrato de reserva loan
export const postLoans = async(req,res)=>{
    try {
        let data = await loans.postLoans(req.body);
        res.status(200).json({
            status:200,
            message:"Nice!",
            data
        })
    } catch (error) {
        res.status(500).json({
            message:"Error al crear contrato de reserva",
            error:error.message
        })
    }
}

//Eliminar reserva
export const deleteBooking = async(req,res)=>{
    try {
        let data = await loans.deleteBooking(req.body._id);
        res.status(200).json({
            status:200,
            message:"Nice!",
            data
        })
    } catch (error) {
        res.status(500).json({
            message:"Error al eliminar reserva",
            error:error.message
        })
    }
}

//Actualizar reserva
export const updateBooking = async(req,res)=>{
    try {
        let data = await loans.updateBooking(req.body);
        res.status(200).json({
            status:200,
            message:"Nice!",
            data
        })
    } catch (error) {
        res.status(500).json({
            message:"Error al actualizar reserva",
            error:error.message
        })
    }
}