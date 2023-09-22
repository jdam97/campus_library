import {connectDB} from "../db/atlas.js";

//Login sigIn
//Se hace de esta manera ya que la validacion de usuario lo hago en la db
export const signIn = async(value)=>{
    let db = await connectDB();
    let collection = db.collection('users');
    let data = await collection.find({email:value.email,password:value.password})
    .toArray();
    return data
}

//Login SignUp
export const signUp = async(value)=>{
    let db = await connectDB();
    let collection = db.collection('users');
    let data = await collection.insertOne(value)
    return data
}