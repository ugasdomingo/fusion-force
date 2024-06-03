//Import tools
import { Router } from 'express';
import { adminAuth } from '../middlewares/adminAuth';
import fs from 'fs-extra';
import fileUpload from 'express-fileupload';
import {
    createPost,
    deletePost,
    getAllPost,
    getPostById,
    updatePost,
} from '../controllers/postControllers';

//Define router
const blogRouter = Router();

//Routes
blogRouter.get('/all', getAllPost);

blogRouter.post(
    '/',
    adminAuth,
    fileUpload({
        useTempFiles: true,
        tempFileDir: './uploads',
    }),
    createPost
);

blogRouter.get('/:id', getPostById);

blogRouter.delete('/:id', adminAuth, deletePost);

blogRouter.put('/:id', adminAuth, updatePost);

//Export routes
export default blogRouter;
