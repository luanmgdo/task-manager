import express from 'express'
import publicRoutes from './routes/user.js'
import taskRoutes from './routes/tasks.js'

const app = express()
app.use(express.json())

app.use('/', publicRoutes)
app.use('/tasks', taskRoutes)

app.listen(3000, () => console.log("servidor aberto"))


// devluanmacedo
// 8kzRP1f9YKb2QlVZ
// mongodb+srv://devluanmacedo:8kzRP1f9YKb2QlVZ@learning.ykhhsi9.mongodb.net/?retryWrites=true&w=majority&appName=learning