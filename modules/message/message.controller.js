import messageModel from "../../dataBase/models/message.model.js"


export const message =async (req,res)=>{
    if (req.session.isLogin) {
        const {name,isLogin,userId} = req.session
        const fullURL = req.protocol+'://'+req.get('host')
       const messages =  await messageModel.find({sendToId:userId})
       console.log(messages);
    res.render('message.ejs',{name,isLogin,userId,fullURL,messages})
    }else{
        res.redirect('/login')
    }
}

