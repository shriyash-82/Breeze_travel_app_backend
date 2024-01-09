const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const dbConnect = async() => {
    try{

       await mongoose.connect(process.env.DATABASE_URI,{
            useUnifiedTopology : true,
            useNewUrlParser:true
        })
    }catch(err){
        console.log(err);
    }
}
module.exports = dbConnect;