import mongoose from 'mongoose';
import studentsModel from './models/students.js';

//SOLO DESCOMENTAR LA SECCIÓN QUE QUIERAS PROBAR

const students = [{ "first_name": "Justino", "last_name": "Fidgin", "email": "jfidgin0@boston.com", "gender": "Male", "grade": 6, "group": "1B" },
{ "first_name": "Ketty", "last_name": "Robson", "email": "krobson1@prlog.org", "gender": "Female", "grade": 10, "group": "2A" },
{ "first_name": "Dierdre", "last_name": "Barron", "email": "dbarron2@dailymail.co.uk", "gender": "Female", "grade": 9, "group": "1B" },
{ "first_name": "Nana", "last_name": "Pellew", "email": "npellew3@nytimes.com", "gender": "Female", "grade": 6, "group": "1A" },
{ "first_name": "Shannan", "last_name": "Preshous", "email": "spreshous4@paginegialle.it", "gender": "Male", "grade": 8, "group": "2B" },
{ "first_name": "Mark", "last_name": "Yurchishin", "email": "iyurchishin5@google.it", "gender": "Male", "grade": 10, "group": "2B" },
{ "first_name": "Tannie", "last_name": "Takkos", "email": "ttakkos6@mtv.com", "gender": "Female", "grade": 7, "group": "2B" },
{ "first_name": "Debbi", "last_name": "Eddowis", "email": "deddowis7@jigsy.com", "gender": "Female", "grade": 6, "group": "1B" },
{ "first_name": "Dugald", "last_name": "Toun", "email": "dtoun8@java.com", "gender": "Male", "grade": 4, "group": "1A" },
{ "first_name": "Lorain", "last_name": "Judkin", "email": "ljudkin9@bigcartel.com", "gender": "Genderqueer", "grade": 8, "group": "2B" },
{ "first_name": "Shelley", "last_name": "Crinion", "email": "scriniona@wsj.com", "gender": "Genderfluid", "grade": 8, "group": "2A" },
{ "first_name": "Kellyann", "last_name": "Doel", "email": "kdoelb@merriam-webster.com", "gender": "Female", "grade": 8, "group": "1B" },
{ "first_name": "Romona", "last_name": "Derricoat", "email": "rderricoatc@vkontakte.ru", "gender": "Female", "grade": 5, "group": "1A" },
{ "first_name": "Lorine", "last_name": "McVaugh", "email": "lmcvaughd@unc.edu", "gender": "Female", "grade": 4, "group": "2A" },
{ "first_name": "Ker", "last_name": "Chiese", "email": "kchiesee@prlog.org", "gender": "Male", "grade": 8, "group": "1A" },
{ "first_name": "Aloisia", "last_name": "Hovie", "email": "ahovief@simplemachines.org", "gender": "Female", "grade": 8, "group": "2B" },
{ "first_name": "Marshall", "last_name": "Chatten", "email": "mchatteng@creativecommons.org", "gender": "Male", "grade": 9, "group": "2B" },
{ "first_name": "Marcelo", "last_name": "Rubega", "email": "mrubegah@house.gov", "gender": "Male", "grade": 6, "group": "1A" },
{ "first_name": "Yves", "last_name": "Halsey", "email": "yhalseyi@naver.com", "gender": "Male", "grade": 5, "group": "2A" },
{ "first_name": "Corene", "last_name": "Greed", "email": "cgreedj@epa.gov", "gender": "Female", "grade": 8, "group": "1A" }]


//Obtener a los estudiantes agrupados por calificación de mejor a peor
const exercise = async () => {
    const connection = mongoose.connect('URL MONGUITO')
    //INSERTAR ESTUDIANTES

    // const insertStudents = async() =>{
    //     const result = await studentsModel.insertMany(students);
    //     console.log(result);
    // }
    // insertStudents();


    //AGRUPAR POR CALIFICACIÓN DE MAYOR A MENOR

    // let result = await studentsModel.aggregate([
    //     { $group: { _id: '$grade', students: { $push: "$$ROOT" } } },
    //     { $sort: { _id: -1 } }
    // ])
    // console.log(result);


    //AGRUPAR ESTUDIANTES POR GRUPO
    // let result = await studentsModel.aggregate([
    //     { $group: { _id: "$group", students: { $push: "$$ROOT" } } }
    // ])
    // console.log(result);

    //PROMEDIO ESTUDIANTES 1B
    // let result = await studentsModel.aggregate([
    //     { $match: { group: "1B" } },
    //     { $group: { _id: "1B", promedio: { $avg: "$grade" } } }
    // ])
    // console.log(result);

    //PROMEDIO DE ESTUDIANTES 1A
    // let result = await studentsModel.aggregate([
    //     { $match: { group: "1A" } },
    //     { $group: { _id: "1A", promedio: { $avg: "$grade" } } }
    // ])
    // console.log(result);

    //PROMEDIO GENERAL DE ESTUDIANTES.
    // let result = await studentsModel.aggregate([
    //     { $group: { _id: "Students", promedio: { $avg: "$grade" } } }
    // ])
    // console.log(result);


    //PROMEDIO SOLO HOMBRES
    // let result = await studentsModel.aggregate([
    //     {$match:{gender:"Male"}},
    //     {$group:{_id:"Hombres",promedio:{$avg:"$grade"}}}
    // ])
    // console.log(result);

    //PROMEDIO MUJERES

    // let result = await studentsModel.aggregate([
    //     {$match:{gender:"Female"}},
    //     {$group:{_id:"Mujeres",promedio:{$avg:"$grade"}}}
    // ])
    // console.log(result);
}
exercise();