import { Router } from 'express';
import { getHoursReport } from '../controllers/reportController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', authenticate, getHoursReport);

export default router;
