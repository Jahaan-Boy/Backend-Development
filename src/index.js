import connectDB from "./db/index.js"
import dotenv from 'dotenv'
import {app} from './app.js'
dotenv.config({
    path: './.env'
})

connectDB()
.then(()=>{
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`)
    })
}).catch((err)=>{
    console.log("MONGO connection failed", err)
})