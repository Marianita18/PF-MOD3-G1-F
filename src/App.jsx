import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Index from "./components/pages/Index";
import QuienesSomos from "./components/pages/QuienesSomos";
import GaleriaImagen from "./components/pages/GaleriaImagen";
import CatalogoHabitacion from "./components/pages/CatalogoHabitacion";
import SuiteStandard from "./components/pages/SuiteStandard";
import SuiteJunior from "./components/pages/SuiteJunior";
import Contacto from "./components/pages/Contacto";
import Error404 from "./components/pages/Error404";
import Footer from "./components/common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Index></Index>}></Route>
        <Route
          path="/quienesSomos"
          path="/quienesSomos"
          element={<QuienesSomos></QuienesSomos>}></Route>
        <Route
          path="/galeriaImagenes"
          path="/galeriaImagenes"
          element={<GaleriaImagen></GaleriaImagen>}></Route>
        <Route
          path="/catalogoHabitaciones"
          path="/catalogoHabitaciones"
          element={<CatalogoHabitacion></CatalogoHabitacion>}></Route>
        <Route
          path="/suiteStandard"
          path="/suiteStandard"
          element={<SuiteStandard></SuiteStandard>}></Route>
        <Route
          path="/suiteJunior"
          path="/suiteJunior"
          element={<SuiteJunior></SuiteJunior>}></Route>
        <Route path="/contacto" element={<Contacto></Contacto>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
        <Route path="/contacto" element={<Contacto></Contacto>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
