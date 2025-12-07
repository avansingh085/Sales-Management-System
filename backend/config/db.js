import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const connectDB=async ()=>{
    try{
   await mongoose.connect(process.env.MONGO_URI);
   console.log('database connected!');
    }
    catch(err){
        console.log('error occur during database connection',err,)
    }
}

export default connectDB;