import express from 'express'
import {Login,Logout, validateStatus} from '../controllers/hospitalAuth.js'
const router = express.Router();

//LOGIN
router.post('/login', Login)

//LOGOUT
router.get('/logout', Logout)

//VALIDATE STATUS
router.get('/validate', validateStatus)

export default router