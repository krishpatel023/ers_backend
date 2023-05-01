import express from 'express'
import {createHospital, deleteHospital, getAllHospitals, getHospital,  updateHospital} from '../controllers/hospitalController.js'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

//CREATE
router.post('/createHospital', verifyAdmin,createHospital)
//UPDATE
router.put("/:id", updateHospital)
//
router.delete("/:id", verifyAdmin, deleteHospital)
//GET
router.get("/:id", verifyUser,getHospital)
//GET ALL
router.get("/", verifyUser,getAllHospitals)
//GET SHELTER
// router.get("/getShelter", getShelter)

export default router