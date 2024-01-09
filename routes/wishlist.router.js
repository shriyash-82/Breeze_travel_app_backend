const express = require("express");
const verifyUser =  require("../middleware/verifyUser")
const wishlistModel = require("../model/wishlist.model")
const router = express.Router();
const{ createWishlistHandler,deleteWishlistHandler,getWishlistHandler} = require("../Controller/wishlistHandler")
// const getWishlistHandler  = require("../Controller/wishlistHandler")
// const deleteWishlistHandler = require("../Controller/wishlistHandler")
// creating wishlist
router.route('/')
      .post(verifyUser,createWishlistHandler)
// deleting wishlist
router.route('/:id')
      .delete( verifyUser, deleteWishlistHandler)

// getting all items from wishlist
router.route('/')
      .get( verifyUser, getWishlistHandler)
module.exports = router;