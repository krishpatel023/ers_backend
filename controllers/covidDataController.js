import CovidData from '../models/covidData.js'

//CREATE CovidData
export const createCovidData = async(req,res)=>{
    
    try{
        const newCovidData = new CovidData({
            ...req.body
        })
        await newCovidData.save();
        res.status(200).send("New CovidData Created!")

    }catch(error){
        res.status(400).send(error)
    }
}

//VIEW SPECIFIC CovidData
export const getCovidData = async (req,res)=>{
    try{
        const renderedCovidData = await CovidData.find()
        res.status(200).send(renderedCovidData)
    }catch(error){
        console.log(error)
        res.status(400).send(error)
    }
}


