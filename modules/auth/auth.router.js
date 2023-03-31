import {Router} from 'express'
import { handleLogin, handleRegister, login, register } from './auth.controller.js'

const authRouter = Router()

authRouter.get('/login',login)
authRouter.get('/register',register)

authRouter.post('/handleRegister',handleRegister)
authRouter.post('/handleLogin',handleLogin)



export default authRouter