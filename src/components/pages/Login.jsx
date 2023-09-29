import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import "../../css/login.css"

//Componente
export const Login = () => {
  const redirect = useNavigate()
  //Variables radioactivas
  const [email,setEmail] = useState("") 
  const [password,setPassword] = useState("")

  const login = async (e)=>{
  e.preventDefault()
  let token = localStorage.getItem("token")
  const data = await(await fetch(`http://127.0.0.0:5047/v1/auth/signIn`,{
    method:"POST",
    headers:{
      "Content-Type": "application/json",
      "Authorization": token
    },
    body:JSON.stringify({
      email,
      password
    })
  })).json();

  if(data.status == 200){
    console.log();
    localStorage.setItem("token", data.token);
    redirect("/home", {
      state: {
        user: {
          nombre: data.user[0].nombre
        }
      }
    })
  }else{
    console.log(data.message);
  }
}
//Estructura
  return (
   <div className='contenedor-main'>
    <div className="container">
      <form className='form'
      onSubmit={login}>{/*onSubmit: seria un evento de tipo submit*/}
      <p className='title'>Iniciar sesion</p>
          <input className='words input' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Correo electronico' />
          <input className='words input' value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='Contraseña' />
          <button className='btn' type='submit'>Enviar</button>
          <Link className='registrarse' to="/signUp">¿No tienes cuenta?, Registrate!</Link>
      </form>
      
      </div>
   </div>
   
  )
}
