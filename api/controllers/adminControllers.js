
import * as loginStaff from "../services/admin.js"
import {validationResult} from "express-validator"
import { generateToken } from "../jwt/jwt.js";

//Registrar encargados
export const signUpStaff = async(req,res)=>{
    //ratelimit
    console.log(req.rateLimit);
    //Validacion 
    const errors = validationResult(req); 
    if (!errors.isEmpty()) return res.status(422).send(errors);
    try {
        let data = await loginStaff.signUpStaff(req.body);
        let token = await generateToken(data)
        res.status(200).json({
            status:200,
            message:"usuario creado exitosamente",
            token,
            data
        })
    } catch (error) {
        if(error.code == 11000){ // es el error de usuarios repetidos de mongodb
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

//getAllStaff
export const getAllStaff = async(req,res)=>{
    try {
        let data = await loginStaff.getAllStaff()
        res.status(200).json({
            status:200,
            data: data,
            message: "Nice!"
        })
        
    } catch (error) {
        res.status(500).json({
            message:"Error al listar staff",
            error:error.message
        })
    }
}
