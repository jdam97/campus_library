import React, {useState,useEffect} from "react";
import {useLocation,Link} from "react-router-dom"
import { Header } from "../Header";
import { Product } from "../addProducts";
import "../../css/staff.css"
import { Loading } from "../Loader";

export const Staff = ()=>{
const location = useLocation();
let user = location.state.user
const [data,setData]= useState([]);
const [isLoading, setIsLoading] = useState(false);
const [createProducts, setCreateProducts] = useState(false);
let token = localStorage.getItem('token')

useEffect(()=>{
    const showBooking = async()=>{
        setIsLoading(true);
        try {
        const data = await(await fetch(`http://127.0.0.1:5047/v1/staff`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            },
        })).json();
        if(data.status ==200){
            console.log(data);
            setData(data.data)
        }
        else{
            console.log(data.message)
        } 
    }catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false); // Finaliza la carga
      }
    };
    showBooking()
},[])

const buttonAceptar = async(item)=>{
    setIsLoading(true); 
    console.log(item);
    try {
    const datos = await(await fetch(`http://127.0.0.1:5047/v1/staff/loans`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization":token
        },
        body:JSON.stringify({
            fecha_inicio: item.fecha_recogida,
            fecha_entrega: item.fecha_entrega_solicitada,
            cedulaUser: item.cedulaUser,
            codigoProducto: item.codigoProducto
        })
    })).json()
    if(datos.status ===200){
        await(await fetch(`http://127.0.0.1:5047/v1/staff/loans`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            },
            body:JSON.stringify({
                _id:item._id,
                estado:"confirmado"
            })
        })).json()
        window.location.reload()
    }
    else{
        console.log(datos.message);
        console.log(datos);
    }
    }catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
const buttonDenegar = async(item)=>{
    setIsLoading(true); 
    try {
        await(await fetch(`http://127.0.0.1:5047/v1/staff/loans`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            },
            body:JSON.stringify({
                _id:item._id,
                estado:"cancelada"
            })
        })).json()
        window.location.reload()
    } catch (error) {
        console.error(error);
    }finally {
        setIsLoading(false);
      } 
}
const activeButton = ()=>{
    setCreateProducts(true)
  }

return(
    <div>
        <Header user={user} />
        <div className="contenedor-users">
        {!createProducts ? (
                <div className="contenedor-add">
                <div className="contenedor-button">
                  <button className="Btn" onClick={activeButton}>
                    <div className="sign">+</div>
                    <div className="text">Create</div>
                  </button>
                </div>
                <div className="contenedor-table">
                {isLoading ? (
                <Loading/> // Elemento de carga
          ) : (   
                <table>
                    <thead>
                    <tr>
                        <th>Codigo Producto</th>
                        <th>Fecha Inicio</th>
                        <th>Fecha Entrega</th>
                        <th>Estado</th>
                        <th>Aceptar</th>
                        <th>Rechazar</th>
                    </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                        <tr key={item._id}>
                            <td>{item.codigoProducto} </td>
                            <td>{new Date(item.fecha_recogida).toLocaleDateString()}</td>
                            <td>{new Date(item.fecha_entrega_solicitada).toLocaleDateString()}</td>
                            <td>{item.estado} </td>
                            <td><button className="button-staff accept" onClick={()=>buttonAceptar(item)}>Aceptar</button></td>
                            <td><button className="button-staff reject" onClick={()=>buttonDenegar(item)}>Rechazar</button></td>
                        </tr>
                        ))}
                    </tbody>
                </table>)}
                </div>
                </div>
            ):(<Product setCreateProducts={setCreateProducts} />) }
            </div>


    </div>
)    
}