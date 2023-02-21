import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';

const app = express();

app.use(session({
    store:new MongoStore({
        mongoUrl:'URL DE MONGO',
        ttl:15
    }),
    secret:"CoderSecret",
    resave:false,
    saveUninitialized:false
}))

app.get('/',(req,res)=>{
    req.session.user= 'Active Session';
    res.send('Session set');
});

app.get('/test',(req,res)=>{
    res.send(req.session.user);
})

const server = app.listen(8080,()=>console.log("Listening on 8080"))