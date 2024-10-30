import { Reservas } from "./reserva/reserva"
import { Info } from "./componentesindex/Info"
import { Restaurante } from "./componentesindex/Restaurante"
import { Comentarios } from "./componentesindex/Comentarios"
// import { Carrusel } from "./componentesIndex/Carrusel"

export default function Index() {
  return (
    <> 
    {/* <Carrusel></Carrusel> */}
    <Info></Info>
   <Restaurante></Restaurante>
   <Comentarios></Comentarios>
   

    </>
  )
}
