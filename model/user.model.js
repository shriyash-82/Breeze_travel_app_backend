const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    username : { type : String, required : true},
    number : { type : Number, required : true,unique : true},
    email : {type : String, required : true, unique : true},
    password : { type : String, required : true}
},
{
    timestamps :true
})
userSchema.pre('save',async function(next){
     try{
         const salt = await bcrypt.genSalt(10);
         const hashedPassword = await bcrypt.hash(this.password,salt);
         this.password = hashedPassword;
         next();
     }catch(err){
        console.log(err);
     }
})
const User = mongoose.model("User",userSchema);
module.exports = User;