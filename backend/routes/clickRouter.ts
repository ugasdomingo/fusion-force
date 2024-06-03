//Import tools
import { Router } from 'express';
import {
    registerClick,
    getAllCallsClick,
    getTotalClick,
} from '../controllers/clickController';
import { adminAuth } from '../middlewares/adminAuth';

//Define router
const clickRouter = Router();

//Routes
clickRouter.post('/', registerClick);

clickRouter.get('/all', adminAuth, getAllCallsClick);

clickRouter.get('/total', getTotalClick);

export default clickRouter;
