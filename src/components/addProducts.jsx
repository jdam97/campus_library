import React, {useState} from "react";
import {useLocation} from "react-router-dom"
import 'animate.css';

export const Product = ({setCreateProducts} )=>{
    const [nombre,setNombre] = useState("")
    const [tipo,setTipo] = useState("")
    const [codigoProducto,setCodigoProducto] = useState("")
    const [estado,setEstado] = useState("")
    const [descripcion,setDescripcion] = useState("")
   

    const createProducts = async (e)=>{
        e.preventDefault()
        const token = localStorage.getItem("token")
        const data = await(await fetch(`http://192.168.129.72:5047/v1/staff/productos`,{
          method:"POST",
          headers:{
            "Content-Type": "application/json",
            "Authorization":token
          },
          body:JSON.stringify({
            nombre,
            tipo,
            codigoProducto,
            estado:"disponible",
            descripcion
          })
        })).json();
        if (data.status == 200) {
            console.log(data);
            alert('Producto creado con exito!')
            e.tarjet.reset()
        }
        else{
          console.log(data);
          alert(data.message)
        }
        
      }
      const regret = ()=>{
        setCreateProducts(false)
      }
      //Estructura
      return (
        <div>
                <div className="container animate__animated animate__backInDown" >
                <form className='formSignUp' onSubmit={createProducts}>{/*onSubmit: seria un evento de tipo submit, recibe una funcion que tiene toda la lógica*/}
                    <p className='titleSignUp'>Crear Producto</p>
                    <input className='words input' value={nombre} onChange={(e)=>setNombre(e.target.value)} type="text" placeholder='Nombre Libro' required/>
                    <input className='words input' value={tipo} onChange={(e)=>setTipo(e.target.value)} type="text" placeholder='tipo' required/>
                    <input className='words input' value={codigoProducto} onChange={(e)=>setCodigoProducto(e.target.value)} type="text" placeholder='Codigo del producto' required/>
                    <input className='words input' value={descripcion} onChange={(e)=>setDescripcion(e.target.value)} type="text" placeholder='Descripcion producto'/>
                    <button className='btn' type='submit'>Enviar</button>
                </form>
                
            </div>
              <div className="container-button">
              <button className="button" onClick={regret}>
                <div className="button-box">
                  <span className="button-elem">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 40">
                      <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                    </svg>
                  </span>
                  <span className="button-elem">
                    <svg viewBox="0 0 46 40">
                      <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                    </svg>
                  </span>
                </div>
              </button>
            </div>
        </div>
      )
}