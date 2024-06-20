import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: { 
            type: String, 
            required: true, 
            unique: true,
            trim: true,
            match: [/.+@.+\..+/, 'Please enter a valid email address'] 
    },
    Username: {
            type: String, 
            required: true,
            trim: true,
            minlength: 3,
            unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        trim: true,
        validate: {
            validator: function(value) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
            },
            message: props => `${props.value} is not a valid password`
        }
    },
    firstName: {
        type: String,
        required: true,
        trim: true
      },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zip: { type: String, required: true }
    },
    phone: {
        type: String,
        required: true,
        match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number']
    },
    role: {
        type: String,
        enum: ['customer', 'admin'],
        default: 'customer'
    },
    cart: [{
        type: Object,
        default: {}
    }],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    wishlist: [{
        type: Object,
        default:{}
    }]

})

export default mongoose.model("userSchema", userSchema)