const userModel = require("../model/user.model")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const loginHandler = async (req,res) =>{
    try{
        const user = await userModel.findOne({number : req.body.number});
        !user && res.status(401).json({message : "Incorrect mobile number"})
    
        const bool = await bcrypt.compare(req.body.password,user.password)
        !bool && res.status(401).json({message : "Incorrect password"})
         
        const accessToken = jwt.sign({username : user.username},process.env.ACCESS_TOKEN)
        const{password,...rest} = user._doc;
        res.json({...rest,accessToken});
    }catch(err){
        console.log(err);
        res.status(500).json({message : "User not registered"});
    }
}
module.exports = loginHandler;