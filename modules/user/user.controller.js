import messageModel from "../../dataBase/models/message.model.js";


export const user = async(req,res)=>{

const {id}= req.params
const {name} = req.session
const fullURL = req.protocol+'://'+req.get('host')

    res.render('user.ejs',{isLogin:false,id,fullURL,name})
}

export const handelMessage = async(req,res)=>{
    const {message} =req.body
    const {sendToId} =req.body
    console.log(message,sendToId);
    const newMessage = await messageModel.insertMany({message,sendToId})
    res.redirect(`/user/${sendToId}`)

}