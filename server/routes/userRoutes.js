import express from 'express'
import { register, login, requestPasswordReset, resetPassword } from '../controllers/authController.js'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.post('/requestReset', requestPasswordReset)
router.post('/resetPassword', resetPassword)

export default router