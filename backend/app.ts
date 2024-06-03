//Import Tools
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

//Import Routes
import userRouter from './routes/userRouter';
import postRouter from './routes/postRouter';
import leadRouter from './routes/leadRouter';
import quoteRouter from './routes/quoteRouter';
import clickRouter from './routes/clickRouter';

//Define app
const app = express();

const allowedOrigins = [
    process.env.ORIGIN1 as string,
    process.env.ORIGIN2 as string,
    process.env.ORIGIN3 as string,
];

//Middleware
app.use(
    cors({
        origin: function (origin: any, callback: any) {
            if (allowedOrigins.includes(origin)) {
                return callback(null, origin);
            }
            return callback(
                'Error CORS, origin: ' + origin + ', No autorizado'
            );
        },
        credentials: true,
    })
);
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

//Routes
app.use('/api', userRouter);
app.use('/api/post', postRouter);
app.use('/api/lead', leadRouter);
app.use('/api/quote', quoteRouter);
app.use('/api/click', clickRouter);

//Export app
export default app;
