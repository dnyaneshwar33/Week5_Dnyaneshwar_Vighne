import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();


interface CustomRequest extends Request {
  user?: { id: string };
}

export const authenticate = (req: CustomRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};
