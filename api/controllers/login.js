import * as login from "../services/login.js";

export const signIn = async(req,res)=>{
    try {
        const data =await login.signIn(req.body);
        if(data.length>0){
            res.status(200).json({
                status:200,
                message:"Nice!"
            })
        }
        else{
            res.status(401).json({
                status:401,
                message:"Usuario no encontrado",
            })
        }
    } catch (error) {
        res.status(500).json({
            status:500,
            error:error.message
        })
    }
}

export const signUp = async(req,res)=>{
    try {
        let data = await login.signUp(req.body);
        res.status(200).json({
            status:200,
            message:"usuario creado exitosamente"
        })
    } catch (error) {
        if(error.keyPattern.email == 1){
            res.status(409).json({
                message:"El correo ya está en uso"
            })
        }
        else{
            res.status(500).json({
                error:error.message
            })
        }
    }
}