import "./reservas.css"
export const Reservas=()=>{
    return(
    <>
   <h1>reservas</h1>
    <section className="container">
        <div className="habitacion">
           <div  className="box1">
             <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/07/2e/dc/guest-room-with-three.jpg?w=300&h=300&s=1" alt="ff" className="img-reserva" />
           </div>
           <div className=" text-center box">
            <h3 className="title">Quality Hotel Nova Domus</h3>
            <p className="precio">$2300</p>
            <button className="oferta">Ver Oferta</button>

           </div>
           <div className="text-center box">
              <p>Cuarto en Reserva</p>
              <p>2 camas</p>
              <p>3ventanas</p>
              <p>2 televisorres</p>
           </div>
        </div>

    </section>
    </>
)}