const Hotel = require("../model/hotel.model")

const getAllHotelHandler = async (req,res) => {
    // performing filter through catrgory
    const hotelCategory = req.query.category
    try{ 
       let hotels;
       if( hotelCategory ){
        hotels = await Hotel.find({category: hotelCategory})
       }
       else {
        hotels = await Hotel.find({});
       }
       hotels ? res.json(hotels) : res.status(404).json({message : "Data Not Found"})
    }catch(err){
      console.log(err);
      res.send(err);
    }
  }
  module.exports = getAllHotelHandler