import express from 'express'
import { 
    register, 
    login, 
    requestPasswordReset, 
    resetPassword,
    getUser
} from '../controllers/authController.js'
import {verification} from '../auth/verify.js'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.post('/requestReset', requestPasswordReset)
router.post('/resetPassword', resetPassword)
router.get('/user', verification, getUser)


export default router