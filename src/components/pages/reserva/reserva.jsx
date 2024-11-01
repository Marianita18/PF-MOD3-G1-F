import "./reservas.css"
import { useState } from "react"
export const Reservas=({precio,info,cama,ventana,restricion,habitacion,fecha})=>{
  const [reservado,setReservado]=useState(false)
  
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
      }else {
       Swal.fire("Monto Invalido");
       }
    }); 
  
    
  }
    return(
    <>
 
    <section className="container-fluid">
        <div className="habitacion">
           <div  className="box1">
             <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/07/2e/dc/guest-room-with-three.jpg?w=300&h=300&s=1" alt="ff" className="img-reserva" />
           </div>
           <div className=" text-center box">
            <h3 className="title">{habitacion}</h3> 
            <p className="pc">{ventana} Camas {cama} Ventanas 1 Baño</p>
              <p className="precio">${precio}</p>
               {
                reservado?<p className="fecha">{fecha}</p>:""
              }
            {/* <button className="oferta">Ver Oferta</button> */}

           </div>
           <div className="text-start box">
          
                { reservado?<p className="reservado">Reservado</p>:<p className="no-reservado">No Reservado</p>}
              
              <p className="ph">{info}</p>
              
             <p className="restricion">{restricion}</p>
             
              {
                !reservado?<button className="solicitar btn btn-primary" onClick={()=>estaenReservas(precio)}>Solicitar Reservas</button>:<button className="canselar btn btn-danger" onClick={()=>canselarReserva()}>Canselar Reserva</button>
              }
            
           </div>
        </div>

    </section>
    </>
)}