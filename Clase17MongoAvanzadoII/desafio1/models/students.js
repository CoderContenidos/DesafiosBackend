import mongoose from 'mongoose';

const collection = 'Students';

const schema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
    gender:String,
    grade:Number,
    group:String
})

const studentsModel = mongoose.model(collection,schema);
export default studentsModel;