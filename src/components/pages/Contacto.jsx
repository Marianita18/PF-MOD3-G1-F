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
      <section className="container-fluid  seccionContactoInfo p-3">
        <div className="row"> 
          <div className="col-md-6 my-5">
          <h3>Hotel Oasis Urbano </h3>
          <p className="lead"><i class="bi bi-geo-alt"></i> Av. General Paz 576, Piso 9 Oficina 2, Tucumán, Argentina.</p>
          <hr />
          <p><i class="bi bi-phone"></i> <strong> Teléfono:</strong><span className="lead"> +54 9 381-5783030</span></p>
          <p><i class="bi bi-envelope"></i> <strong> E-mail:</strong><span className="lead"> info@hoteloasisurbano.com</span></p>
        </div>
        <div className="col-md-6">
          <h2 className="text-center">CONTÁCTANOS</h2>
          <p>Aqui va el formulario</p>
        </div>
        </div>
            </section>
    
    </section>
  )
}
 
 
