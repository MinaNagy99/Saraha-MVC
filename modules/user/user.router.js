import {Router} from 'express'
import { handelMessage, user } from './user.controller.js'

const userRouter = Router()

userRouter.get('/user/:id',user)

userRouter.post('/handelMessage',handelMessage)

export default userRouter