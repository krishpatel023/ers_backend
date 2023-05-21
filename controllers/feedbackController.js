import Feedback from '../models/feedbacks.js'

//CREATE Feedback
export const createFeedback = async(req,res)=>{
    
    try{
        const newFeedback = new Feedback({
            ...req.body
        })
        await newFeedback.save();
        res.status(200).send("New Feedback Created!")

    }catch(error){
        res.status(400).send(error)
    }
}
//EDIT Feedback
export const updateFeedback = async (req,res)=>{
    try{

        const updatedFeedback = await Feedback.findByIdAndUpdate(
            { _id:req.params.id},
            {$set: req.body})
        res.status(200).send("Feedback UPDATED")
    }catch(error){
        res.status(400).send(error.message)
    }
}
//DELETE Feedback
export const deleteFeedback = async (req,res)=>{
    try{
        await Feedback.findByIdAndDelete({ _id : req.params.id })
        res.status(200).send("Feedback DELETED")
    }catch(error){
        res.status(400).send(error)
    }
}
//VIEW SPECIFIC Feedback
export const getFeedbackBy = async (req,res)=>{
    try{
        const renderedFeedback = await Feedback.find({ feedbackBy : req.params.id})
        res.status(200).send(renderedFeedback)
    }catch(error){
        console.log(error)
        res.status(400).send(error)
        
    }
}
//VIEW SPECIFIC Feedback
export const getFeedbackOf = async (req,res)=>{
    try{
        const renderedFeedback = await Feedback.find({ feedbackOf : req.params.id})
        res.status(200).send(renderedFeedback)
    }catch(error){
        res.status(400).send(error)
        
    }
}
//VIEW SPECIFIC Feedback
export const getPublishedFeedback = async (req,res)=>{
    try{
        const renderedFeedback = await Feedback.find({ isPublished : req.params.value })
        res.status(200).send(renderedFeedback)
    }catch(error){
        res.status(400).send(error)
        
    }
}

//MAKE PUBLISHED TRUE/FALSE
export const changePublished = async (req,res)=>{
    try{
        const renderedFeedback = await Feedback.findByIdAndUpdate({_id:req.params.id},{isPublished : req.params.value})
        res.status(200).send("USER CHANGED")
    }catch(error){
        res.status(400).send(error)
    }
}
//VIEW ALL FeedbackS
export const getAllFeedbacks = async (req,res)=>{
    try{
        const allFeedbacks = await Feedback.find()
        res.status(200).send(allFeedbacks)
    }catch(error){
        res.status(400).send(error)
    }
}

export const getReplies = async (req,res)=>{
    try{
        const allFeedbacks = await Feedback.find({ replyOf : req.params.prevFeedbackId})
        res.status(200).send(allFeedbacks)
    }catch(error){
        res.status(400).send(error)
    }
}
export const createReply = async (req,res)=>{
    try{
        const newFeedback = new Feedback({
            ...req.body
        })
        await newFeedback.save();
        res.status(200).send("New Feedback Created!")

    }catch(error){
        res.status(400).send(error)
    }
}