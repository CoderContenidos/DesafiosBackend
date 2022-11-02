import express from 'express';

const app = express();

app.get('/bienvenida',(req,res)=>{
    res.send(`<h1 style="color:blue;">¡Bienvenido a mi primer servidor express!</h1>`)
})

app.get('/usuario',(req,res)=>{
    res.send({
        nombre:"Miguel",
        apellido:"Espinosa",
        edad:30,
        correo:"correoMiguel@correo.com"
    })
})

app.listen(8080,()=>console.log("Listening on 8080"))