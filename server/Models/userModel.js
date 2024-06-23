import mongoose from "mongoose";

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
        match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number']
    },
    role: {
        type: String,
        enum: ['customer', 'admin'],
        default: 'customer'
    },
    cart: {
        type: Object,
        default: {}
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    wishlist: {
        type: Object,
        default:{}
    },
    resetPasswordToken: { 
        type: String 
    },
    resetPasswordExpires: { 
        type: Date 
    }

})

export default mongoose.model("userSchema", userSchema)