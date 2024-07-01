import express from 'express';
import { verify }from '../auth/verify.js'
import { 
    addAddress,
    addToCart,
    addToWishlist,
    removeFromCart,
    removeFromWishlist 
} from '../controllers/userController.js';

const router = express.Router();