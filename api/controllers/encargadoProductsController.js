import * as products from "../services/encargadoProducts.js";

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

