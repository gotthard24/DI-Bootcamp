import express, { urlencoded } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import users_router from './routers/users.r.js'

dotenv.config()

const app = express()

app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true,
    }
))
app.use(urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())

app.listen(process.env.PORT || 3001, ()=>{
    console.log(`YA USTAL UBEYTE MENYA!`);
})

app.use('/users', users_router)