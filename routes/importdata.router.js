const express = require("express");
const router = express.Router();
const hotelData = require("../data/hotels");
const hotelModel = require("../model/hotel.model");

// saving data to dataBase
router.route("/")
      .post( async (req,res) => {
        try{
            await hotelModel.deleteMany();
            const hotelsInDb = await hotelModel.insertMany(hotelData.data);
            res.json(hotelsInDb);
        }catch(err){
            console.log(err)
            res.json({message : "cannot save to DB"})
        }

      })

module.exports = router;