
import suiteStandar from "../../assets/imgPages/imgCatalogoHabitaciones/imgSuiteStandard/suiteStandar2.png";
import bañoStandar from "../../assets/imgPages/imgCatalogoHabitaciones/imgSuiteStandard/bañoStandar.jpeg";
import vistaPiscina from "../../assets/imgPages/imgCatalogoHabitaciones/imgSuiteStandard/ventanaPiscina.jpeg";
import standar from "../../assets/imgPages/imgCatalogoHabitaciones/imgSuiteStandard/standar.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import "../pages/styles/seccionContacto.css";

export default function SuiteStandard() {
  return (
    <body className="container mainSectionContacto">
      <div className="d-flex justify-content-around align-items-center mt-3 bg-info-subtle text-center py-3">
        <h1>Suite Standar</h1>
      </div>
      <Container className="mt-4 container-fluid">
        <Row>
          <Col>
            <img className="img-fluid" src={suiteStandar} alt="Suite Standar" />
          </Col>
          <Col>
            <img
              className="img-fluid"
              src={bañoStandar}
              alt="Baño suite standar"
            />
          </Col>
          <Col>
            <img className="img-fluid" src={vistaPiscina} alt="vista piscina" />
          </Col>
          <Col>
            <img className="img-fluid" src={standar} alt="Suite Standar" />
          </Col>
        </Row>
      </Container>
      <p className="display-6 text-center">
        Sumérgete en un oasis de tranquilidad en nuestra habitación. Relájate,
        descansa y comienza tu día con un desayuno completo. La refrigeración te
        permite disfrutar de tus bebidas y alimentos favoritos a la temperatura
        ideal.
      </p>
      <hr className="border border-info border-3 opacity-75"></hr>
      <Container>
        <div className="d-flex justify-content-around align-items-center mt-3 bg-info-subtle text-center py-3">
          <h1>Servicios</h1>
        </div>
      </Container>
      <ListGroup className="mt-4">
        <ListGroup.Item>
          Cama de lujo con sábanas suaves para un descanso reparador
        </ListGroup.Item>
        <ListGroup.Item>
          Baño privado con amenities de alta calidad para tu máximo confort
        </ListGroup.Item>
        <ListGroup.Item>
          Amplias ventanas con vistas panorámicas para relajarte
        </ListGroup.Item>
        <ListGroup.Item>
          Conexión de Wifi, escritorio ergonómico para trabajar con comodidad
        </ListGroup.Item>
      </ListGroup>
      <div className="text-center">
        <Button type="submit" className="my-3" variant="success">
          Reserva ahora
        </Button>
      </div>
    </body>
  );
}
