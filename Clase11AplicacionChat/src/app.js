import express from 'express';
import __dirname from './utils.js';
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views.router.js';
import { Server} from 'socket.io';
const app = express();
const PORT = process.env.PORT||8080;
const server = app.listen(PORT,()=>console.log("Listening on 8080"));

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');

app.use(express.json());
app.use(express.static(__dirname+'/public'))

app.use('/',viewsRouter);

const io = new Server(server);
const messages= [];

io.on('connection',socket=>{
    console.log("Socket connected");

    socket.on('message',data=>{
        messages.push(data);
        io.emit('messageLogs',messages);
    })
    
    socket.on('authenticated',data=>{
        socket.broadcast.emit('newUserConnected',data);
    })
})