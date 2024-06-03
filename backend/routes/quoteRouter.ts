//Import tools
import { Router } from 'express';
import fs from 'fs-extra';
import fileUpload from 'express-fileupload';
import { userOrAdminAuth } from '../middlewares/userOrAdminAuth';
import {
    getAllQuote,
    createQuote,
    getQuoteById,
    updateQuote,
    deleteQuote,
} from '../controllers/quoteControllers';
import { adminAuth } from '../middlewares/adminAuth';

//Define router
const testResultsRouter = Router();

//Routes
testResultsRouter.get('/all', userOrAdminAuth, getAllQuote);

testResultsRouter.post(
    '/',
    fileUpload({
        useTempFiles: true,
        tempFileDir: './uploads',
    }),
    createQuote
);

testResultsRouter.get('/:id', userOrAdminAuth, getQuoteById);

testResultsRouter.put('/:id', userOrAdminAuth, updateQuote);

testResultsRouter.delete('/:id', adminAuth, deleteQuote);

//Export routes
export default testResultsRouter;
