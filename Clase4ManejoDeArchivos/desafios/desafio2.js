import fs from 'fs';
import { Blob } from 'buffer';
const environment = async() =>{
    const data = await fs.promises.readFile('./package.json','utf-8');
    const contenidoString = data;
    const contenidoObj = JSON.parse(data);
    const size = new Blob([data]).size;
    const info = {
        contenidoString,
        contenidoObj,
        size
    }
    console.log(info);
    await fs.promises.writeFile('./info.json',JSON.stringify(info,null,'\t'))
}
environment();