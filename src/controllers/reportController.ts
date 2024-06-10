import { Request, Response } from 'express';
import { generateHoursReport } from '../services/reportService';

export const getHoursReport = async (req: Request, res: Response) => {
  try {
    const reportData = await generateHoursReport();
    res.json(reportData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
