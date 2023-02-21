import express from 'express';
import handlebars from 'express-handlebars';
import cookieParser from 'cookie-parser';
import __dirname from './utils.js';

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(express.static(__dirname+'/public'))

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views')
app.set('view engine','handlebars');

app.get('/',(req,res)=>{
    res.render('cookies')
})

app.post('/cookie',(req,res)=>{
    const data = req.body;
    res.cookie('CoderCookie',data,{maxAge:10000}).send({status:"success",message:"cookie set"})
})


const server = app.listen(8080,()=>console.log("Listening on 8080"))