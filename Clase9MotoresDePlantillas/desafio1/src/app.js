import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

const users = [
    {
        name: "Mauricio",
        last_name:"Espinosa",
        age:26,
        phone:"5541231355",
        email: "correomau@correo.com"
    },
    {
        name:"Marisol",
        last_name:"Cadena",
        age:23,
        phone:"15431231355",
        email:"correomary@correo.com"
    },
    {
        name:"Jorge",
        last_name:"Velez",
        age:28,
        phone:"4331234155",
        email:"correojorge@correo.com"
    },
    {
        name:"Uriel",
        last_name:"Dueñas",
        age:18,
        phone:"1233315451",
        email:"correouriel@correo.com"
    },
    {
        name:"Verónica",
        last_name:"Duarte",
        age:45,
        phone:"66521233",
        email:"correoVero@correo.com"
    }
];

app.get('/',(req,res)=>{
    const random = Math.floor(Math.random()*users.length);
    res.render('users',{user:users[random]})
})

app.listen(8080,()=>console.log("Listening on 8080"))