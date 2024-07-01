import userModel from "../Models/userModel.js";
import bcrypt from 'bcrypt'
import Jwt  from "jsonwebtoken";
import nodemailer from 'nodemailer'
import crypto from 'crypto'
import dotenv from 'dotenv'

dotenv.config()
export const register = async (req, res) => {
   const { username, email, password } = req.body
   try {
    let user = await userModel.findOne({email})
    if(user){
        return res.status(400).json({success:false, message: "User already exists"})
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
        username,
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

    return res.status(200).json({ success:true, message: "registration successful", token })

   } catch (error) {
    res.status(500).json({ success:false, message:error.message })
   }
}

export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        let user = await userModel.findOne({email})
        if(!user){
          return res.status(400).json({success:false, message: "User does not exist"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            res.status(400).json({success:false, message: "Incorrect password"})
        }
        const data = {
            user: {id: user._id}
        }
        const token = Jwt.sign(data, process.env.JWT_SECRET_kEY)
        return res.status(200).json({success:true, message: "login successful", token})
    } catch (error) {
        res.status(400).json({success:false, message:error.message})
    }
}

const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
  });
  
  export const requestPasswordReset = async (req, res) => {
    const { email } = req.body;
    try {
      const user = await userModel.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ success: false, message: "User does not exist" });
      }
  
      const token = crypto.randomBytes(32).toString('hex');
      user.resetPasswordToken = token;
      user.resetPasswordExpires = Date.now() + 3600000; // 1 hour from now
      await user.save();
  
      const resetUrl = `https://${req.headers.host}/reset-password/${token}`;
      const mailOptions = {
        from: process.env.EMAIL,
        to: user.email,
        subject: 'Password Reset',
        html: `
          <p>You requested a password reset</p>
          <p>Click this <a href="${resetUrl}">link</a> to set a new password</p>
          <p>If you did not request a password reset, please ignore this email</p>
        `
      };
  
      transporter.sendMail(mailOptions, (err) => {
        if (err) {
          return res.status(500).json({ success: false, message: err.message });
        }
        res.status(200).json({ success: true, message: "Email sent" });
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

export const resetPassword = async (req, res) => {
    const { token, newPassword } = req.body

    const user = await userModel.findOne({
        resetPasswordToken: token,
        resetPasswordExpires: {$gt: Date.now()}
    })

    if (!user){
        res.status(400).json({success:false, message: "Password reset token is invalid or has expired"})
    }

    const hashedPassword = await bcrypt.hash(newPassword, (10))
    user.password =  hashedPassword
    user.resetPasswordToken =  undefined
    user.resetPasswordExpires =  undefined
    await user.save()
    res.status(200).json({success:true, message: "Password reset successful"})
}

export const getUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.user.id).select('-password')
    return res.status(200).json({success:true, message: "user found", data: user })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

