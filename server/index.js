import './database';
import cors from 'cors';
import { config } from 'dotenv';
import express from 'express';
import indexRoutes from './routes/index.routes'
import usersRoutes from './routes/users.routes'
import cookieParser from 'cookie-parser'


const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200
}
const app = express()
config()


app.set('port', process.env.PORT || 4000);



// middlewares  
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use(indexRoutes);
app.use(usersRoutes);



app.listen(app.get('port'), console.log('server andando joya'));