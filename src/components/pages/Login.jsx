import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { SignUp } from './SignUp';
import "../../css/login.css"

//Componente
export const Login = () => {
  const redirect = useNavigate()
  //Variables radioactivas:de esta manera creo las variables que contendran lo que se coloque en mi formulario como values
  const [email,setEmail] = useState("") 
  const [password,setPassword] = useState("")
  const [registrar,setRegistrar] = useState(false)
  

  const login = async (e) => {
  e.preventDefault()
  const data = await(await fetch(`http://192.168.129.72:5047/v1/auth/signIn`,{
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
    if (data.user[0].rol==="usuario") {
      redirect("/users",{
        state:{
          user: data.user[0]
        }
      })
    }
    else if(data.user[0].rol==="encargado"){
      redirect("/staff", {
        state:{
          user: data.user[0]
        }
      })
    }
    else{
      redirect("/admin", {
        state:{
          user: data.user[0]
        }
      })
    }
    
  }else{
    console.log(data.message);
    alert(data.message)
  }
}
// const activeButton = ()=>{
//   setmostrarSignUp(true)
// }
//Estructura
  return (
   <div className='contenedor-main'>
    {registrar === false ? (
      <div className="container">
      <form className='form'
      onSubmit={login}>{/*onSubmit: seria un evento de tipo submit*/}
      <p className='title'>Iniciar sesión</p>
          <input className='words input' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Correo electrónico' required/>
          <input className='words input' value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Contraseña' required/>
          <button className='btn' type='submit'>Enviar</button>
          <Link className='registrarse' onClick={()=>setRegistrar(!registrar)} >¿No tienes cuenta?, ¡Registrate!</Link>
      </form> 
      </div>
  ):( <SignUp setRegistrar={setRegistrar} />)}
   </div>
  )
}
