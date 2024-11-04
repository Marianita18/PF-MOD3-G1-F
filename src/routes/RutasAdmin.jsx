import { Routes, Route } from "react-router-dom";
import Administrador from "../components/pages/Administrador";
import ModalUsuarios from "../components/pages/usuarios/ModalUsuarios";
import ModalHabitacion from "../components/pages/habitaciones/ModalHabitacion"

const RutasAdmin = () => {
  return (
    <Routes>
      <Route
        path="/administrador"
        element={<Administrador></Administrador>}
      ></Route>
      <Route
        path="/administrador/editar:id"
        element={<ModalUsuarios estoyCreando={false}></ModalUsuarios>}
      ></Route>
      <Route
        path="/administrador/editar:id"
        element={
          <ModalHabitacion estoyCreandoHabitacion={true}></ModalHabitacion>
        }
      ></Route>
    </Routes>
  );
};

export default RutasAdmin;
