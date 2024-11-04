
import { SusReservas } from "./reserva/SusReservas"
import { useState,useEffect } from "react"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import"./reserva/reservas.css"
import "./componentesindex/cssindex/Info.css"
export const MisReservas=()=>{
    let leer=JSON.parse(localStorage.getItem("reserva"))||[]
    const [reservas,setreservas]=useState(leer)
    const [existenReservas,setexistenReservas]=useState(false)

   

  useEffect(() => {
    localStorage.setItem("reserva", JSON.stringify(reservas));
  }, [reservas]); 
  
    return(
    <>
    <main className="main">
      <div className="Informacion">
   
      <div className="d-flex justify-content-around align-items-center mt-3 bg-info-subtle text-center py-3">
        <h3 className="fs-1 text-center">Mis Reservas</h3>
      </div>
   
    
      <hr className="border border-info border-3 opacity-75"></hr>
      </div>
      <section className="container-fluid misreservas">

      
          { reservas.length===0?<h1 className="no-reservas">No hizo Reservas</h1>:reservas.map((el)=>
       <SusReservas id={el.id}precio={el.precio} fecha={el.fecha} img={el.img} tipo={el.tipo} numero={el.numero} setreservas={setreservas} ></SusReservas>
        )}
        
      </section>
      </main>
    </>
    )
}