const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dbConnection = require("./config/dbConfig")
const hotelRouter = require("./routes/hotel.router");
const singleHotelRouter = require("./routes/singleHotel.router")
const categoryRouter = require("./routes/category.router");
const hotelAddedToDb = require("./routes/importdata.router");
const categoriesAddedToDb = require('./routes/importCategory.router');
const authRouter = require('./routes/auth.router');
const wishListRouter = require("./routes/wishlist.router");
const PORT = 3500;
// implementing cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use(express.json());
dbConnection();
// api's for geting and saving hotel and category data
app.use('/api/hoteldata',hotelAddedToDb);
app.use('/api/categorydata',categoriesAddedToDb);
app.use('/api/hotels',hotelRouter);
app.use('/api/hotels',singleHotelRouter);
app.use('/api/category',categoryRouter);
// api's for creating, authenticating user
app.use('/api/auth',authRouter);
// api for wishlist
app.use('/api/wishlist',wishListRouter);
app.get('/',(req,res) => {
    res.send("hello guys")
})








mongoose.connection.once("open",()=>{
    console.log("db is connected");
    app.listen(process.env.PORT || PORT,()=>{
        console.log("server is up and running");
    })
})
