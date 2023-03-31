import {Router} from 'express'
import { home } from './home.controller.js'

const homeRouter = Router()

homeRouter.get('/',home)

export default homeRouter