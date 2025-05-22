const express=require('express');
const app=express();
const router=require('./routes/tasks')
const connectDB=require('./db/connect')
const notfound=require('./middleware/not_found')
const errorHandlerMiddleware=require('./middleware/error-handler')
require('dotenv').config()
app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks',router)
app.use(notfound);
app.use(errorHandlerMiddleware)
const port=process.env.PORT||3000
const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log(`Server is running on port ${port}...`)
        })
    }catch(error){
        console.error('Error connecting to database:',error.message)
        process.exit(1);
    }

}
start()