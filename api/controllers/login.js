import * as login from "../services/login.js";
import {validationResult} from "express-validator"
import { generateToken } from "../jwt/jwt.js";


export const signIn = async(req,res)=>{
    //ratelimit
    console.log(req.rateLimit);
    try {
        const data = await login.signIn(req.body);
        if(!data.length){
            res.status(401).json({
                status:401,
                message:"Usuario no encontrado",
            })
        }
        else{
            let token = await generateToken(data)
            res.status(200).json({
                status:200,
                message:"Nice!",
                user: data,
                token
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
    //ratelimit
    console.log(req.rateLimit);
    //Validacion 
    const errors = validationResult(req); 
    if (!errors.isEmpty()) return res.status(422).send(errors);
    try {
       let data = await login.signUp(req.body);
        let token = await generateToken(data)
        res.status(200).json({
            status:200,
            message:"usuario creado exitosamente",
            token
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