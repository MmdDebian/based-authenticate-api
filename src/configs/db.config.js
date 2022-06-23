const mongoose = require("mongoose");


exports.connect = async ()=>{

    const uri = `${process.env.DB_ADDRESS}:${process.env.DB_PORT}/${process.env.DB_NAME}` ;

    mongoose.connect(uri)
    .then(()=>{
        console.log('connect to database !')
    })
    .catch((err)=>{
        console.log('Failed connection in db')
    })
}