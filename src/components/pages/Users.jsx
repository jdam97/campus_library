import React, {useState,useEffect} from "react";
import {useLocation} from "react-router-dom"
import { Header } from "../Header";
import "../../css/users.css"
//css

export const Users = () =>{
    const location = useLocation();
    let user = location.state.user;
    const [mostrarContenido,setMostrarcontenido] = useState(false);
    const [data,setData]=useState(null);

    useEffect(()=>{
        const getProducts = async()=>{
            let token = localStorage.getItem('token')
            const data = await(await fetch(`http://127.0.0.1:5047/v1/usuarios/disponibles`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            },
        })).json();
        if (data.status==200) {
            console.log(data);
            setMostrarcontenido(true);
            setData(data)
        }
        else{
            console.log(data.error);
            alert(data.error)
        }
    };
    getProducts()
    },[])

    //Get
   
    
    // const reservar = async () =>{
    //     e.preventDefault()

    // }

    return(
        <div>
            <Header user={user} />
            <div className="contenedor-users"></div>
            <h1>{data && data.data && data.data[1] && data.data[1].nombre} </h1>
        </div>
    )
}