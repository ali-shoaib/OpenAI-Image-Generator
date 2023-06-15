import express from 'express';
import DalleController from '../controller/dalleController.js';
import PostController from '../controller/postController.js';
const router = express.Router();

router.get('/test', (req, res) => res.send("Hello from DALL-E"));

router.post('/generate-image',DalleController.getImage);

router.post('/upload-image',PostController.UploadImage);

router.get('/get-all',PostController.getAllPosts);

router.post('/delete',PostController.deletePost);

router.get('/deleteAll',PostController.deleteAllPost);

export default router;