import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ModalHabitacion = ({ show, handleClose }) => {
  const [tipo, setTipo] = useState("");
  const [fechaInicio, setFechaInicio] = useState(null);
  const [fechaFin, setFechaFin] = useState(null);

  const seleccionarTipo = (key) => {
    setTipo(key);
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Habitacion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="numeroHabitacion">
              <Form.Label for="Name">Numero de Habitacion</Form.Label>
              <Form.Control type="text" placeholder="20" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="tipoHabitacion">
              <Form.Label for="tipo">Tipo de Habitacion</Form.Label>
              <Form.Control
                type="text"
                placeholder="Seleccione el tipo de habitacion"
                value={tipo}
              />
              <Dropdown className="my-2" onSelect={seleccionarTipo}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {"Seleccionar tipo"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Suite Standard">
                    Suite Standard
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Suite Junior">
                    Suite Junior
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Suite Premium">
                    Suite Premium
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>

            <Form.Group className="mb-3" controlId="precioHabitacion">
              <Form.Label for="Precio">Precio</Form.Label>
              <Form.Control type="$" placeholder="$100" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="fechaoHabitacion">
              <Form.Label for="Fecha">Disponibilidad en Fechas</Form.Label>
              <div className="d-flex justify-content-between">
                <DatePicker
                  selected={fechaInicio}
                  onChange={setFechaInicio}
                  startDate={fechaInicio}
                  endDate={fechaFin}
                  placeholderText="Fecha Inicio"
                  dateFormat="dd-MM-yyyy"
                />
                <DatePicker
                  selected={fechaFin}
                  onChange={setFechaFin}
                  startDate={fechaInicio}
                  endDate={fechaFin}
                  placeholderText="Fecha Fin"
                  dateFormat="dd-MM-yyyy"
                  minDate={fechaInicio}
                />
              </div>
              {fechaInicio && fechaFin && (
                <Form.Control
                  type="Fecha"
                  placeholder="30-10-2024 a 05-11-2024"
                  value={`${fechaInicio.toLocaleDateString(
                    "es-ES"
                  )} a ${fechaFin.toLocaleDateString("es-ES")}`}
                  readOnly
                />
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="imagenHabitacion">
              <Form.Label for="imagen">Foto de la Habitacion</Form.Label>
              <Form.Control type="imagen" placeholder="ingrese la URL" />
            </Form.Group>
          </Form>
          <Button
            className="mt-3"
            variant="primary"
            type="submit"
            onClick={handleClose}
          >
            Enviar
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalHabitacion;
