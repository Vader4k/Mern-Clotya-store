import userModel from "../Models/userModel";

export const addToCart = async(req, res) => {
    try {
        const userData = await userModel.findOne({_id: req.user.id})
        userData.cart[req.body.id] +=1 
        await userModel.findOneAndUpdate({_id: req.user.id}, {cart: userData.cart})
        res.status(200).json({success: true, message: "Item added to cart"})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

export const removeFromCart = async(req, res) => {
    try {
        const userData = await userModel.findOne({_id: req.user.id})
        userData.cart[req.body.id] -=1
        await userModel.findOneAndUpdate({_id: req.user.id}, {cart: userData.cart})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

export const addToWishlist = async(req, res) => {
    try {
        const userData = await userModel.findOne({_id: req.user.id})
        userData.wishlist[req.body.id] +=1
        await userModel.findOneAndUpdate({_id: req.user.id}, {wishlist: userData.wishlist})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

export const removeFromCart = async(req, res) => {
    try {
        const userData = await userModel.findOne({_id: req.user.id})
        userData.wishlist[req.body.id] -=1
        await userModel.findOneAndUpdate({_id: req.user.id}, {cart: userData.wishlist})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}
