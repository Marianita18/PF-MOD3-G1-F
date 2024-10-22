import { Infoindex } from "../components/Infoindex"
import { Comida } from "../components/Comida"
import { Comentarios } from "../components/Comentarios"
import { Carrusel } from "../components/Carrousel"
import Nabvar from "../components/common/Navbar"



export const Index=()=>{
    return(
         <>
         <Nabvar></Nabvar>
        
         <main className="Informacion">
         <Carrusel></Carrusel>
         <Infoindex></Infoindex>
         <Comida></Comida>
         <Comentarios></Comentarios>
         </main>
    
        
         
         
         </>
    )
}