
export const URLUsuarios=import.meta.env.VITE_API_USUARIOS
export const URLHabitaciones = import.meta.env. VITE_API_HABITACIONES;

export const VerUsuarios= async()=>{
    try{
    const response= await fetch(URLUsuarios)
    return response
    }catch (error){
        console.log(error)
    return(false)
    }
}

export const borrarusuario = async(id)=>{
    try {
        const respuesta = await fetch(URLUsuarios+'/'+id,{
            method: "DELETE"
        return error;
    }
}

export const crearHabitacion = async (habitacionNueva)=> {
    try {
        const respuesta = await fetch(URLHabitaciones,{
           method: "POST",
           headers: {
            "Content-Type":"application/json"

           },
           body: JSON.stringify(habitacionNueva)
        })
        return respuesta
    } catch (error) {
        console.error(error)
      

export const leerHabitaciones = async () => {
    try {
      const respuesta = await fetch(URLHabitaciones);
      return respuesta;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

