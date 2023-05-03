import User from '../models/users.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const Register = async(req,res,next)=>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync( req.body.password, salt);
        const newUser = new User({
            ...req.body,
            password: hash
        })
        await newUser.save();
        res.status(200).send("New User Created!")

    }catch(error){
        res.status(401).send(error)
    }
}
export const Login = async(req,res,next)=>{
    try{    
        // console.log(req.body.email)
        const userData = await User.find({ email : req.body.email})
        const user = userData[0]
        if(!user){
            return console.log("USER NOT FOUND")
        }
        else{
            const isPassCorrect = await bcrypt.compare(req.body.password, user.password)
            if(!isPassCorrect){
                return res.status(401).json({error:"WRONG PASSWORD"})
            }
            //If pass correct we are going to create a new token
            const token = jwt.sign({id:user._id , isAdmin:user.isAdmin} , process.env.JWT)
            // console.log(token)
            //This dosen't send password and isAdmin when sending user.
            // console.log("DOC :",user._doc)
            const { password,isAdmin, ...otherDetails} = user._doc;
            // console.log("OTHER : ", {...otherDetails})
            res.cookie("access_token", token , {
                httpOnly:true,
                sameSite: 'none', 
                secure: true
            }).status(200).json({...otherDetails})
            //res.status(200).json(user);
            //This will send whole user data along with password we prevented that
        }
    } catch(error){
        res.status(401).send(error)
    }
}

export const Logout = (req,res)=>{
    try{
        res.clearCookie('access_token',{domain:".onrender.com" , path:"/"}).status(200).json({logout:true});
    }catch(error){
        res.status(402).send(error)
    }
}

export const validateStatus = (req,res)=>{
    try{
        const token = req.cookies;
        console.log(token);
        res.status(200).send(token)
    }
    catch(error){
        res.status(401).json({status:false})
    }
}