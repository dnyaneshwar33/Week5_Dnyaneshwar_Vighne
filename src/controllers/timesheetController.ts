import { Request, Response } from 'express';
import { createTimesheet, getTimesheets } from '../services/timesheetService';

export const createEmployeeTimesheet = async (req: Request, res: Response) => {
  try {
    const { id: employeeId } = (req as any).user;
    const { shiftId, projectName, taskName, fromDate, toDate } = req.body;
    const timesheet = await createTimesheet(employeeId, shiftId, projectName, taskName, fromDate, toDate);
    res.status(201).json(timesheet);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getEmployeeTimesheets = async (req: Request, res: Response) => {
  try {
    const { id: employeeId } = (req as any).user;
     const timesheets = await getTimesheets(employeeId);
    res.status(200).json(timesheets);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
