import { Button } from "react-bootstrap";
import React, { useState } from 'react';
import ModalHabitacion from "./ModalHabitacion";

const ItemHabitacion = ({ habitacion,}) => {

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <tr>
      <td>{habitacion.numero}</td>
      <td>{habitacion.tipo}</td>
      <td>{habitacion.precio}</td>
      <td>{habitacion.disponibilidad}</td>
      <td>
        <img
          src={habitacion.foto}
          className="img-fluid"
          alt={habitacion.tipo}
        ></img>
      </td>
      <td className="text-center">
        <Button className="btn btn-warning me-lg-2" >
          <i className="bi bi-pencil-square" onClick={handleShow}>Editar</i>
        </Button>
        <Button variant="danger">
          <i className="bi bi-trash">Borrar</i>
        </Button>
      </td>

      <ModalHabitacion
        show={show}
        handleClose={handleClose}
      />

    </tr>
  );
};

export default ItemHabitacion;
