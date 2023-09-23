import {connectDB} from "../db/atlas.js";

//Login sigIn
//Se hace de esta manera ya que la validacion de usuario lo hago en la db
export const signIn = async(value)=>{
    let db = await connectDB();
    let collection = db.collection('users');
    let data = await collection.aggregate([
        {
            $match:{email:value.email,password:value.password}
        },
        {
            $project:{password:0}
        }
    ])
    .toArray();
    console.log(data);
    return data
}

//Login SignUp
export const signUp = async(value)=>{
    let db = await connectDB();
    let collection = db.collection('users');
    await collection.insertOne(value);
    let data = await collection.aggregate([
        {
            $match:{email:value.email,password:value.password}
        },
        {
            $project:{password:0}
        }
    ])
    return data
}
//Hdpt1147