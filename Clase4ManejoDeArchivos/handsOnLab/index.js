import ManagerUsuarios from "./managers/ManagerUsuarios.js";

const manager = new ManagerUsuarios();
const env = async() =>{
    let primeraConsultaUsuarios = await manager.consultarUsuarios();
    console.log(primeraConsultaUsuarios); //Debe devolver vacío
    let user = {
        nombre:"Mauricio",
        apellido:"Espinosa",
        edad:26,
        curso:"Backend"
    }
    let result = await manager.crearUsuario(user);
    console.log(result); //Debe devolver al usuario con un id
    let segundaConsultaUsuarios = await manager.consultarUsuarios();
    console.log(segundaConsultaUsuarios); //Debe devolver al usuario instertado
}
env();