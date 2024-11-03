import "./reservas.css"

export const SusReservas=({id,tipo,infoHabitacion,precio,img,setreservas,fecha})=>{

    const cancelarReserva=(id)=>{
      let datos=JSON.parse(localStorage.getItem("reserva"))||[]
      Swal.fire({
        title: "Esta Seguro de Canselar su Reserva",
        showCancelButton: true,     
        confirmButtonText: "Confirmar",
      }).then((result) => {
        if (result.isDismissed) {
           return;
          
        }else if(result.isConfirmed){
           Swal.fire("Reserva Canselada")
           let actualizar=datos.filter((el)=>el.id!==id)
          setreservas(actualizar)   
        }
      })}
    
    return(
        <>
        
        <div className="susReservas" key={id}>
     
           <div  className="box-reserva">
             <img src={img} alt="img-reserva" className="imgsureserva" />
           </div>
           <div className="text-center box-reserva">
            <h3 className="title-reserva">{tipo}</h3> 
             <p className="pc">{infoHabitacion}</p>
              <p className=" precio">${precio}</p>
              <p className="fecha">${fecha}</p>
             <button className=" btn btn-danger" onClick={()=>cancelarReserva(id)}>Canselar Reserva</button>
             </div>
          
         </div>
       
        </>
    )
}