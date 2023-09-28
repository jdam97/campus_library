import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

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
   <div>
      <form
      onSubmit={login}>{/*onSubmit: seria un evento de tipo submit*/}
          <div className="contenedorInputs">
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Correo electronico' />
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='Contraseña' />
            <select name="rol">
              <option value="usuario">Usuario</option>
              <option value="encargado">Bibliotecario</option>
            </select>
          </div>
          <button type='submit'>Enviar</button>
      </form>
      <Link to="/signUp">Sign Up</Link>
   </div>
  )
}
