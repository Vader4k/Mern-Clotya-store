import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid'

const itemSchema = new mongoose.Schema({
    itemId: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    }
});

const orderSchema = new mongoose.Schema({
    orderNumber: {
        type: String,
        required: true,
        unique: true,
        default: () => uuidv4().slice(0, 4) // Ensure a unique order number by default
    },
    orderDate: {
        type: Date,
        default: Date.now()
    },
    orderStatus: {
        type: String,
        enum: ['on hold', 'on delivery', 'delivered'],
        default: 'on hold'
    },
    totalPrice: {
        type: Number,
        required: true
    },
    totalQuantity: {
        type: Number,
        required: true
    },
    items: [itemSchema]
});

const userSchema = new mongoose.Schema({
    email: { 
        type: String, 
        required: true, 
        unique: true,
        trim: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address'] 
    },
    username: {
        type: String,
        trim: true,
        minlength: 3,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        trim: true,
    },
    firstName: {
        type: String,
        trim: true
      },
    lastName: {
        type: String,
        trim: true
    },
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        zip: { type: String }
    },
    phone: {
        type: String,
        match: [/^\d{11}$/, 'Please enter a valid 11-digit phone number']
    },
    role: {
        type: String,
        enum: ['customer', 'admin'],
        default: 'customer'
    },
    cart: {
        type: [itemSchema],
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    orderHistory: {
        type: [orderSchema],
        default: []
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    wishlist: {
        type: [String],
        default: []
    },
    resetPasswordToken: { 
        type: String 
    },
    resetPasswordExpires: { 
        type: Date 
    }

})

export default mongoose.model("userSchema", userSchema)