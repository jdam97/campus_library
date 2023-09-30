import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import 'animate.css';
import "../../css/signUp.css"

export const SignUp = () => {
  const redirect = useNavigate()
  //variables radiactivas: de esta manera creo las variables que contendran lo que se coloque en mi formulario como values
  const [nombre,setNombre] = useState('')
  const [apellido,setApellido] = useState('')
  const [nDocumento,setNdocumento] = useState('')
  const [direccion,setDireccion] = useState('')
  const [telefono,setTelefono] = useState('')
  const [email,setEmail] = useState("") 
  const [password,setPassword] = useState("")

  const signUp = ()=>{
    
  }
  return (
    <div className="container animate__animated animate__backInDown" >
      <form className='formSignUp' onSubmit={SignUp}>{/*onSubmit: seria un evento de tipo submit*/}
          <p className='titleSignUp'>Registro</p>
          <input className='words input' type="text" placeholder='Nombre'/>
          <input className='words input' type="text" placeholder='Apellido'/>
          <input className='words input' type="text" placeholder='Numero de documento'/>
          <input className='words input' type="text" placeholder='Direccion'/>
          <input className='words input' type="text" placeholder='Telefono'/>
          <input className='words input' type="email" placeholder='Correo electronico' />
          <input className='words input' type="text" placeholder='Contraseña' />
          <select name="rol">
            <option value="usuario">Usuario</option>
            <option value="encargado">Bibliotecario</option>
          </select>
          <button className='btn' type='submit'>Enviar</button>
      </form>
      </div>
  )
}
