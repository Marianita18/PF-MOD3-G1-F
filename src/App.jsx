import Index from "./components/pages/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import GaleriaImagen from "./components/pages/GaleriaImagen";
import SobreNosotros from "./components/pages/SobreNosotros";
import CatalogoHabitacion from "./components/pages/CatalogoHabitacion";
import SuiteStandard from "./components/pages/SuiteStandard";
import SuiteJunior from "./components/pages/SuiteJunior";
import SuitePremiun from "./components/pages/SuitePremiun";
import Contacto from "./components/pages/Contacto";
import Error404 from "./components/pages/Error404";
import Footer from "./components/common/Footer";
import Registro from "./components/common/Registro";
import "bootstrap/dist/css/bootstrap.min.css";
import { Reservas } from "./components/pages/reserva/reserva";
import "./App.css";
import Administrador from "./components/pages/Administrador";
import ModalUsuarios from "./components/pages/usuarios/ModalUsuarios";
import ModalHabitacion from "./components/pages/habitaciones/ModalHabitacion";


function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Index></Index>}></Route>
        <Route
          path="/sobreNosotros"
          element={<SobreNosotros></SobreNosotros>}
        ></Route>
        <Route
          path="/galeriaImagenes"
          element={<GaleriaImagen></GaleriaImagen>}
        ></Route>
        <Route
          path="/catalogoHabitaciones"
          element={<CatalogoHabitacion></CatalogoHabitacion>}
        ></Route>
        <Route
          path="/suiteStandard"
          element={<SuiteStandard></SuiteStandard>}
        ></Route>
        <Route
          path="/suiteJunior"
          element={<SuiteJunior></SuiteJunior>}
        ></Route>
        <Route
          path="/suitePremiun"
          element={<SuitePremiun></SuitePremiun>}
        ></Route>
        <Route path="/contacto" element={<Contacto></Contacto>}></Route>
        <Route
          path="/administrador"
          element={<Administrador></Administrador>}
        ></Route>
        <Route path="/*" element={<Error404></Error404>}></Route>
        <Route
          path="/administrador/editar:id"
          element={
            <ModalUsuarios
              titulo={"Editar Usuario"}
              estoyCreando={false}
            ></ModalUsuarios>
          }
        ></Route>
        <Route
          path="/registro"
          element={<Registro estoyCreando={true}></Registro>}
        ></Route>
        <Route
          path="/administrador/editar:id"
          element={<ModalHabitacion tituloHabitacion={"Editar Habitacion"} estoyCreandoHabitacion={true}></ModalHabitacion>}
        ></Route>

      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
