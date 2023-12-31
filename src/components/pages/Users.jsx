import React, {useState,useEffect} from "react";
import {useLocation} from "react-router-dom"
import { Header } from "../Header";
import ModalUsers from "../ModalUsers"
import Modal from "react-modal";
//css
import "../../css/users.css"


export const Users = () =>{
    Modal.setAppElement("#root");
    const location = useLocation();
    let user = location.state.user;
    const [mostrarContenido,setMostrarcontenido] = useState(false);
    const [data,setData]= useState([]);
    const [modalIsOpen,setModalIsOpen] = useState(false);
    const [codigoProductoSeleccionado,setCodigoProductoSeleccionado] = useState('')


    useEffect(()=>{
        const getProducts = async()=>{
            let token = localStorage.getItem('token')
            const data = await(await fetch(`http://192.168.129.72:5047/v1/usuarios/disponibles`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            },
        })).json();
        if (data.status==200) {
            setMostrarcontenido(true);
            setData(data.data)
        }
        else{
            console.log(data.error);
            alert(data.error)
        }
    };
    getProducts()
    },[])

    const openModalWithProductCode = (codigoProducto) => {
        console.log(codigoProducto);
        // Aquí puedes realizar cualquier lógica adicional necesaria antes de abrir el modal
        setCodigoProductoSeleccionado(codigoProducto); // Guarda el código del producto seleccionado
        setModalIsOpen(true); // Abre el modal
      }

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
                            <td><button className="button-users" onClick={()=>openModalWithProductCode(item.codigoProducto)}>Reservar</button></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                </div> 
            </div>
           {/* modal */}
           <ModalUsers isOpen={modalIsOpen} setIsOpen={setModalIsOpen} codigoProductoSeleccionado = {codigoProductoSeleccionado} user={user?.cedula} />
            </div>
    )
}