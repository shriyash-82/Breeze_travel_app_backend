const express = require("express");
const router = express.Router();
const getAllHotelHandler = require("../Controller/hotelHandler")
router.route('/')
      .get(getAllHotelHandler)
module.exports = router;