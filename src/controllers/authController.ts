import { Request, Response } from 'express';
import { registerEmployee, loginEmployee } from '../services/authService';

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, assignedShiftHours, role } = req.body;
    const employee = await registerEmployee(name, email, password, assignedShiftHours, role);
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { token, employee } = await loginEmployee(email, password);
    res.status(200).json({ token, employee });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
