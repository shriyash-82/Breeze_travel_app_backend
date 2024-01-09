const wishlistModel = require("../model/wishlist.model")

const createWishlistHandler = async (req,res) => {
    const newHotel =  new wishlistModel({hotelId : req.body.hotelId})

    try{
       const hotel = await newHotel.save();
       res.status(201).json(hotel)
    }catch(err){
        console.log(err)
        res.status(500).json({message : "Cannot add to wishlist"})
    }
}

const deleteWishlistHandler = async(req,res) => {
    try {
           await wishlistModel.findByIdAndDelete(request.params.id)
           res.json({message : "Hotel deleted from wishlist"})
    }catch(err){
        console.log(err)
        res.status(500).json({message : "cannot delete from wishlist"})
    }
}

const getWishlistHandler = async(req,res) => {
    try {
        const wishlist = await wishlistModel.find({})
        wishlist ? res.json(wishlist) : res.json({message : "No item found in wishlist"})
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}
module.exports = { createWishlistHandler, deleteWishlistHandler, getWishlistHandler }