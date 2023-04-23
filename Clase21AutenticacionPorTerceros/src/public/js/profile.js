fetch('/api/current',{
    method:'GET',
    headers:{
        'authorization':`Bearer ${localStorage.getItem('token')}`
    }
}).then(response=>{
    if(response.status===401){
     window.location.replace('/login')
    }else{
        return response.json();
    }
}).then(json=>{
    const paragraph = document.getElementById('result');
    paragraph.innerHTML =  `Hola, tus datos son ${json.payload.email} y ${json.payload.password}`
})