import { Router } from 'express';

const router  = Router();
const pets = [];

router.get('/',(req,res)=>{
    res.send({pets})
})

router.post('/',(req,res)=>{
    const pet = req.body;
    pets.push(pet);
    res.send({status:"success"})
})
export default router;