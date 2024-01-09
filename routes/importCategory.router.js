const express = require('express');
const router = express.Router();
const categoryModel = require("../model/category.model");
const categoryData = require("../data/category");

router.route('/')
      .post( async(req,res) => {
           try{
                 await categoryModel.deleteMany();
                 const categoriesInDb = await categoryModel.insertMany(categoryData.data);
                 res.json(categoriesInDb);
           }catch(err){
             res.json({message : "cannot add categories to db"})
           }
      })

module.exports = router;