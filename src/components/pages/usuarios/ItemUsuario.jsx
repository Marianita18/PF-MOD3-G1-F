import { Button } from 'react-bootstrap';
import ModalUsuarios from "./ModalUsuarios";
import React, { useState } from 'react';

const ItemUsuario = ({ usuario, posicion }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <tr>
        <td>{posicion}</td>
        <td>{usuario.nombreCompleto}</td>
        <td>{usuario.correoUsuario}</td>
        <td className="text-center">
          <Button className='mx-3 my-2' variant="warning" onClick={handleShow}>
            <i className="bi bi-pencil-square">Editar</i>
          </Button>
          <Button className='mx-3 my-2' variant="danger">
            <i className="bi bi-trash">Borrar</i>
          </Button>
        </td>
      </tr>
      <ModalUsuarios 
        show={show} 
        handleClose={handleClose}  
        estoyCreando={false} 
        id={usuario.id}
        usuario={usuario}
      />
    </>
  );
};

export default ItemUsuario;