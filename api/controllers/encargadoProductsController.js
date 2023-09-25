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
            message:"Error al crear usuario",
            error:error.message
        })
    }
}