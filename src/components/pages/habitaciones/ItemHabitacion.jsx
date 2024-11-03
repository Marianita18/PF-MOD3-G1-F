import { Button } from "react-bootstrap";
import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { borrarHabitacion, leerHabitaciones } from "../../../helpers/queries";
import ModalHabitacion from "./ModalHabitacion";

const ItemHabitacion = ({ habitacion, setHabitaciones }) => {
  const [show, setShow] = useState(false);

  const [habitacionSeleccionada, setHabitacionSeleccionada] = useState(null);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const borrarHabitaciones = async () => {
    const respuesta = await borrarHabitacion(id); 
    if(respuesta.status===200){
       Swal.fire({
        title: "Habitacion eliminada",
        text: `La habitacion ${habitacion.numero}, fue Borrada correctamente`,
        icon: "success",
      });
      //actualizar tabla
      const respuestaActualizada = await leerHabitaciones();
      if (respuestaActualizada.status === 200) {
        let actualizarHabitacion = await respuestaActualizada.json();
        setHabitacionSeleccionada(actualizarHabitaciones);
      }
    }else{
      Swal.fire({
        title: "Ocurrio un error",
        text: `Ocurrio un error al borrar la habitacion ${habitacion.numero} intente en unos minutos`,
        icon: "error",
      });
    }
  };
  return (
    <tr>
      <td>{habitacion.numero}</td>
      <td>{habitacion.tipo}</td>
      <td>{habitacion.precio}</td>
      <td>
        {habitacion.fecha.length > 0 ? `${habitacion.fecha}` : "No disponible"}
      </td>
      <td>
        <img
          src={habitacion.imagen}
          className="img-thumbnail"
          alt={habitacion.tipo}
        ></img>
      </td>
      <td className="text-center">
        <Button className="mx-3 my-2" variant="warning" onClick={handleShow}>
          <i className="bi bi-pencil-square">
            Editar
          </i>
        </Button>
        <Button className="mx-3 my-2" variant="danger" onClick={borrarHabitaciones}>
          <i className="bi bi-trash">Borrar</i>
        </Button>
      </td>

      <ModalHabitacion
        show={show}
        handleClose={handleClose}
        habitacion={habitacionSeleccionada}
        setHabitaciones={setHabitaciones}
      />
    </tr>
  );
};

export default ItemHabitacion;
