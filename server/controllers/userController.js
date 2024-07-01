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

export const removeFromWishlist = async(req, res) => {
    try {
        const userData = await userModel.findOne({_id: req.user.id})
        userData.wishlist[req.body.id] -=1
        await userModel.findOneAndUpdate({_id: req.user.id}, {cart: userData.wishlist})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

export const addAddress = async (req, res) => {
    try {
       const userId = req.user.id
       const { street, city, state, zip } = req.body
       const user = await userModel.findOne({_id: userId}) 

       if(!user) {
        return res.status(404).json({ success: false, message: "no user found" })
       }

       user.address = { street, city, state, zip }
       await user.save()
       return res.status(200).json({ success:true, message: "address added"})
    } catch(err) {
        res.status(500).json({ success: false, message: err: "interval server error" })
    }
}
