import React, {useState} from "react";
import {useLocation} from "react-router-dom"
import { Header } from "../Header";
import 'animate.css';
import "../../css/signUp.css"

export const Admin = ()=>{
    const location = useLocation();
    let user = location.state.user
    const [nombre,setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [cedula,setcedula] = useState("")
    const [direccion,setDireccion] = useState("")
    const [telefono,setTelefono] = useState("")
    const [email,setEmail] = useState("") 
    const [password,setPassword] = useState("")

    const signUp = async (e)=>{
        e.preventDefault()
        const token = localStorage.getItem("token")
        const data = await(await fetch(`http://127.0.0.1:5047/v1/admin/signUpStaff`,{
          method:"POST",
          headers:{
            "Content-Type": "application/json",
            "Authorization":token
          },
          body:JSON.stringify({
            nombre,
            apellido,
            cedula,
            direccion,
            telefono,
            email,
            password,
          })
        })).json();
        if (data.status == 200) {
            console.log(data);
            alert('Staff creado con exito!')
            e.tarjet.reset()
        }
        else{
          console.log(data.message);
          alert(data.message)
        }
      }
      //Estructura
      return (
        <div>
            <Header user={user} />
            <div className='contenedor-users' >
                <div>+</div>
                <div className="container animate__animated animate__backInDown" >
                <form className='formSignUp' onSubmit={signUp}>{/*onSubmit: seria un evento de tipo submit, recibe una funcion que tiene toda la lógica*/}
                    <p className='titleSignUp'>Registro Staff</p>
                    <input className='words input' value={nombre} onChange={(e)=>setNombre(e.target.value)} type="text" placeholder='Nombre' required/>
                    <input className='words input' value={apellido} onChange={(e)=>setApellido(e.target.value)} type="text" placeholder='Apellido' required/>
                    <input className='words input' value={cedula} onChange={(e)=>setcedula(e.target.value)} type="text" placeholder='Número de documento' required/>
                    <input className='words input' value={direccion} onChange={(e)=>setDireccion(e.target.value)} type="text" placeholder='Dirección' required/>
                    <input className='words input' value={telefono} onChange={(e)=>setTelefono(e.target.value)} type="text" placeholder='Teléfono' required/>
                    <input className='words input' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Correo electrónico' required/>
                    <input className='words input' value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='Contraseña' required/>
                    <button className='btn' type='submit'>Enviar</button>
                </form>
            </div>
        </div>
        </div>
      )
    }