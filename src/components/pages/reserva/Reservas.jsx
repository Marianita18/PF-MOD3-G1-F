import { json } from "react-router-dom"
import "./reservas.css"
import { useState } from "react"

export const Reservas=({precio,img,fecha,tipo,info,infoHabitacion,id})=>{
  const [reservado,setReservado]=useState(false)
  const [guardar,setguardar]=useState()
  console.log(guardar)
  
  const canselarReserva=()=>{
    Swal.fire({
      title: "Esta Seguro de Canselar su Reserva",
         
   
     
      showCancelButton: true,     
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isDismissed) {
         return;
        
      }else if(result.isConfirmed){
         Swal.fire("Reserva Canselada")
         setReservado(false)
      }
    }); 
   }
  const estaenReservas=(precio)=>{
    Swal.fire({
      title: "Reserve su Habitacion",
      input: "number",        
   
      inputPlaceholder:`Monto Requerido $${precio}`,
      showCancelButton: true,     
      confirmButtonText: "Pagar",
    }).then((result) => {
      if (result.isDismissed) {
         return;
        
      } else if (  result.value && Number(result.value) === precio ) {
       Swal.fire("Gracias por Reserva");
       setReservado(true);
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
                !reservado?<button className="solicitar btn btn-primary" onClick={()=>estaenReservas(precio)}>Solicitar Reservas</button>:<button className="canselar btn btn-danger" onClick={()=>canselarReserva()}>Canselar Reserva</button>
              }
            
           </div>
        </div>

    </section>
    </>
)}