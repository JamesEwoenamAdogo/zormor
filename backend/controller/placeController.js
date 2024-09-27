import { placeModel } from "../models/place.js";


export const addPlace = async(req,res)=>{
    try{
        const {name,Description,Location,OpenHours,image}= req.body
        const newPlace = await new placeModel({name,Description,Location,OpenHours,images})
        if(newPlace){
            return res.json({message:"success"})
        }


    }catch(error){
        console.log(error)
    }
}

export const allPlaces = async(req, res)=>{
    try{
        const places = await placeModel.find({})
        return res.json({places})


    }catch(error){
        console.log(error)
    }
}

export const deletePlace = async(req,res)=>{
    try{
        const {id}= req.params
        await placeModel.findByIdAndDelete(id)
        res.json({message:"place deleted"})

    }catch(error){
        console.log(error)
    }
}


export const updatePlaces = async(req,res)=>{
    try{
        const {id} = req.params
        const updateData = req.body
        await placeModel.findByIdAndUpdate(id,updateData,{new:true})

    }catch(error){
        console.log(error)
    }
}



