import "./reservas.css"
import { useState } from "react"
export const Reservas=()=>{
  const [reservado,setReservado]=useState(false)

  const estaenReservas=()=>{
    setReservado(true)
  }
    return(
    <>
   <h1>reservas</h1>
    <section className="container-fluid">
        <div className="habitacion">
           <div  className="box1">
             <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/07/2e/dc/guest-room-with-three.jpg?w=300&h=300&s=1" alt="ff" className="img-reserva" />
           </div>
           <div className=" text-center box">
            <h3 className="title">Quality Hotel Nova Domus</h3>
            <p className="precio">$2300</p>
            <button className="oferta">Ver Oferta</button>

           </div>
           <div className="text-start box">
              {
                reservado?<p className="reservado">Reservado</p>:<p className="no-reservado">No Reservado</p>
              }
              <p className="ph">HABITACIÓN CON CAMA DE MATRIMONIO Y BAÑO PRIVADO</p>
              <p className="pc">2 Camas 2 Ventanas No se pued</p>
            <button className="solicitar btn btn-primary" onClick={estaenReservas}>Solicitar Reservas</button>
           </div>
        </div>

    </section>
    </>
)}