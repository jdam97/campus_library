import React, { useState } from 'react'
import Modal from "react-modal";
import { useEffect } from 'react';
//css
import "../css/modal.css"

const ModalUsers = ({ isOpen, setIsOpen,codigoProductoSeleccionado,user})=>{
    const [fecha_recogida,setFecha_recogida] = useState("")
    const [fecha_entrega_solicitada,setFecha_entrega_solicitada] = useState("")
    const [codigoProducto,setCodigoProducto] = useState("")
    console.log(user);
    console.log(codigoProductoSeleccionado);
    const reserva = async (e)=>{
        e.preventDefault()
        let token = localStorage.getItem('token')
        const result = await(await fetch(`http://192.168.129.72:5047/v1/usuarios/booking`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization":token
            },
            body:JSON.stringify({
                fecha_recogida,
                fecha_entrega_solicitada,
                codigoProducto:codigoProductoSeleccionado,
                cedulaUser:user
            })
        })).json();
      
        if (result.status ==200){
            console.log(result);
            alert('Registro creado exitosamente')
            setIsOpen(false)
            setFecha_entrega_solicitada('')
            setFecha_recogida('')

        }
        else{
            console.log(result.error);
            alert(result.error)
        }
    }
    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={()=>setIsOpen(false)}
        className="modal-content" // Aplicar clase CSS al contenido del modal
        overlayClassName="modal-overlay" // Aplicar clase CSS al fondo oscurecido
        >
        <form className='form'
        onSubmit={reserva}>{/*onSubmit: seria un evento de tipo submit*/}
      <p className='title'>Reservar</p>
        <div className='date-input'>
            <label htmlFor="fecha_inicio">Fecha Inicio Reserva:</label>
            <input className='words input' value={fecha_recogida} onChange={(e)=>setFecha_recogida(e.target.value)} type="date" placeholder='Fecha Inicio' required/>
        </div> 
        <div className='date-input'> 
            <label htmlFor="fecha_entrega">Fecha Entrega Reserva:</label>
            <input className='words input' value={fecha_entrega_solicitada} onChange={(e)=>setFecha_entrega_solicitada(e.target.value)} type="date" placeholder='Fecha Entrega' required/>
        </div>
       
          <button className='btn' type='submit'>Reservar</button>
      </form> 
       <div className='contenedor-button-modal'>
        <button className="close-button" onClick={()=>setIsOpen(false)}>Close</button>
        </div>
        </Modal>
    )
}

export default ModalUsers;