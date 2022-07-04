require('dotenv').config();
const express=require('express');
const app=express();
const mongoose=require('mongoose');

// connecting mongodb database 
const dbUri='';
mongoose.connect(dbUri)
    .then((result)=>{
        console.log('mongodb connected');
    })
    .catch((err)=>{
        console.log(err)
    })

app.listen(4000,()=>{
    console.log('listening to requests')
})


// setting the view template and enabling the static files
app.set('view engine','ejs');
app.use(express.static('public'));


// Home router
app.get('/',(req,res)=>{
    res.render('index');
})