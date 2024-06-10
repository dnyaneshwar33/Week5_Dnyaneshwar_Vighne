import { Request, Response } from 'express';
import { startShift, endShift } from '../services/shiftService';



export const startEmployeeShift = async (req: Request, res: Response) => {
  try {
    const { id: employeeId } = (req as any).user; 
    const shift = await startShift(employeeId);
    res.status(201).json(shift);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const endEmployeeShift = async (req: Request, res: Response) => {
  try {
    const { id: employeeId } = (req as any).user;    const shift = await endShift(employeeId);
    res.status(200).json(shift);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
