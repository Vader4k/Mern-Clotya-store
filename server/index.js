import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import multer from 'multer'
import path from 'path'
import mongoose from 'mongoose'
import authRoute from './routes/authRoutes.js'
import userRoute from './routes/userRoutes.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

const corsOption = {
    origin: true,
    credentials: true 
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/env', (req, res) => {
    res.json({ 
        JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
        EMAIL: process.env.EMAIL,
        EMAIL_PASSWORD: process.env.EMAIL_PASSWORD
    });
});


mongoose.set('strictQuery', false)
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('MongoDB Connected')
    }catch(error){
        console.log(error)
    }
}


//middlewares
app.use(cors(corsOption))
app.use(cookieParser())
app.use(express.json())


// routes
app.use('/backend/v1', authRoute)
app.use('/backend/v1', userRoute)

app.listen(port, () => {
    connectDB()
    console.log(`Server is running on port ${port}`)
})