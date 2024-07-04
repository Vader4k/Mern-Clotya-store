import express from 'express';
import { verification }from '../auth/verify.js'
import { 
    addToCart,
    addToWishlist,
    removeFromCart,
    removeFromWishlist,
    getUser, 
    addBillingInfo
} from '../controllers/userController.js';

const router = express.Router();

router.get('/user', verification, getUser)
router.put('/billingInfo', verification, addBillingInfo)

export default router;