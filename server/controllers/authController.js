import userModel from "../Models/userModel.js";
import bcrypt from 'bcrypt'
import Jwt  from "jsonwebtoken";

export const register = async (req, res) => {
   const {name, email, password} = req.body
   try {
    let user = await userModel.findOne({email})
    if(user){
        res.status(400).json({success:false, message: "User already exists"})
    } 
    const hasPassword = await bcrypt.hash(password,(10))
    let cart = {}
    for (let i = 0; i< 300; i++){
        cart[i] = 0
    }

    let wishlist = {}
    for (let i = 0; i< 300; i++){
        wishlist[i] = 0
    }

    user = new userModel({
        name,
        email,
        password: hasPassword,
        cart,
        wishlist
    })
    
    await user.save()

    const data = {
        user: {id: user._id}
    }

    const token = Jwt.sign(data, process.env.JWT_SECRET_kEY)

    res.status(200).json({success:true, message: "registration successful", token})

   } catch (error) {
    res.status(500).json({success:false, message:error.message})
   }
}

export const login = async (req, res) => {
    const {email, password} = req.body
    try {
        let user = await userModel.findOne({email})
        if(!user){
            res.status(400).json({success:false, message: "User does not exist"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            res.status(400).json({success:false, message: "Incorrect password"})
        }
        const data = {
            user: {id: user._id}
        }
        const token = Jwt.sign(data, process.env.JWT_SECRET_kEY)
        res.status(200).json({success:true, message: "login successful", token})
    } catch (error) {
        res.status(400).json({success:false, message:error.message})
    }
}