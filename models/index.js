const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const indexSchema = new Schema({
    name : {type:String},
    email : {type:String},
    password : {type:String},
    address : {type:String}
});
module.exports=mongoose.model('index_model', indexSchema,'form_data');