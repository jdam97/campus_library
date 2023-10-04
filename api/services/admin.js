import { connectDB } from "../db/atlas.js";

//login Staff
export const signUpStaff = async(user)=>{
    let db = await connectDB();
    let collection = db.collection('users');
    let value ={...user,rol:'encargado',permisos:['encargado']} 
    await collection.insertOne(value);
    let data = await collection.aggregate([
        {
            $match:{email:user.email,password:user.password}
        },
        {
            $project:{password:0}
        }
    ])
    .toArray()
    return data
}