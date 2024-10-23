import { Container } from "react-bootstrap";
import "../pages/styles/seccionContacto.css"

export default function Contacto() {
  return (
    
       <section className="mainSectionContacto">
      <div className="bannerContacto">
        <img
          src="https://images.pexels.com/photos/3768095/pexels-photo-3768095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="imagen de contacto"
          className="bannerContactoImg"
        />
        <Container className="text-center overlay">
          <h1
            className="tituloSeccionContacto"
          >
            Contacto
          </h1>
        </Container>
      </div>
    
    </section>
  )
}
 
 
