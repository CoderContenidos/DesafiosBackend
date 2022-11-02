import express from 'express';
import { Server } from 'socket.io';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';

const app = express();
app.use(express.static(__dirname+'/public'))

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');

app.use('/',viewsRouter);

const server = app.listen(8080,()=>console.log("Listening"))
const io = new Server(server);

const logs = []
io.on('connection',socket =>{
    console.log("Connected")
    //Message1 se utiliza para la primera fase del ejercicio
    socket.on("message1",data=>{
        io.emit('log',data);
    })

    //Message2 se utiliza para la parte de almacenar y devolver los logs completos.
    socket.on("message2",data=>{
        logs.push({socketid:socket.id,message:data})
        io.emit('log',{logs});
    })
})



