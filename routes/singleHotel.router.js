const express = require("express");
const router = express.Router();
const singleHotelHandler = require("../Controller/singleHotelHandler")
router.route('/:id')
      .get(singleHotelHandler)

module.exports = router;