const dotenv=require('dotenv')
dotenv.config();
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const House = require('./models/house');

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





//  ROUTES
// CREATE /POST REQUEST
app.post('/',(req,res)=>{
    const house=new House(req.body);
    house.save()
    .then((result)=>{
        res.send(result)
    })
    .catch(err=>console.log(err))
})
// READ /GET REQUEST
app.get('/',(req,res)=>{
    House.find()
    .then((result)=>{
        res.render('index',{houses:result})

    })
    .catch(err=>console.log(err))
})
// UPDATE /PATCH REQUESTS
// DELETE REQUESTS
