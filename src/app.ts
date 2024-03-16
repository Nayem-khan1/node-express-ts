import express, { Application } from 'express'
import cors from 'cors'
import userRouter from './app/modules/user/user.route'
const app: Application = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes

app.use('/api/v1/users/', userRouter)

app.get('/', async (req, res) => {
  res.send('hello world')
})

export default app
