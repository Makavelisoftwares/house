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
    date:{
        type:Date,
        default:Date.now()
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


const House=mongoose.model('object',houseSchema);
module.exports=House;





