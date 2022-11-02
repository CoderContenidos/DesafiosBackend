import express from 'express';
import mongoose from 'mongoose';
import studentsModel from './models/estudiantes.js';

const app = express();
const PORT = process.env.PORT||8080;
const server = app.listen(PORT,()=>console.log(`Listening on ${PORT}`));

const connection = mongoose.connect(`URL DE MONGO AQUÍ`)
app.use(express.json());

const students = [{
    "nombre": "Steffen",
    "apellido": "Terzo",
    "edad": 36,
    "dni":"15691240",
    "curso":"Programación Backend",
    "nota":9
  }, {
    "nombre": "Jorgan",
    "apellido": "Matthis",
    "edad": 27,
    "dni":"29358120",
    "curso":"Programación Frontend",
    "nota":6
  }, {
    "nombre": "Haley",
    "apellido": "Proback",
    "edad": 34,
    "dni":"51241268",
    "curso":"Diseño UX/UI",
    "nota":7
  }, {
    "nombre": "Michelina",
    "apellido": "Beaglehole",
    "edad": 34,
    "dni":"24614567",
    "curso":"Diseño UX/UI",
    "nota":6
  }, {
    "nombre": "Jeralee",
    "apellido": "Postans",
    "edad": 26,
    "dni":"97212450",
    "curso":"Programación Frontend",
    "nota":6
  }, {
    "nombre": "Jordain",
    "apellido": "Kerner",
    "edad": 35,
    "dni":"41262234",
    "curso":"Programación Backend",
    "nota":5
  }, {
    "nombre": "Harriett",
    "apellido": "Skeene",
    "edad": 33,
    "dni":"21245129",
    "curso":"Programación Backend",
    "nota":10
  }, {
    "nombre": "Andie",
    "apellido": "McIlrath",
    "edad": 20,
    "dni":"59127389",
    "curso":"Programación Frontend",
    "nota":9
  }, {
    "nombre": "Sapphira",
    "apellido": "Arnholtz",
    "edad": 17,
    "dni":"03128893",
    "curso":"Programación Backend",
    "nota":5
  }, {
    "nombre": "Terra",
    "apellido": "Wadsworth",
    "edad": 31,
    "dni":"02213850",
    "curso":"Diseño UX/UI",
    "nota":10
  }]

  app.get('/students/insertion',async (req,res)=>{
    let result = await studentsModel.insertMany(students)
    res.send({result})
  })
  app.get('/students',async(req,res)=>{
    const result = await studentsModel.find();
    res.send({students:result})
  })

  app.post('/students',async(req,res)=>{
    const {nombre,apellido,edad,dni,curso,nota} = req.body;
    if(!nombre||!apellido||!edad||!dni||!curso||!nota) return res.status(400).send({error:"Incomplete values"});
    let user = {
        nombre,
        apellido,
        edad,
        dni,
        curso,
        nota
    }
    let result = await studentsModel.create(user);
    res.send({result})
  })
  
  app.put('/students/:sid',async(req,res)=>{
    const id = req.params.sid;
    const UpdateStudent = req.body;
    let result = await studentsModel.updateOne({_id:id},{$set:UpdateStudent});
    res.send({result});
  })

  app.delete('/students/:sid',async(req,res)=>{
    const id= req.params.sid;
    let result = await studentsModel.deleteOne({_id:id});
    res.send({result})
  })