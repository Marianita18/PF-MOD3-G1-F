import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { Index } from "./page/Index";
import QuienesSomos from "./components/pages/QuienesSomos";
import GaleriaImagen from "./components/pages/GaleriaImagen";
import CatalogoHabitacion from "./components/pages/CatalogoHabitacion";
import SuiteStandard from "./components/pages/SuiteStandard";
import SuiteJunior from "./components/pages/SuiteJunior";
import Contacto from "./components/pages/Contacto";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
   <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Index></Index>}></Route>
        <Route
          path="/QuienesSomos"
          element={<QuienesSomos></QuienesSomos>}></Route>
        <Route
          path="/GaleriaImagen"
          element={<GaleriaImagen></GaleriaImagen>}></Route>
        <Route
          path="/CatalogoHabitacion"
          element={<CatalogoHabitacion></CatalogoHabitacion>}></Route>
        <Route
          path="/SuiteStandard"
          element={<SuiteStandard></SuiteStandard>}></Route>
        <Route
          path="/SuiteJunior"
          element={<SuiteJunior></SuiteJunior>}></Route>
        <Route path="/Contacto" element={<Contacto></Contacto>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;