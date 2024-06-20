import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import multer from 'multer'
import path from 'path'

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

const corsOption = {
    origin: true
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})


//middlewares
app.use(cors(corsOption))
app.use(cookieParser())
app.use(express.json())

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})