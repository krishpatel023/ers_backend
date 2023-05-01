import { createUser, deleteUser, getAllUsers, getUser, updatePassword, updateUser } from '../controllers/userController.js';
import express from 'express'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

const router = express.Router();

//CREATE
router.post("/createUser", createUser)
//EDIT
router.put("/:id", verifyUser ,updateUser)
//DELETE
router.delete("/:id", verifyUser,deleteUser)
//GET
router.get("/:id", verifyUser,getUser)
//GET ALL
router.get("/", verifyAdmin, getAllUsers)
//UPDATE PASSWORD
router.put("/changePassword/:id", verifyUser , updatePassword)

export default router
