import userModel from "../Models/userModel.js";

export const getUser = async (req, res) => {
    try {
      const user = await userModel.findById(req.user.id).select('-password')
      return res.status(200).json({success:true, message: "user found", data: user })
    } catch (error) {
      res.status(500).json({ success: false, message: error.message })
    }
  }
  
  

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

export const addBillingInfo = async (req, res) => {
    try {
        const userId = req.user.id;
        const { street, city, state, zip, firstName, lastName, phone } = req.body;

        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(404).json({ success: false, message: "No user found" });
        }

        if (street || city || state || zip) {
            user.address = { ...user.address, street, city, state, zip };
        }
        if (phone) user.phone = phone;
        if (firstName) user.firstName = firstName;
        if (lastName) user.lastName = lastName;
        user.updatedAt = Date.now();

        await user.save();

        return res.status(200).json({ success: true, message: "Update successful", data: user });
    } catch (err) {
        console.error('Error:', err); // Log the error for debugging
        return res.status(500).json({ success: false, message: "Server error" });
    }
}

