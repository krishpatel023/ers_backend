import jwt from "jsonwebtoken";

export const verifyToken = (req,res,next)=>{
    
    try{
        const token = req.cookies.access_token
        if(!token){
            // return console.log("NOT AUTHENTICATED")
            return res.status(401).json({error:"NOT AUTHENTICATED"})
        }
        jwt.verify(token,process.env.JWT, (err,user)=>{
            if(err) res.status(403).json({error:"TOKEN ERROR"})
            // console.log(user)
            req.user = user;
            next()
        })
    }
    catch(error){
        console.log(error)
    }
}
export const verifyUser = (req,res,next) => {
    verifyToken(req,res,next, () => {
        if((req.user.id === req.params.id) || req.user.isAdmin){
            next();
        } else{
            // console.log("RUN1")
            return res.status(901).json({error:"NOT AUTHENTICATED"})
        }
    });
};

export const verifyAdmin = (req,res,next) => {
    verifyToken(req,res,next, () => {
        if(req.user.isAdmin){
            next();
        } else{
            // console.log("RUN2")
            return res.status(401).json({error:"NOT AUTHENTICATED"})
        }
    });
};