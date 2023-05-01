import Hospital from '../models/hospitals.js'
import bcrypt from 'bcrypt'


//CREATE Hospital
export const createHospital = async(req,res)=>{
    
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync( req.body.password, salt);
        const newHospital = new Hospital({
            ...req.body,
            password: hash
        })
        await newHospital.save();
        res.status(200).send("New Hospital Created!")

    }catch(error){
        res.status(400).send(error)
    }
}
//EDIT Hospital
export const updateHospital = async (req,res)=>{
    try{

        const updatedHospital = await Hospital.findByIdAndUpdate(
            { _id:req.params.id},
            {$set: req.body})
        if(req.body.password){
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync( req.body.password, salt);
            const updatedHospitalPass = await Hospital.findByIdAndUpdate(
                { _id:req.params.id},
                {$set: {password:hash}})
        }
        res.status(200).send("Hospital UPDATED")
    }catch(error){
        res.status(400).send(error.message)
    }
}
//DELETE Hospital
export const deleteHospital = async (req,res)=>{
    try{
        await Hospital.findByIdAndDelete({ _id : req.params.id })
        res.status(200).send("Hospital DELETED")
    }catch(error){
        res.status(400).send(error)
    }
}
//VIEW SPECIFIC Hospital
export const getHospital = async (req,res)=>{
    try{
        const renderedHospital = await Hospital.findOne({ _id : req.params.id})
        res.status(200).send(renderedHospital)
    }catch(error){
        res.status(400).send(error)
        
    }
}
//VIEW ALL HospitalS
export const getAllHospitals = async (req,res)=>{
    try{
        const allHospitals = await Hospital.find()
        res.status(200).send(allHospitals)
    }catch(error){
        res.status(400).send(error)
    }
}

//GET SHELTER
// export const getShelter = async (req,res)=>{
//     console.log("RUN")
//     try{
//         const allHospitals = await Hospital.find({ category : "Shelter" })
//         res.status(200).send(allHospitals)
//         console.log(allHospitals)
//     }catch(error){
//         console.log(error)
//         res.status(408).send(error)
//     }
// }