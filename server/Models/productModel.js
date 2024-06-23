import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    name: { type: String, required: true },
})

const colorSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },,
    name: { type: String, required: true },
})

const sizeSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },,
    name: { type: String, required: true },
})

const productSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    old_price: { type: String, required: true },
    new_price: { type: String, required: true },
    reviews: { type: String, required: true },
    img1: { type: String, required: true },
    img2: { type: String, required: true },
    img3: { type: String, required: true },
    img4: { type: String, required: true },
    tag: { type: String, required: true },
    category: [categorySchema],
    info: { type: String, required: true },
    colors: [colorSchema],
    size: [sizeSchema],
    SKU: { type: String, required: true, }
})

export default mongoose.model('productSchema', productSchema)