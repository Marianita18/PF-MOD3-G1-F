import { Reservas } from "./reserva/reserva"
import { Info } from "./componentesindex/Info"
import { Restaurante } from "./componentesindex/Restaurante"
import { Comentarios } from "./componentesindex/Comentarios"
import { Carruselindex } from "./componentesindex/Carruselindex"
// import { Carrusel } from "./componentesIndex/Carrusel"

export default function Index() {
  return (
    <> 
   <Carruselindex></Carruselindex>
    <Info></Info>
   <Restaurante></Restaurante>
   <Comentarios></Comentarios>
   

    </>
  )
}
