import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import 'animate.css';
import "../../css/signUp.css"

export const SignUp = ({setRegistrar}) => {
  const redirect = useNavigate()
  //variables radiactivas: de esta manera creo las variables que contendran lo que se coloque en mi formulario como values
  const [nombre,setNombre] = useState("")
  const [apellido,setApellido] = useState("")
  const [cedula,setcedula] = useState("")
  const [direccion,setDireccion] = useState("")
  const [telefono,setTelefono] = useState("")
  const [email,setEmail] = useState("") 
  const [password,setPassword] = useState("")

  const signUp = async (e)=>{
    e.preventDefault()
    const data = await(await fetch(`http://192.168.129.72:5047/v1/auth/signUp`,{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
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
      localStorage.setItem("token",data.token);
      redirect("/users",{
      })}
    else{
      console.log(data.error);
      alert(data.error)
    }
  }
  const regret = ()=>{
    setRegistrar(false)
  }
  //Estructura
  return (
    <div>
    <div className="container animate__animated animate__backInDown" >
      <form className='formSignUp' onSubmit={signUp}>{/*onSubmit: seria un evento de tipo submit, recibe una funcion que tiene toda la lógica*/}
          <p className='titleSignUp'>Registro</p>
          <input className='words input' value={nombre} onChange={(e)=>setNombre(e.target.value)} type="text" placeholder='Nombre' required/>
          <input className='words input' value={apellido} onChange={(e)=>setApellido(e.target.value)} type="text" placeholder='Apellido' required/>
          <input className='words input' value={cedula} onChange={(e)=>setcedula(e.target.value)} type="text" placeholder='Número de documento' required/>
          <input className='words input' value={direccion} onChange={(e)=>setDireccion(e.target.value)} type="text" placeholder='Dirección' required/>
          <input className='words input' value={telefono} onChange={(e)=>setTelefono(e.target.value)} type="text" placeholder='Teléfono' required/>
          <input className='words input' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Correo electrónico' required/>
          <input className='words input' value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Contraseña' required/>
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
