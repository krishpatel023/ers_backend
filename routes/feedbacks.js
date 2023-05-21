import express from 'express'
import { changePublished, createFeedback, createReply, deleteFeedback, getAllFeedbacks, getFeedbackBy, getFeedbackOf, getPublishedFeedback, getReplies, updateFeedback } from '../controllers/feedbackController.js'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

//CREATE
router.post('/createFeedback', verifyUser ,createFeedback)
//UPDATE
router.put('/:id', verifyUser ,updateFeedback)
//CHANGE PUBLISHED
router.put('/:id/:value', verifyAdmin, changePublished)
//DELETE
router.delete('/:id', verifyUser ,deleteFeedback)
//GET FEEDBACK BY
router.get('/feedbackBy/:id', verifyAdmin,getFeedbackBy)
//GET FEEDBACK OF
router.get('/feedbackOf/:id', getFeedbackOf)
//GET ONLY PUBLISHED
router.get('/publishedFeedback/:value', getPublishedFeedback)
//GET ALL
router.get('/', getAllFeedbacks)
//GET REPLIES OF
router.get('/feedbackReply/:prevFeedbackId',getReplies)
//CREATE REPLY
router.post('/feedbackReply',createReply)
export default router