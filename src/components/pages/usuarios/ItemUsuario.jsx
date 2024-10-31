
import { Button } from 'react-bootstrap';
import ModalUsuarios from "./ModalUsuarios";
import React, { useEffect, useState } from 'react';
import { borrarusuario, VerUsuarios } from '../../../helpers/queries';

const ItemUsuario = ({ usuario,gmail,id,setUsuarios}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Borrarusuario = async () => {
    const respuesta = await borrarusuario(id); 
    if(respuesta.status===200){
       const response = await VerUsuarios(); // Aquí puedes usar await
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
      alert("error")
    }
    
 
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{usuario}</td>
      <td>{gmail}</td>
      <td className="text-center">
        <Button className="btn btn-warning me-lg-2" onClick={handleShow}>
          <i className="bi bi-pencil-square">Editar</i>
        </Button>
        <Button variant="danger">
          <i className="bi bi-trash" onClick={Borrarusuario}>Borrar</i>
        </Button>
      </td>
      <ModalUsuarios show={show} handleClose={handleClose} />
    </tr>
  );
};

export default ItemUsuario;
