const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const houseSchema=new Schema({
    phonenumber:{
        type:Number,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    landlord:{
        type:String,
        required:true
    },
    SIMtype:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }
});


const House=mongoose.model('house',houseSchema);
module.exports=House;





