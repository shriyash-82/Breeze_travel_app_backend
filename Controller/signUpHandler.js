const express = require("express");
const User = require("../model/user.model")
const signUpHandler = async(req,res) => {
    try{ 
       
        const newUser = new User({
           username : req.body.username,
           number : req.body.number,
           email : req.body.email,
           password : req.body.password
        })
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
       console.log(err);
       res.status(500).json({message : "User not created"})
    }
 }
 module.exports = signUpHandler;