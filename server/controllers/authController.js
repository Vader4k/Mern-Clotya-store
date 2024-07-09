import userModel from "../Models/userModel.js";
import bcrypt from 'bcrypt'
import Jwt  from "jsonwebtoken";
import nodemailer from 'nodemailer'
import crypto from 'crypto'
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from "url";

// Define __dirname for ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config()

export const register = async (req, res) => {
   const { username, email, password } = req.body
   try {
    let user = await userModel.findOne({email})
    if(user){
        return res.status(400).json({success:false, message: "User already exists"})
    } 
    const hasPassword = await bcrypt.hash(password,(10))

    user = new userModel({
        username,
        email,
        password: hasPassword,
        cart: [],
        wishlist : []
    })
    
    await user.save()

    const data = {
        user: {id: user._id}
    }

    const token = Jwt.sign(data, process.env.JWT_SECRET_KEY)

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
        const token = Jwt.sign(data, process.env.JWT_SECRET_KEY)
        return res.status(200).json({success:true, message: "login successful", token})
    } catch (error) {
        res.status(400).json({success:false, message:error.message})
    }
}

const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com', // Outlook SMTP server
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: bigkingkush295@outlook.com,
    pass: Konohagakure1,
  },
  tls: {
    ciphers: 'SSLv3',
    rejectUnauthorized: false,
  },
});

  
  export const requestPasswordReset = async (req, res) => {
    const { email } = req.body;
    try {
      const user = await userModel.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ success: false, message: 'User does not exist' });
      }
  
      const token = Math.floor(10000 + Math.random() * 90000).toString();
      user.resetPasswordToken = token;
      user.resetPasswordExpires = Date.now() + 3600000; // 1 hour from now
      await user.save();
  
      const templatePath = path.join(__dirname, '../templates/ResetPassword.html');
      fs.readFile(templatePath, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ success: false, message: 'Error reading template file' });
        }
  
        const htmlContent = data.replace('{{resetToken}}', token);
  
        const mailOptions = {
          from: bigkingkush295@outlook.com,
          to: user.email,
          subject: 'Password Reset',
          html: htmlContent,
        };
  
        transporter.sendMail(mailOptions, (err) => {
          if (err) {
            return res.status(500).json({ success: false, message: err.message });
          }
          res.status(200).json({ success: true, message: 'Email sent' });
        });
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

    if (user.password === newPassword){
      return res.status(400).json({success: false, message: "New password cannot be the same as the old one"})
    }

    const hashedPassword = await bcrypt.hash(newPassword, (10))
    user.password =  hashedPassword
    user.resetPasswordToken =  undefined
    user.resetPasswordExpires =  undefined
    await user.save()
    res.status(200).json({success:true, message: "Password reset successful"})
}
