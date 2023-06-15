import * as dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5002;
const MONGO_URI = process.env.MONGO_URI;
const OPENAI_KEY = process.env.OPENAI_KEY;
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

export {PORT,MONGO_URI,OPENAI_KEY,CLOUDINARY_API_KEY,CLOUDINARY_CLOUD_NAME,CLOUDINARY_API_SECRET};