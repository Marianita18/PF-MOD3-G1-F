import { Button } from "react-bootstrap";
import React, { useState } from 'react';
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
  {Array.isArray(habitacion.fecha) && habitacion.fecha.length > 0
    ? `${habitacion.fecha[0].fechaInicio} - ${habitacion.fecha[0].fechaFin}`
    : 'No disponible'}
</td>
      <td>
        <img
          src={habitacion.imagen}
          className="img-thumbnail"
          alt={habitacion.tipo}
        ></img>
      </td>
      <td className="text-center">
        <Button className="btn btn-warning me-lg-2" >
          <i className="bi bi-pencil-square" onClick={Editar}>Editar</i>
        </Button>
        <Button variant="danger">
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
