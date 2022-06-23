require('dotenv').config();

const express =require('express');
const database = require('./src/configs/db.config') ;
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));
app.use(express.json());


app.use('/api' , require('./src/routes/index')) ;

const port = process.env.PORT || 4500 ;
app.listen(port , ()=>{

    console.clear()
    database.connect()
    console.log('server runing on port ' + port);
})