import React, {useState} from "react";
import {useLocation} from "react-router-dom"
import {useNavigate} from "react-router-dom";
import { Header } from "../Header";
//css

export const Users = () =>{
    
    const location = useLocation();
    let user = location.state.user;
    
    
    // const Allproducts = () =>{


    // }
    
    // const reservar = async () =>{
    //     e.preventDefault()

    // }




    return(
        
        <div>
            <Header user={user} />
            <p>hola </p>
        </div>
    )
}