import { Reservas } from "./reserva/reserva"
import { Info } from "./componentesindex/Info"
import { Restaurante } from "./componentesindex/Restaurante"
// import { Testimonios } from "./componentesIndex/Testimonios"
// import { Carrusel } from "./componentesIndex/Carrusel"

export default function Index() {
  return (
    <> 
    {/* <Carrusel></Carrusel> */}
    <Info></Info>
   <Restaurante></Restaurante>
   {/* <Testimonios></Testimonios> */}

    </>
  )
}
