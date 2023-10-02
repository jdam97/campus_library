import React from "react";
import { Navigate } from "react-router-dom";

export const Auth = (props)=>{
    const user = localStorage.getItem('token')
    if(!user){
        return <Navigate  to="/"/>
    }
    else{
        return props.children
    }

}