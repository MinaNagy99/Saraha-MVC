import {Router} from 'express'
import { message } from './message.controller.js'

const messageRouter = Router()

messageRouter.get('/message',message)

export default messageRouter