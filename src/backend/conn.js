const mongoose = require('mongoose');

const connectDatabase = ()=>{
    try{
        mongoose.connect("mongodb://127.0.0.1:27017/katyYoughthack23",{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        .then((data)=>{
            console.log('connection successful to the server');
        })
    }
    catch(err){
        console.log('error while connecting to database: ',err)
    }
}

module.exports = connectDatabase;