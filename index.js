import express from 'express';
import {PORT} from './config/index.js';
import router from './routes/index.js';
import cors from 'cors';
import dbConnect from './database/index.js';
import {v2 as cloudinary} from 'cloudinary';

const app = express();

// middleware for connecting frontend and backend
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use(express.json());

app.use('/api/v1', router);

// connect to mongo
dbConnect();

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));