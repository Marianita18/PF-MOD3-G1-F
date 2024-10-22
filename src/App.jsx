import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Index } from "./page/Index";
import QuienesSomos from "./components/pages/QuienesSomos";
import GaleriaImagen from "./components/pages/GaleriaImagen";
import CatalogoHabitacion from "./components/pages/CatalogoHabitacion";
import SuiteStandard from "./components/pages/SuiteStandard";
import SuiteJunior from "./components/pages/SuiteJunior";
import Contacto from "./components/pages/Contacto";
import Nabvar from "./components/common/Navbar"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  return <>
     {/* <Index></Index> */}
     <Nabvar></Nabvar>
   
  </>;
}

export default App;
