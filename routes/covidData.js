import express from 'express'
import { createCovidData, getCovidData } from '../controllers/covidDataController.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

//CREATE
router.post('/createData', verifyAdmin ,createCovidData)

//GET ALL
router.get('/', getCovidData)

export default router