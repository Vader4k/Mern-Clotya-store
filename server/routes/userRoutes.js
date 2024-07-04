import express from 'express';
import { verification }from '../auth/verify.js'
import { 
    addToCart,
    addToWishlist,
    removeFromCart,
    removeFromWishlist,
    getUser, 
    addBillingInfo,
    changePassword
} from '../controllers/userController.js';

const router = express.Router();

router.get('/user', verification, getUser)
router.put('/billingInfo', verification, addBillingInfo)
router.put('/changePassword', verification, changePassword)
router.post('/add-to-cart', verification, addToCart)
router.post('/add-to-wishlist', verification, addToWishlist)
router.delete('/remove-from-cart', verification, removeFromCart)
router.delete('/remove-from-wishlist', verification, removeFromWishlist)

export default router;