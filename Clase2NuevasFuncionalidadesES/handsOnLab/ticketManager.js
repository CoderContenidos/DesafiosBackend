class TicketManager {
    #precioBaseGanancia = 0.15;
    constructor () {
        this.eventos = [];
    }
    getEventos = () =>{
        return this.eventos;
    }
    agregarEvento = (nombre,lugar,precio,capacidad=50,fecha=new Date().toLocaleDateString()) => {
        const evento = {
            nombre,
            lugar,
            precio:precio+precio*this.#precioBaseGanancia,
            capacidad,
            fecha,
            participantes:[]
        }
        if(this.eventos.length===0){
            evento.id=1;
        }else{
            evento.id = this.eventos[this.eventos.length-1].id +1;
        }
        this.eventos.push(evento);
    }
    agregarUsuario = (idEvento,idUsuario) =>{
        const eventoIndex= this.eventos.findIndex(e=>e.id===idEvento);
        if(eventoIndex===-1) {
            console.log("Evento no encontrado");
            return;
        }
        const usuarioRegistrado = this.eventos[eventoIndex].participantes.includes(idUsuario);
        if(usuarioRegistrado){
            console.log("Usuario ya registrado");
            return;
        }
        this.eventos[eventoIndex].participantes.push(idUsuario);
    }
    ponerEventoEnGira = (idEvento,nuevaLocalidad,nuevaFecha) =>{
        const eventoIndex = this.eventos.findIndex(e=>e.id===idEvento);
        if(eventoIndex===-1) {
            console.log("Evento no encontrado");
            return;
        }
        const evento = this.eventos[eventoIndex];
        const newEvento = {
            ...evento,
            lugar:nuevaLocalidad,
            fecha:nuevaFecha,
            id:this.eventos[this.eventos.length-1].id+1,
            participantes:[]
        }
        this.eventos.push(newEvento);
    }
}

//Pruebas

const manejadorEventos = new TicketManager();
manejadorEventos.agregarEvento('Evento coder 1','Argentina',200,50);
manejadorEventos.agregarUsuario(1,2);
manejadorEventos.ponerEventoEnGira(1,'Mexico','30/11/2024');
console.log(manejadorEventos.getEventos());