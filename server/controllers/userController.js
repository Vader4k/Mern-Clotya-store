import userModel from "../Models/userModel.js";
import bcrypt from 'bcrypt'

export const getUser = async (req, res) => {
    try {
      const user = await userModel.findById(req.user.id).select('-password')
      return res.status(200).json({success:true, message: "user found", data: user })
    } catch (error) {
      res.status(500).json({ success: false, message: error.message })
    }
  }
  
  

  export const addToCart = async (req, res) => {
    const { color, size, itemId, quantity = 1 } = req.body;
    try {
        const user = await userModel.findOne({ _id: req.user.id });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        const existingItemIndex = user.cart.findIndex(item => 
            item.itemId === itemId && 
            item.color === color && 
            item.size === size
        );
        if (existingItemIndex >= 0) {
            // Item exists, update quantity
            user.cart[existingItemIndex].quantity += quantity;
        } else {
            // Item does not exist, add new item
            user.cart.push({ itemId, color, size, quantity });
        }
        await user.save();
        res.status(200).json({ success: true, message: "Item added to cart", cart: user.cart });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const removeFromCart = async (req, res) => {
    const { color, size, itemId, quantity = 1 } = req.body;
    try {
        const user = await userModel.findOne({ _id: req.user.id });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        const existingItemIndex = user.cart.findIndex(item => 
            item.itemId === itemId && 
            item.color === color && 
            item.size === size
        );
        if (existingItemIndex >= 0) {
            // Item exists
            if (user.cart[existingItemIndex].quantity > quantity) {
                // Reduce quantity if greater than specified quantity
                user.cart[existingItemIndex].quantity -= quantity;
            } else {
                // Remove item if quantity is less than or equal to specified quantity
                user.cart.splice(existingItemIndex, 1);
            }
        } else {
            return res.status(404).json({ success: false, message: "Item not found in cart" });
        }
        await user.save();
        res.status(200).json({ success: true, message: "Item removed from cart", cart: user.cart });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const addToWishlist = async(req, res) => {
    try {
        const userData = await userModel.findOne({_id: req.user.id})
        if(userData.wishlist.includes(req.body.id)) {
            return res.status(400).json({success: false, message: "Item already in wishlist"})
        }
        userData.wishlist.push(req.body.id)
        await userModel.findOneAndUpdate({_id: req.user.id}, {wishlist: userData.wishlist})
        res.status(200).json({success: true, message: "Item added to wishlist"})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

export const removeFromWishlist = async (req, res) => {
    try {
        const userData = await userModel.findOne({ _id: req.user.id });

        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const itemId = req.body.id;
        const wishlistIndex = userData.wishlist.indexOf(itemId);

        if (wishlistIndex === -1) {
            return res.status(400).json({ success: false, message: "Item not found in wishlist" });
        }

        userData.wishlist.splice(wishlistIndex, 1);

        await userModel.findOneAndUpdate({ _id: req.user.id }, { wishlist: userData.wishlist });

        return res.status(200).json({ success: true, message: "Item removed from wishlist" });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};


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


export const changePassword = async (req, res) => {
    const { password, newPassword } = req.body
    const userId = req.user.id;
    try {
        const user =  await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "No user found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({ success: false, message: "Incorrect password" });
        }
        user.password = await bcrypt.hash(newPassword, 10);
        await user.save();
        return res.status(200).json({ success: true, message: "Password updated" });
    } catch (error) {
        
    }
}