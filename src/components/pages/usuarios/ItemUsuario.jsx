import { Button } from "react-bootstrap";
import ModalUsuarios from "./ModalUsuarios";
import React, { useState } from "react";

const ItemUsuario = ({ usuario, posicion }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Borrarusuario = async () => {
    const respuesta = await borrarusuario(id); 
    if(respuesta.status===200){
       const response = await VerUsuarios();
       Swal.fire({
        title: "El usuario" +usuario,
        text: `El Usuario ${usuario}, fue Borrado correctamente`,
        icon: "success",
      });
        if (response.status === 200) {
          let actualizarUsuarios = await response.json();
          
          setUsuarios(actualizarUsuarios);
        }
    }else{
      Swal.fire({
        title: "Ocurrio un error",
        text: `Ocurrio un error al Borrar usuario`,
        icon: "error",
      });
    }
  };
  
  return (
    <>
      <tr>
        <td>{posicion}</td>
        <td>{usuario.nombreCompleto}</td>
        <td>{usuario.correoUsuario}</td>
        <td className="text-center">
          <Button className="mx-3 my-2" variant="warning" onClick={handleShow}>
            <i className="bi bi-pencil-square">Editar</i>
          </Button>
          <Button className="mx-3 my-2" variant="danger">
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
