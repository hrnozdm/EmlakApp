import express, {Application } from 'express';
import dotenv from 'dotenv';
import { connectDb } from './config/config';
import cookieparser from "cookie-parser";
import cors from "cors";
import router from './routes/router';
const app: Application = express();
dotenv.config();
app.use(cookieparser());
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));
app.use(express.json());
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Server is Fire at ${port}`);
});
app.use('/api',router);
connectDb();