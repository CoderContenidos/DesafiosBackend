import UserManager from "./Managers/UserManager.js";

const userManager = new UserManager();

const env = async() =>{
    let users = await userManager.getUsuarios();
    console.log(users) // []
    let user = {
        nombre:'Marisol',
        apellido:'Cadena',
        nombre_usuario:'MomoRompe',
        contrasena:'123'
    }
    await userManager.crearUsuario(user);
    let segundaConsultaUsers = await userManager.getUsuarios();
    console.log(segundaConsultaUsers); // Revisar contraseña hasheada.
    await userManager.validarUsuario('MomoRompe','123') // Logueado
    await userManager.validarUsuario('MomoRompe','1234')//Contraseña inválida
}
env();