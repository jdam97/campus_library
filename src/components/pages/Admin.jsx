import React, {useState,useEffect} from "react";
import {useLocation,Link} from "react-router-dom"
import { Header } from "../Header";
import {AdminLogin} from "../SignUpAdmin"
import 'animate.css';
import "../../css/signUp.css"
import "../../css/cards.css"
import logoCards from "../../assets/chopper.png"

export const Admin = ()=>{
    const location = useLocation();
    let user = location.state.user
    const [mostrarSignUp,setmostrarSignUp] = useState(false)
    const [mostrarContenido,setMostrarcontenido] = useState(false);
    const [data,setData]= useState([]);

    useEffect(()=>{
      const showStaff = async ()=>{
        let token = localStorage.getItem('token')
        const data = await (await fetch(`http://192.168.129.72:5047/v1/admin`,{
          method:"GET",
          headers:{
            "Content-Type":"application/json",
            "Authorization":token
          },
        })).json();
        if(data.status ==200){
          setMostrarcontenido(true)
          console.log(data);
          setData(data.data)
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

                  {data.map((item, index)=>(
                      <div key={index} className="card">
                      <div className="card-info">
                        <img src= {logoCards} alt="" />
                        <h3><b>Nombre:</b> {item.nombre}</h3>
                        <p><b> Apellido:</b> {item.apellido}</p>
                        <p><b>Cedula:</b> {item.cedula}</p>
                        <p><b>Email:</b><br/>{item.email}</p>
                        <p><b>Rol:</b> {item.rol}</p>
                      </div>
                    </div>
                    ))}
                    
                  </div>
                </div>
                
               ):(<AdminLogin setmostrarSignUp={setmostrarSignUp} />) }
          </div>
        </div>
      )
    }