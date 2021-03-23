const express= require('express');
const app = express();
const request = require('request');
const superagent = require('superagent');
const port= 6700;
const cors = require('cors');

app.use(cors());

//Static file path
app.use(express.static(__dirname+'/public'));

//html
app.set('views','./src/views');

//view engine
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen('/',()=>{
    console.log(`Server is running on pornt number ${port}`);
})