import { Navigate } from 'react-router-dom';

const RutasProtegidasUsuario = ({children}) => {
  //decidir su logica
  const admin = JSON.parse(sessionStorage.getItem("hotel")) || null;
  //pregunto si NO estoy logueado
  if (admin) {
    //no somos admin
    return <Navigate to={"/administrador"}></Navigate>;
  } else {
    //si soy admin
    return children;
  }
};

export default RutasProtegidasUsuario;
