export const URLUsuarios=import.meta.env.VITE_API_USUARIOS

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
        })
        return respuesta
    } catch (error) {
        console.error(error)
        return error;
    }
}

