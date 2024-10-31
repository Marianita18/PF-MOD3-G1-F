export const URLUsuarios = import.meta.env.VITE_API_USUARIOS;
//post
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
//get mostrar creados
export const leerUsuarios = async () => {
  try {
    const respuesta = await fetch(URLUsuarios);
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};
//get obtener por id
export const obtenerUsuarios = async (id) => {
  try {
    const respuesta = await fetch(URLUsuarios + '/' + id);
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};
//PUT OR PATCH
export const editarUsuario = async (usuarioEditado, id) => {
  try {
    const respuesta = await fetch(URLUsuarios + '/' + id, {
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

const userAdmin = {
    email: "admin@hotel.com",
    password: "123hotel",
  };
  