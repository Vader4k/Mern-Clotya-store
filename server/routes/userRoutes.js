import express from 'express';
import { verification }from '../auth/verify.js'
import { 
    addAddress,
    addToCart,
    addToWishlist,
    removeFromCart,
    removeFromWishlist,
    getUser 
} from '../controllers/userController.js';

const router = express.Router();

router.get('/user', verification, getUser)
router.put('/add-address', verification, addAddress)

export default router;