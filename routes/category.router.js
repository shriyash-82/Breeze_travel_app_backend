const express = require('express');
const router = express.Router();
const categoryHandler = require("../Controller/categoryHandler")
router.route('/')
      .get(categoryHandler)

module.exports = router;
