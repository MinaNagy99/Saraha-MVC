import mongoose from "mongoose";


const schema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minLenght:2,
        maxLenght:15
    },email:{
        type:String,
        
    },password:{
        type:String
    }
})

const userModel = mongoose.model('user',schema)


export default userModel