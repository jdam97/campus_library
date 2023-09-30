import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import 'animate.css';
import "../../css/signUp.css"

export const SignUp = () => {
  const redirect = useNavigate()
  //variables radiactivas: de esta manera creo las variables que contendran lo que se coloque en mi formulario como values
  const [nombre,setNombre] = useState('')
  const [apellido,setApellido] = useState('')
  const [cedula,setcedula] = useState('')
  const [direccion,setDireccion] = useState('')
  const [telefono,setTelefono] = useState('')
  const [email,setEmail] = useState("") 
  const [password,setPassword] = useState("")

  const signUp = async (e)=>{
    e.preventDefault()
    const data = await(await fetch(`http://127.0.0.0:5047/v1/auth/signUp`,{
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
  //Estructura
  return (
    <div className="container animate__animated animate__backInDown" >
      <form className='formSignUp' onSubmit={signUp}>{/*onSubmit: seria un evento de tipo submit, recibe una funcion que tiene toda la lógica*/}
          <p className='titleSignUp'>Registro</p>
          <input className='words input' value={nombre} onChange={(e)=>setNombre(e.target.value)} type="text" placeholder='Nombre'/>
          <input className='words input' value={apellido} onChange={(e)=>setApellido(e.target.value)} type="text" placeholder='Apellido'/>
          <input className='words input' value={cedula} onChange={(e)=>setcedula(e.target.value)} type="text" placeholder='Número de documento'/>
          <input className='words input' value={direccion} onChange={(e)=>setDireccion(e.target.value)} type="text" placeholder='Dirección'/>
          <input className='words input' value={telefono} onChange={(e)=>setTelefono(e.target.value)} type="text" placeholder='Teléfono'/>
          <input className='words input' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Correo electrónico' />
          <input className='words input' value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='Contraseña' />
          <button className='btn' type='submit'>Enviar</button>
      </form>
      </div>
  )
}
