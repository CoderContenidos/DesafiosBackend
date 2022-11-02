import moment from 'moment';

const hoy = moment();
//Colocar la fecha en formato YYYY-MM-DD
const fecha_nacimiento = moment('1996-07-13','YYYY-MM-DD'); //Prueba metiendo después el mes 200
if(fecha_nacimiento.isValid()){
    console.log(`Desde mi nacimiento, han pasado ${hoy.diff(fecha_nacimiento,'days')} días`);
}else{
    console.error("No se puede proseguir ya que la fecha es inválida")
}