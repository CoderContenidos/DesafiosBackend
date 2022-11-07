import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import mongoose from 'mongoose';
import viewsRouter from './routes/views.router.js';

const app = express();
const connection = mongoose.connect('URL DE MONGUITO FELIZ',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');

app.use('/',viewsRouter);
const server = app.listen(8080,()=>console.log(`Listening on 8080`));