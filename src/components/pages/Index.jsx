import { Reservas } from "./reserva/reserva"
export default function Index() {
  return (
    <>
    <Reservas precio={1000} info={"Amplia y elegante habitación decorada con estilo moderno, perfecta para parejas o viajeros individuales que buscan comodidad y lujo. Ofrece una vista panorámica al mar desde un balcón privado."} ventana={3} cama={2}  restricion={"No hacer Ruido"} habitacion={"Mono Ambiente vista Paronamica"} fecha={"28/10/24 a 1/11/24"}></Reservas>
    <Reservas precio={500} info={"Amplia y elegante habitación decorada con estilo moderno, perfecta para parejas o viajeros individuales que buscan comodidad y lujo. Ofrece una vista panorámica al mar desde un balcón privado."} ventana={3} cama={2}  restricion={"No hacer Ruido"} habitacion={"Mono Ambiente vista Paronamica"}></Reservas>
    <Reservas precio={4300} info={"Amplia y elegante habitación decorada con estilo moderno, perfecta para parejas o viajeros individuales que buscan comodidad y lujo. Ofrece una vista panorámica al mar desde un balcón privado."} ventana={3} cama={2}  restricion={"No hacer Ruido"} habitacion={"Mono Ambiente vista Paronamica"}></Reservas>
    <Reservas precio={1000} info={"Amplia y elegante habitación decorada con estilo moderno, perfecta para parejas o viajeros individuales que buscan comodidad y lujo. Ofrece una vista panorámica al mar desde un balcón privado."} ventana={3} cama={2}  restricion={"No hacer Ruido"} habitacion={"Mono Ambiente vista Paronamica"}></Reservas>
   

    </>
  )
}
