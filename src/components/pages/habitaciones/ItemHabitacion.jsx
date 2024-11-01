import { Button } from "react-bootstrap";
import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

import ModalHabitacion from "./ModalHabitacion";

const ItemHabitacion = ({ habitacion, setHabitaciones }) => {
  const [show, setShow] = useState(false);

  const [habitacionSeleccionada, setHabitacionSeleccionada] = useState(null);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const Editar = () => {
    setHabitacionSeleccionada(habitacion);
    handleShow();
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
          <i className="bi bi-pencil-square" onClick={Editar}>
            Editar
          </i>
        </Button>
        <Button className="mx-3 my-2" variant="danger" onClick={handleShow}>
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
