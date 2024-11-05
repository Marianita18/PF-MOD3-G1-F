import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/imgCommon/imgNavbar/Logo.png";
import "./styles/navbar.css";
import { useState } from "react";
import LogIn from "./LogIn"; 
import Button from "react-bootstrap/Button"
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function NavBar({usuarioLogueado, setUsuarioLogueado, mostrarModalLogIn, handleAbrirModalLogIn, handleCerrarModalLogIn}) {
  const [mostrarModal, setMostrarModal] = useState(false);

  const navegacion = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("hotel");
    setUsuarioLogueado({});
    navegacion("/");
  };

  useEffect(() => {

  }, [usuarioLogueado]);

  return (
    <>
      <Navbar
        expand="lg"
        className="nav mx-0 px-0 my-0 py-0"
        data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand as={Link} end to="/">
            <img src={Logo} width={250} alt="Logo Hotel Oasis Urbano" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="nav" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0">
              <NavLink end to="/" className="nav-link fw-bold">
                Inicio
              </NavLink>
              <NavLink className="nav-link fw-bold" end to="/sobreNosotros">
                ¿Quiénes somos?
              </NavLink>
              <NavLink className="nav-link fw-bold" end to="/galeriaImagenes">
                Galeria de Imágenes
              </NavLink>            
              <NavDropdown
                className="fw-bold"
                title="Catálogo Habitaciones"
                data-bs-theme="light">
                <NavDropdown.Item
                  as={Link}
                  className="fw-bold"
                  end to="/suiteStandard">
                  Suite Standard
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  className="fw-bold"
                  end to="/suiteJunior">
                  Suite Junior
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} className="nav-item fw-bold" end to="/suitePremiun">
                  Suite Premium
                </NavDropdown.Item>
              </NavDropdown>   
              {(!usuarioLogueado || usuarioLogueado.role !== "admin") && (
                <NavLink className="nav-link fw-bold" end to="/reservas">Sus Reservas</NavLink>
              )}
              <NavLink className="nav-link fw-bold" end to="/contacto">
                Contacto
              </NavLink>
              {
                usuarioLogueado && usuarioLogueado.role === "admin"?(
                  <>
                  <NavLink className="nav-link fw-bold" end to="/administrador">
                  administrador
                </NavLink>
                <Button className="my-1 py-1" onClick={logout}>Cerrar sesion</Button>
                </>
                ):(
                  <NavLink className="nav-link fw-bold" onClick={handleAbrirModalLogIn}>
                  login
                </NavLink>
                )
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LogIn show={mostrarModalLogIn} handleClose={handleCerrarModalLogIn} setUsuarioLogueado={setUsuarioLogueado} />
    </>
  );
}

export default NavBar;


