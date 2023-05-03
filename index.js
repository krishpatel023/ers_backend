import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
// import dotenv from "dotenv";
import users from './routes/users.js';
import hospitals from './routes/hospitals.js';
import feedbacks from './routes/feedbacks.js';
import covidData from './routes/covidData.js';
import auth from './routes/auth.js';
import statesData from './routes/statesData.js'

const app = express()
const PORT = 8000 || process.env.PORT


//FOR .ENV
// dotenv.config();
//Used as we can't send direct json data to the server. so we need this middleware.
app.use(express.json())
app.use(cookieParser())
dotenv.config();
//CORS
// app.use(cors())
app.use(cors({
    // origin: 'http://localhost:3000',
    origin: ['http://localhost:3000','https://ers-seven.vercel.app'],
    // origin: 'https://ers-seven.vercel.app',
    credentials: true,
}));

// res.header( "Access-Control-Allow-Origin", '*' );


//MongoDB CONNECTION
const connect = async () => {
    try {
        await mongoose.connect(process.env.mongoDB);
        console.log("CONNECTED --- MongoDB");
    } catch (error) {
        console.log(error);
    }
}
mongoose.connection.on("disconnected", () => {
  console.log("DISCONNECTED --- MongoDB");
  connect();
});

//
app.use("/api/auth", auth);
app.use("/api/users", users)
app.use("/api/hospitals", hospitals)
app.use("/api/feedbacks", feedbacks)
app.use("/api/covidData", covidData)
app.use("/api/statesData", statesData)


//BACKEND START
app.listen(PORT, ()=>{
    connect();
    console.log("CONNECTED --- BACKEND");
})
app.get('/', (req,res)=>{
    res.send("CONNECTED TO BACKEND")
})