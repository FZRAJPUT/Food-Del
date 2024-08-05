import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import dealRouter from './routes/dealRoutes.js';
import userRouter from './routes/useRoute.js';
import 'dotenv/config'
import casrtRouter from './routes/cartRoutes.js';



// app config
const app = express();
const port = process.env.PORT || 4000;


// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// API endpoint
app.use("/api/deal",dealRouter)
app.use("/images",express.static('uploads'));
app.use("/api/user",userRouter);
app.use("/api/cart",casrtRouter);

app.get('/',(req,res)=>{
    res.send("API Working");
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
