import React, {useState,useEffect} from "react";
import {useLocation} from "react-router-dom"
import { Header } from "../Header";
import "../../css/users.css"
//css

export const Users = () =>{
    const location = useLocation();
    let user = location.state.user;
    const [mostrarContenido,setMostrarcontenido] = useState(false);
    const [data,setData]=useState([]);

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
            setMostrarcontenido(true);
            console.log(data.data);
            setData(data.data)
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
            <div className="contenedor-users"> 
                <div className="contenedor-table">
                <table>
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Descripcion</th>
                        <th>Estado</th>
                        <th>Reservar</th>
                    </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                        <tr key={item._id}>
                            <td>{item.nombre} </td>
                            <td>{item.tipo} </td>
                            <td>{item.descripcion} </td>
                            <td>{item.estado} </td>
                            <td><button>Reservar</button></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                </div> 
            </div>
        </div>
    )
}