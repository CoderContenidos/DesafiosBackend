import fs from 'fs';
import crypto from 'crypto';

const path = './files/Users.json'
export default class UserManager {

    getUsuarios = async() =>{
        if(fs.existsSync(path)){
            const data = await fs.promises.readFile(path,'utf-8');
            const users = JSON.parse(data);
            return users;
        }else return [];
    }

    crearUsuario = async(usuario) =>{
        const usuarios = await this.getUsuarios();
        usuario.salt = crypto.randomBytes(128).toString('base64');
        //Un salt será un "código secreto" único para cada encriptado de contraseña
        usuario.contrasena = crypto.createHmac('sha256',usuario.salt).update(usuario.contrasena).digest('hex');
        usuarios.push(usuario);
        await fs.promises.writeFile(path,JSON.stringify(usuarios,null,'\t'));
        return usuario;
    }

    validarUsuario = async(username,contrasena) =>{
        const usuarios = await this.getUsuarios();
        const usuarioIndex = usuarios.findIndex(u=>u.nombre_usuario===username);
        if(usuarioIndex===-1) {
            console.log("error, usuario no encontrado");
            return;
        }
        const usuario = usuarios[usuarioIndex];
        const newHash = crypto.createHmac('sha256',usuario.salt).update(contrasena).digest('hex');
        //Ya que no podemos "descifrar" la contraseña original del usuario, tenemos que hashear el intento
        //de contraseña y compararla con la contraseña que tenga guardada el usuario.
        //Nota entonces que, validar una contraseña no es descifrar la contraseña guardada, sino comparar con la contraseña ingresada
        
        if(newHash===usuario.contrasena){
            console.log("Logueado");
        }else{
            console.log("Contraseña inválida");
        }
    }
}