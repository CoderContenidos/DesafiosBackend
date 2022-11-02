import { Router } from 'express';

const router = Router();

const users = []
router.post('/',(req,res)=>{
    //Estamos pensando en la conexión del formulario, así que suponemos que los datos
    //Llegarán correctamente, no se utilizará tiempo para validaciones.
    const user = req.body;
    users.push(user);
    res.send({status:"success"})
})
router.get('/',(req,res)=>{
    console.log(users);
    res.send({users})
})

export default router;