import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
    name:{
        type:String
    },
    Description:{
        type:String
    },
    Location:{
        type:String
    },
    OpenHours:{
        type:String
    },
    images:{
        type:String
    }
},{timestamps:true})

export const placeModel = mongoose.model("place",placeSchema)