import * as products from "../services/usersProducts.js";

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