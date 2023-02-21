import { Router } from 'express';
import userModel from '../models/Users.model.js';

const router = Router();

router.post('/register',async(req,res)=>{
    const { first_name, last_name, email, age, password} = req.body;
    const exists = await userModel.findOne({email});
    if(exists) return res.status(400).send({status:"error",error:"User already exists"});
    const user = {
        first_name,
        last_name,
        email,
        age,
        password //De momento no vamos a hashearlo, eso corresponde a la siguiente clase.
    }
    let result = await userModel.create(user);
    res.send({status:"success",message:"User registered"});
})

router.post('/login',async(req,res)=>{
    const {email, password} = req.body;
    const user = await userModel.findOne({email,password}); //Ya que el password no está hasheado, podemos buscarlo directamente
    if(!user) return res.status(400).send({status:"error",error:"Incorrect credentials"});
    req.session.user= {
        name : `${user.first_name} ${user.last_name}`,
        email: user.email,
        age: user.age
    }
    res.send({status:"success", payload:req.session.user, message:"¡Primer logueo realizado! :)" });
})

export default router;