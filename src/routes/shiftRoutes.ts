import { Router } from 'express';
import { startEmployeeShift, endEmployeeShift } from '../controllers/shiftController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.post('/start', authenticate, startEmployeeShift);
router.post('/end', authenticate, endEmployeeShift);

export default router;
