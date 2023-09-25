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