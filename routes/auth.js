import express from 'express'
import {Login,Logout,Register, validateStatus} from '../controllers/authController.js'
const router = express.Router();

//LOGIN
router.post('/login', Login)

//REGISTER
router.post('/register', Register)

//LOGOUT
router.get('/logout', Logout)

//VALIDATE STATUS
router.get('/validate', validateStatus)

export default router