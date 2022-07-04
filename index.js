const dotenv=require('dotenv')
dotenv.config();
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

// connecting mongodb database 
mongoose.connect(process.env.DBuri)
    .then((result)=>{
        app.listen(4000,()=>{
            console.log('listening to requests')
        })
        console.log('mongodb connected');
    })
    .catch((err)=>{
        console.log(err)
    })



// setting the view template and enabling the static files
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))


// Home router
app.get('/',(req,res)=>{
    res.render('index');
})