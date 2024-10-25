<<<<<<< HEAD

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Index from "./components/pages/Index";
import GaleriaImagen from "./components/pages/GaleriaImagen";
import SobreNosotros from "./components/pages/SobreNosotros"
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
          path="/sobreNosotros"
          element={<SobreNosotros></SobreNosotros>}></Route>
        <Route
          path="/galeriaImagenes"
          element={<GaleriaImagen></GaleriaImagen>}></Route>
        <Route
          path="/catalogoHabitaciones"
         element={<CatalogoHabitacion></CatalogoHabitacion>}></Route>
        <Route
          path="/suiteStandard"
          element={<SuiteStandard></SuiteStandard>}></Route>
        <Route
          path="/suiteJunior"
                element={<SuiteJunior></SuiteJunior>}></Route>
        <Route path="/contacto" element={<Contacto></Contacto>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
=======
import "bootstrap/dist/css/bootstrap.min.css";
import Index from "./components/pages/Index";


function App() {
  return <>
  <h1>OASIS URBANO</h1>
  <Index></Index>
  </>;
>>>>>>> 436c1ab03b10ad39c8fbe7228002d7e196c6e940
}

export default App;
