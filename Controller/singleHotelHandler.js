const hotelModel = require("../model/hotel.model");

const singleHotelHandler = async(req,res) => {
    try {
         const { id } = req.params;
         const hotel = await hotelModel.findById(id);
         res.json(hotel);
    }catch(err){
        res.status(404).json({message : "No Hotel Found"})
    }
  }
  module.exports = singleHotelHandler;