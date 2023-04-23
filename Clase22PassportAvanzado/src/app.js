import express from 'express';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(express.static('./src/public'));
app.use(cookieParser());

app.post('/login',(req,res)=>{
    const {email, password} = req.body;
    if(email==="coder@coder.com"&& password === "coderpass") {
        let token = jwt.sign({email,password},'coderSecret',{expiresIn:"24h"});
        res.cookie('coderCookie',token,{httpOnly:true}).send({status:"success", message: 'logged in', token})
    }else{
        res.status(400).send({status:"error",error:"Incorrect credentials"})
    }
})

app.listen(8080,()=>console.log("Listening on 8080"))