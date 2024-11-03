
import { Routes, Route } from "react-router-dom";
import Administrador from "../components/pages/Administrador";
import ModalUsuarios from "../components/pages/usuarios/ModalUsuarios";

const RutasAdmin = () => {
  return (
    <Routes>
      <Route
        path="/administrador"
        element={<Administrador></Administrador>}
      ></Route>
      <Route
        path="/administrador/editar:id"
        element={
          <ModalUsuarios
            titulo={"Editar Usuario"}
            estoyCreando={false}
          ></ModalUsuarios>
        }
      ></Route>
    </Routes>
  );
};

export default RutasAdmin;
