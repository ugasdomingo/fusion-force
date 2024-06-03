//Import tools
import { Router } from 'express';
import fs from 'fs-extra';
import fileUpload from 'express-fileupload';
import { userOrAdminAuth } from '../middlewares/userOrAdminAuth';
import {
    getAllLead,
    createLead,
    getLead,
    deleteLead,
    updateLead,
} from '../controllers/leadControllers';
import { adminAuth } from '../middlewares/adminAuth';

//Define router
const testResultsRouter = Router();

//Routes
testResultsRouter.get('/all', userOrAdminAuth, getAllLead);

testResultsRouter.post(
    '/',
    fileUpload({
        useTempFiles: true,
        tempFileDir: './uploads',
    }),
    createLead
);

testResultsRouter.get('/:id', userOrAdminAuth, getLead);

testResultsRouter.patch('/:id', userOrAdminAuth, deleteLead);

testResultsRouter.delete('/:id', adminAuth, updateLead);

//Export routes
export default testResultsRouter;
