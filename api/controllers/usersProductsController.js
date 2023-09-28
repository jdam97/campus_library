import * as products from "../services/usersProducts.js";

//Mostrar solo los productos disponibles
export const getProducts = async(req,res)=>{
    try {
        let data = await products.getProducts();
        res.status(200).json({
            status:200,
            message:"Nice!",
            data
        })
    } catch (error) {
        res.status(500).json({
            message:"Error al listar los productos 'disponibles'",
            error:error.message
        })
    }
}

//Hacer una reserva de producto
export const postBooking = async(req,res)=>{
    try {
        let data = await products.postBooking(req.body);
        res.status(200).json({
            status:200,
            message:"Nice!",
            data
        })
    } catch (error) {
        res.status(500).json({
            status:500,
            message:"Error al hacer reserva",
            error:error.message
        })
    }
}

//Eliminar una reserva de producto
export const deleteBooking = async(req,res)=>{
    try {
        await products.deleteBooking(req.body._id);
        res.status(200).json({
            status:200,
            message:"Nice!"
        })
    } catch (error) {
        res.status(500).json({
            status:500,
            message:"Error al eliminar la reserva",
            error:error.message
        })
    }
}