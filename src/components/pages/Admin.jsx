import React, {useState,useEffect} from "react";
import {useLocation,Link} from "react-router-dom"
import { Header } from "../Header";
import {AdminLogin} from "../SignUpAdmin"
import 'animate.css';
import "../../css/signUp.css"
import "../../css/cards.css"

export const Admin = ()=>{
    const location = useLocation();
    let user = location.state.user
    const [mostrarSignUp,setmostrarSignUp] = useState(false)
    const [mostrarContenido,setMostrarcontenido] = useState(false);
    const [data,setData]= useState([]);

    useEffect(()=>{
      const showStaff = async ()=>{
        let token = localStorage.getItem('token')
        const data = await (await fetch(`http://127.0.0.1:5047/v1/admin`,{
          method:"GET",
          headers:{
            "Content-Type":"application/json",
            "Authorization":token
          },
        })).json();
        if(data.status ==200){
          setMostrarcontenido(true)
          console.log(data);
        }
        else{
          console.log(data.message)
          alert(data.message)
        }
      };
      showStaff()
    },[])

    const activeButton = ()=>{
      setmostrarSignUp(true)
    }

      //Estructura
      return (
        <div>
            <Header user={user} />
            <div className="contenedor-admin" >
                {!mostrarSignUp ? (
                <div className="contenedor-add">
                  <div className="contenedor-button">
                    <button className="Btn" onClick={activeButton}>
                      <div className="sign">+</div>
                      <div className="text">Create</div>
                    </button>
                  </div>
                  <div className="contenedorCards">
                    <div className="card">Click me</div>
                    <div className="card">Click me</div>
                    <div className="card">Click me</div>
                    <div className="card">Click me</div>
                    <div className="card">Click me</div>
                    <div className="card">Click me</div>
                  </div>
                </div>
                
               ):(<AdminLogin setmostrarSignUp={setmostrarSignUp} />) }
          </div>
        </div>
      )
    }