import React from 'react'
import { useLocation } from 'react-router-dom';
import "../../css/signUp.css"
            
export const SignUp = () => {
  const signUp = ()=>{

  }
  return (
    <div className="container">
      <form className='formSignUp' onSubmit={SignUp}>{/*onSubmit: seria un evento de tipo submit*/}
          <p className='title'>Registro</p>
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
