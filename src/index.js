// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign( {_id: 'abc123'}, 'thisismynewcourse', { expiresIn: '7 days'})
//     console.log(token)
//     const data = jwt.verify(token, 'thisismynewcourse') // returns data with timestamp
//     console.log(data)
// }

// myFunction()


// app.use((req, res, next) => {
//     if(req.method === 'GET') {
//         res.send('GET requests are disabled')
//     }else {
//         next()
//     }
// })

// Site under maintenance
// app.use((req, res, next) => {
//     res.status(503).send('Site is under maintenance')
// })


// const main = async () => {
//     // const task = await Task.findById('5efd9b7f2029683bf88687ae')
//     // await task.populate('owner').execPopulate()   // gets a reference to the object
//     // console.log(task.owner)

//     const user = await User.findById('5efd9b0b2029683bf88687ac')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()



const express = require('express')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
require('./db/mongoose')




const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log(`server is listening on ${port}`)
})

