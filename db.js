const mongoose = require('mongoose');

module.exports=mongoose.connect('mongodb://localhost/nodereact',{useNewUrlParser:true}, (err)=>{
    if(err){throw err}
    else{console.log('Database connected')};
});