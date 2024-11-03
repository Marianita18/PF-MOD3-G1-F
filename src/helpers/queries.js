export const URLUsuarios = import.meta.env.VITE_API_USUARIOS;
export const URLHabitaciones = import.meta.env.VITE_API_HABITACIONES;

export const crearUsuario = async (usuarioNuevo) => {
  try {
    const respuesta = await fetch(URLUsuarios, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuarioNuevo),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};
//! REsserva 
export const Reserva=async(id)=>{
  try {
    const agregarReserva=await fetch(URLHabitaciones+"/"+id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuarioEditado),
    });;
    return agregarReserva

  }catch(error){
    console.log(error)
    return false
  }
}



export const leerUsuarios = async () => {
  try {
    const respuesta = await fetch(URLUsuarios);
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const obtenerUsuarios = async (id) => {
  try {
    const respuesta = await fetch(URLUsuarios + "/" + id);
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const editarUsuario = async (usuarioEditado, id) => {
  try {
    const respuesta = await fetch(URLUsuarios + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuarioEditado),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const borrarusuario = async (id) => {
  try {
    const respuesta = await fetch(URLUsuarios + "/" + id, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const crearHabitacion = async (habitacionNueva) => {
  try {
    const respuesta = await fetch(URLHabitaciones, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(habitacionNueva),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const leerHabitaciones = async () => {
  try {
    const respuesta = await fetch(URLHabitaciones);
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};
