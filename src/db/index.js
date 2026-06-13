import mongoose from "mongoose";
import {DB_Name} from "../constants.js"

const connectDb = async () =>{
    try {
        const connectionInstace = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstace.connection.host}`);
        
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1)
        
    }
}

export default connectDb