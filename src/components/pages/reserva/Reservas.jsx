import { json } from "react-router-dom"
import "./reservas.css"
import { act, useState } from "react"
import { Reserva } from "../../../helpers/queries"
import { ReservaCanselada } from "../../../helpers/queries"
import React,{useEffect} from "react"
import { easeIn } from "framer-motion"

export const Reservas=({reserva,precio,img,fecha,tipo,info,infoHabitacion,id})=>{
  const [reservado,setReservado]=useState(false)
 

  useEffect(() => {
    const actualizar = () => {
      setReservado(reserva === true);
      console.log(reserva);
      
    };
    actualizar();
  }, [reserva]); 

 

 
const Reservar = async (id) => {
    console.log(id)
   const respuesta = await Reserva(id);
      if (respuesta.status === 200) {
        console.log(respuesta)
 
      } else{
      alert(error)
      }
    
  };
 
  
  
  const estaenReservas=(precio,id)=>{
    Swal.fire({
      title: "Reserve su Habitacion",
      input: "number",        
     inputPlaceholder:`Monto Requerido $${precio}`,
      showCancelButton: true,     
      confirmButtonText: "Pagar",
    }).then((result) => {
      if (result.isDismissed) {
         return;
        
      } else if (  result.value && Number(result.value) === precio) {
       Swal.fire("Gracias por Reserva");
        Reservar(id)
        
     setReservado(true)
       const reserva = {
        tipo,
        precio,
        fecha,
        info,
        img,
        id
      
      };
      
         const reservasExistentes = JSON.parse(localStorage.getItem("reserva")) || [];
         const nuevasReservas = [...reservasExistentes, reserva];
         localStorage.setItem("reserva", JSON.stringify(nuevasReservas));
      }else {
       Swal.fire("Monto Invalido");
       }
    }); 
  
    
  }
    return(
    <>
 
    <section className="container-fluid">
        <div className="habitacion" key={id}>
           <div  className="box1">
             <img src={img} alt="ff" className="img-reserva" />
           </div>
           <div className=" text-center box">
            <h3 className="title">{tipo}</h3> 
             <p className="pc">{infoHabitacion}</p>
              <p className="precio">${precio}</p>
              
               {
                reservado?<p className="fecha">{fecha}</p>:""
              }
          

           </div>
           <div className="text-start box">
          
                { reservado?<p className="reservado">Reservado</p>:<p className="no-reservado">No Reservado</p>}
                <p className="ph">{info}</p>
                {
                !reservado?<button className="solicitar btn btn-primary" onClick={()=>estaenReservas(precio,id)}>Solicitar Reservas</button>:<p className="reserva-true">En reserva</p>
                }
            
           </div>
        </div>

    </section>
    </>
)}