const app  = require('./app')
const { connectDB } = require('./connectDb')


connectDB()

app.listen(3002,()=>{
    console.log('APP is running at  3002')
})