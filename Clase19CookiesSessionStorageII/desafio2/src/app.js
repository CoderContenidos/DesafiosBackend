import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import mongoose from 'mongoose';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';
import sessionsRouter from './routes/sessions.router.js';

const app = express();
const connection = mongoose.connect('TU URL DE MONGO AQUÍ',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'))
app.use(session({
    store:new MongoStore({
        mongoUrl:'TU URL DE MONGO AQUÍ',
        ttl:3600
    }),
    secret:"CoderSecretSHHHHH",
    resave:false,
    saveUninitialized:false
}))

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');

app.use('/',viewsRouter);
app.use('/api/sessions',sessionsRouter);

const server = app.listen(8080,()=>console.log("Listening on 8080"))