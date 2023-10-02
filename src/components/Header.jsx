import React from "react";
import { Link,useNavigate } from "react-router-dom";
import logo from "../assets/logo-library.png"
import logoLogin from "../assets/chopper.png"
import "../css/header.css"


export const Header = ({user}) =>{
    const redirect = useNavigate()

    let handleLogout = (e)=>{
        e.preventDefault()
        //quito el token del localstorage
        localStorage.removeItem('token')
        redirect('/')
    }
    
    
    return(
        <div className="container-header">
            <img className="logo" src={logo} alt="logo" />
            <h2>Campus Library</h2>
            <div className="user">
                <img className='logo-user'src={logoLogin} alt="chopper" />
                <h3>{user.nombre}</h3>
                <Link className="log-out" onClick={handleLogout}>Log out</Link>
            </div>
        </div>
    )
}