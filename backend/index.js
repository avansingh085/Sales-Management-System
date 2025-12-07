import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import transactionRoute from './routes/transaction.route.js';
import dotenv from 'dotenv';

dotenv.config();

const app=express();

app.use(cors({
    origion:process.env.FRONTEND_URL
}))

app.use(express.json());
app.use('/api/transaction',transactionRoute);
connectDB();

app.get('/health', (req, res) => {
  res.send("Server health is good");
});


app.listen(5000,()=>{
    console.log('server is running ')
});