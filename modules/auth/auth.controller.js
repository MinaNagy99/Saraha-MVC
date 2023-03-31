import userModel from "../../dataBase/models/user.model.js"
import Joi from 'joi'

const RegisterSchema = Joi.object({
    name: Joi.string()
 
        .min(3)
        .max(30)
        .required(),
    email:Joi.string().email(),
    password: Joi.string(),
    PasswordConfirmation:Joi.ref('password'),
       
})
const Loginschema = Joi.object({

    email:Joi.string().email(),
    password: Joi.string(),
 
       
})
    

export const login =(req,res)=>{
    res.render('login.ejs',{isLogin:false,error:req.flash('error of login')})
}
export const register =(req,res)=>{

    res.render('register.ejs',{isLogin:false,error:req.flash('info'),isExisted:req.flash('isExisted')})
}


export const handleRegister = async (req,res)=>{
    const {name,email,password}= req.body
    const user =  await userModel.findOne({email})

    if (user) {
        req.flash('isExisted','email already existed')
    res.redirect('/register')

    }else{
      const {error}=   RegisterSchema.validate(req.body,{abortEarly:false})
      if (!error?.details) {
           await userModel.create({name,email,password})
        res.redirect('/login')
      }else{
        req.flash('info', error?.details)

        res.redirect('/register')

      }

     
    }

}
export const handleLogin = async (req,res)=>{
    const {email,password}=req.body
    const {error} = Loginschema.validate(req.body,{abortEarly:false})
    req.flash('error of login' ,error?.details)
    const user = await userModel.findOne({email})
    if (user) {

       if (user.password==password) {
        var hour = 3600000*48
        req.session.cookie.expires = new Date(Date.now()+hour)
        req.session.cookie.maxAge = hour 
        req.session.userId=user._id
        req.session.name=user.name
        req.session.isLogin = true
        res.redirect('/message')
    }
        else{
            res.redirect('/login')

        }}
    else{
        res.redirect('/login')
       }
    }
