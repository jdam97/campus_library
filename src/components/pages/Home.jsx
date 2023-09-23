import React from 'react'
import { useLocation } from 'react-router-dom';

export const Home = (props) => {
const location = useLocation();
console.log(location.state.user);
  return (
    <div>{location.state.user.nombre}</div>
  )
}
