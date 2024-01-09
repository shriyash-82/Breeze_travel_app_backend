const categoryModel = require("../model/category.model")

const categoryHandler = async (req,res) =>{
    try{
        const categories = await categoryModel.find();
        res.json(categories);
    }catch(err){
     res.json({message : "cannot fetch categories from db"})
    }
}
module.exports = categoryHandler;