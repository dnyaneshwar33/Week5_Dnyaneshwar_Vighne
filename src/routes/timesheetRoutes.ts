import { Router } from 'express';
import { createEmployeeTimesheet, getEmployeeTimesheets } from '../controllers/timesheetController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.post('/', authenticate, createEmployeeTimesheet);
router.get('/', authenticate, getEmployeeTimesheets);

export default router;
