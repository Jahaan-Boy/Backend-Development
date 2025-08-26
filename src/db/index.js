import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"


const connectDB=async ()=>{
    try{
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI environment variable is not defined");
        }
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MONGO connected || DB_HOST: ${connectionInstance.connection.host}`);
    }catch(error){
        console.log("MONGO connection error",error);
        process.exit(1);
    }
}

export default connectDB;