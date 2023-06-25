import Hospital from '../models/hospitals.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const Login = async(req,res,next)=>{
    try{    
        // console.log(req.body.email)
        const userData = await Hospital.find({ email : req.body.email})
        const hospital = userData[0]
        if(!hospital){
            return console.log("USER NOT FOUND")
        }
        else{
            const isPassCorrect = await bcrypt.compare(req.body.password, hospital.password)
            if(!isPassCorrect){
                return res.status(401).json({error:"WRONG PASSWORD"})
            }
            //If pass correct we are going to create a new token
            const token = jwt.sign({id:hospital._id } , process.env.JWT)
            // console.log(token)
            //This dosen't send password and isAdmin when sending user.
            // console.log("DOC :",user._doc)
            const { password, ...otherDetails} = hospital._doc;
            // console.log("OTHER : ", {...otherDetails})
            res.cookie("hospital_token", token , {
                sameSite: 'none', 
                secure: true
            }).status(200).json(hospital._id)
            // res.status(200).send(token);
            //This will send whole user data along with password we prevented that
        }
    } catch(error){
        res.status(401).send(error)
    }
}

export const Logout = (req,res)=>{
    try{
        res.clearCookie('hospital_token').status(200).json({logout:true});
        // res.status(200).send("LOGOUT VALIDATION ERROR")
    }catch(error){
        res.status(402).send(error)
    }
}

export const validateStatus = (req,res)=>{
    try{
        // const token = req.cookies;
        // console.log(token)
        res.status(200).send("SOME VALIDATION REFERENCE")
    }
    catch(error){
        res.status(401).json({status:false})
    }
}