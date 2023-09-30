import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { SignUp } from './SignUp';
import "../../css/login.css"

//Componente
export const Login = () => {
  const redirect = useNavigate()
  //Variables radioactivas
  const [email,setEmail] = useState("") 
  const [password,setPassword] = useState("")
  const [registrar,setRegistrar] = useState(false)

  const login = async (e) => {
  e.preventDefault()
  const data = await(await fetch(`http://127.0.0.0:5047/v1/auth/signIn`,{
    method:"POST",
    headers:{
      "Content-Type": "application/json",
    },
    body:JSON.stringify({
      email,
      password
    })
  })).json();
  if(data.status == 200){
    console.log(data);
    localStorage.setItem("token", data.token);
    redirect("/users", {
      state: {
        user: {
          nombre: data.user[0].nombre
        }
      }
    })
  }else{
    console.log(data.message);
    alert(data.message)
  }
}
//Estructura
  return (
   <div className='contenedor-main'>
    {registrar === false ? (
      <div className="container">
      <form className='form'
      onSubmit={login}>{/*onSubmit: seria un evento de tipo submit*/}
      <p className='title'>Iniciar sesion</p>
          <input className='words input' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Correo electronico' required/>
          <input className='words input' value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='Contraseña' required/>
          <button className='btn' type='submit'>Enviar</button>
          <Link className='registrarse' onClick={()=>setRegistrar(!registrar)} >¿No tienes cuenta?, Registrate!</Link>
      </form> 
      </div>
  ):( <SignUp/>)}
   </div>
   
  )
}
