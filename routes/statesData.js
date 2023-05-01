import express from 'express'
import { createStateData, getDistricts, getStates } from '../controllers/statesDataController.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

//CREATE
router.post('/createStatesData' ,createStateData)

//GET STATES
router.get('/getStates', getStates)

//GET DISTRICTS
router.get('/getDistricts/:state', getDistricts)

//GET ALL
// router.get('/', getCovidData)

export default router