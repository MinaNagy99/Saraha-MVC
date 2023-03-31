import mongoose from "mongoose";


const schema = mongoose.Schema({
    message:{
        type:String,
     
    },sendToId:{
        type:mongoose.Types.ObjectId,
        
    }
})

const messageModel = mongoose.model('message',schema)


export default messageModel