
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemHabitacion = ({habitacion, setHabitaciones}) => {
    return (
        <tr>
          <td>{habitacion.numero}</td>
          <td>{habitacion.tipo}</td>
          <td>{habitacion.precio}</td>
          <td>{habitacion.disponibilidad}</td>
          <td><img src={habitacion.foto} className="img-fluid" alt={habitacion.tipo}></img></td>
          <td className='text-center'>          
          <Link className="btn btn-warning me-lg-2" to={`/administrador/editar/${habitacion.numero}`}>
            <i className="bi bi-pencil-square"></i>
          </Link>
          <Button variant="danger"  >
            <i className="bi bi-trash"></i>
          </Button></td>
        </tr>
    );
};

export default ItemHabitacion;