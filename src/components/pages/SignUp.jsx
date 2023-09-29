import React from 'react'
import { useLocation } from 'react-router-dom';
import "../../css/login.css"
            
export const Home = () => {


  return (
    <div className="container">
      <form className='form'
      onSubmit={login}>{/*onSubmit: seria un evento de tipo submit*/}
      <p className='title'>Iniciar sesion</p>
          <input className='username input' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Correo electronico' />
          <input className='password input' value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='Contraseña' />
          <button className='btn' type='submit'>Enviar</button>
          <Link className='registrarse' to="/signUp">¿No tienes cuenta?, Registrate!</Link>
      </form>
      </div>
  )
}
