import { Router } from 'express';
import userModel from '../models/Users.model.js';
import { createHash, validatePassword } from '../utils.js';

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
        password: createHash(password) //De momento no vamos a hashearlo, eso corresponde a la siguiente clase.
    }
    let result = await userModel.create(user);
    res.send({status:"success",message:"User registered"});
})

router.post('/login',async(req,res)=>{
    const {email, password} = req.body;
    const user = await userModel.findOne({email}); //Ya que el password no está hasheado, podemos buscarlo directamente
    if(!user) return res.status(400).send({status:"error",error:"Incorrect credentials"});
    console.log(user);
    const isValidPassword = validatePassword(password,user);
    if(!isValidPassword) return res.status(400).send({status:"error",error:"Incorrect password"});
    
    req.session.user= {
        name : `${user.first_name} ${user.last_name}`,
        email: user.email,
        age: user.age
    }
    res.send({status:"success", payload:req.session.user, message:"¡Primer logueo realizado! :)" });
})

router.post('/restartPassword',async(req,res)=>{
    const {email,password} = req.body;
    if(!email||!password) return res.status(400).send({status:"error",error:"Incomplete Values"});
    const user = await userModel.findOne({email});
    if(!user) return res.status(404).send({status:"error",error:"Not user found"});
    const newHashedPassword = createHash(password);
    await userModel.updateOne({_id:user._id},{$set:{password:newHashedPassword}});
    res.send({status:"success",message:"Contraseña restaurada"});
})

export default router;