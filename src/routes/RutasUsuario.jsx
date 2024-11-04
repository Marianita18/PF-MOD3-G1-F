import { Routes, Route } from "react-router-dom";
import { MisReservas } from "../components/pages/MisReservas";


const RutasUsuario = () => {
    return (
        <Routes>
        <Route path="/" element={<MisReservas></MisReservas>}></Route>
        </Routes>
    );
};

export default RutasUsuario;