import StateData from '../models/statesData.js'

//CREATE CovidData
export const createStateData = async(req,res)=>{
    
    try{
        const newStateData = new StateData({
            ...req.body
        })
        await newStateData.save();
        res.status(200).send("New StateData Created!")

    }catch(error){
        res.status(400).send(error)
    }
}
//GET STATES --> NO INPUT
export const getStates = async (req,res)=>{
    try{
        const Data = await StateData.findById({ _id : "64443b76d5d7a288aa9077ea"})
        var myStates = []
        for(var i=0; i < 35; i++){
            // console.log("--------",i,"--------",Data.data[0].states[i].state);
            myStates[i] = await Data.data[0].states[i].state;
            
        }
        // console.log(myStates)
        res.status(200).json({data : myStates})
    }
    catch(error){
        console.log(error)
        res.status(400).send(error)
    }
}
//GET DISTRICTS --> STATE AS INPUT

export const getDistricts = async (req,res)=>{
    try{
        const Data = await StateData.findById({ _id : "64443b76d5d7a288aa9077ea"})
        const stateName = req.params.state;
        var num = 0
        for(var i=0; i < 35; i++){
            // console.log("--------",i,"--------",Data.data[0].states[i].state);
            if(stateName === Data.data[0].states[i].state){
                num = i
                break
            }  
        }

        // console.log(Data.data[0].states[num].districts)
        // Data.data[0].states[num].districts
        res.status(200).json({data: Data.data[0].states[num].districts})
    }
    catch(error){
        console.log(error)
        res.status(400).send(error)
    }
}