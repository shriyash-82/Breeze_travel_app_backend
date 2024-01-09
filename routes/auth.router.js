const express = require("express");
const router = express.Router();
const signUpHandler = require("../Controller/signUpHandler")
const loginHandler  = require("../Controller/loginHandler");
router.route('/register')
      .post(signUpHandler)

// creating login route
 router.route('/login')
       .post(loginHandler)
module.exports = router;