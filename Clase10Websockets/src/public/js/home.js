const socket = io();
//Para realizar la resolución de una parte, sólo descomentar la que interese
//Los eventos se dividirán en  "message1" para la parte 1 y "message2" para la parte 2 en el backend.

//Primera parte: enviar caracter por caracter.
// const input = document.getElementById('textbox');
// const log = document.getElementById('log')
// input.addEventListener('keyup',evt=>{
//     let {key} = evt;
//     evt.target.value='';
//     socket.emit('message1',key)
// })
// socket.on('log',data=>{
//     log.innerHTML+=data;
// })


//Parte dos: Guardar mensajes por socketid.
const input  = document.getElementById('textbox');
const log = document.getElementById('log');
input.addEventListener('keyup',evt=>{
    if(evt.key==="Enter"){
        socket.emit('message2',input.value);
        input.value=""
    }
})
socket.on('log',data=>{
    let logs='';
    data.logs.forEach(log=>{
        logs += `${log.socketid} dice: ${log.message}<br/>`
    })
    log.innerHTML=logs;
})