import React from "react";
import { useNavigate } from "react-router-dom";


export const Header = () =>{
    const redirect = useNavigate()
    





    return(
        <div className="container-header">
            <img src="" alt="" />
            <h2>Campus Lirbary</h2>
            <div className="user">
                <img src="" alt="" />
                <h3>Nombre usuario</h3>
                <link>Log out</link>
            </div>
            
        
        
        
        </div>
    )
}