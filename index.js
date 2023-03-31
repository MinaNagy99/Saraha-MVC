import express, { urlencoded } from 'express'
import dbConnection from './dataBase/dbConnecgtion.js'
import * as dotenv from 'dotenv'
import authRouter from './modules/auth/auth.router.js'
import messageRouter from './modules/message/message.router.js'
import userRouter from './modules/user/user.router.js'
import homeRouter from './modules/home/home.router.js'
import session from 'express-session'
import connectSession from 'connect-mongodb-session'
import flash from 'connect-flash'

dotenv.config()
const app = express()
app.use(urlencoded({extended:true}))
app.use(express.static('public'))
const MongoDBStore = connectSession(session)
var store = new MongoDBStore({
  uri: process.env.dbConnectionURL,
  collection: 'mySessions'
});

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store
    
  }))

app.use(flash())
app.use(authRouter)
app.use(messageRouter)
app.use(userRouter)
app.use(homeRouter)
app.use('/logout',(req,res)=>{
  req.session.destroy(()=>{
    res.redirect('/login')
  })
})

const port = process.env.port

dbConnection()

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))