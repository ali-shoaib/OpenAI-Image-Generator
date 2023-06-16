import {v2 as cloudinary} from 'cloudinary';
import Post from '../models/post.js';
import {CLOUDINARY_API_KEY,CLOUDINARY_CLOUD_NAME,CLOUDINARY_API_SECRET} from '../config/index.js';

// Cloudinary setup
cloudinary.config({ 
    cloud_name: CLOUDINARY_CLOUD_NAME, 
    api_key: CLOUDINARY_API_KEY, 
    api_secret: CLOUDINARY_API_SECRET 
});

const PostController={
    async UploadImage(req,res){
        try {
            const {prompt,photo} = req.body;
            const photoUrl=await cloudinary.uploader.upload(photo);
            
            const newPost = new Post({
                prompt,
                photo:photoUrl.url
            })
            await newPost.save();

            res.status(200).json({success:true, data: newPost});
        } catch (error) {
            res.status(500).json({success:false, message: error});
        }
    },
    async getAllPosts(req,res){
        try{
            const post = await Post.find({});

            res.status(200).json({success:true, data: post});
        }
        catch(error){
            res.status(500).json({success:false, message: error});
        }
    },
    async deletePost(req,res){
        try{
            const {id} = req.body;

            let resp = await Post.deleteOne({_id :id});

            res.status(200).json({success:true, data: resp});
        }
        catch(err){
            res.status(500).json({success:false, message: err});
        }
    },
    async deleteAllPost(req,res){
        try{
            let resp = await Post.deleteMany({});

            res.status(200).json({success:true, data: resp});
        }
        catch(err){
            res.status(500).json({success:false, message: err});
        }
    }
}

export default PostController;