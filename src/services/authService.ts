import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Employee from '../models/employee';

export const registerEmployee = async (name: string, email: string, password: string, assignedShiftHours: number, role: string) => {
  const employee = await Employee.create({ name, email, password, assignedShiftHours, role });
  return employee;
};

export const loginEmployee = async (email: string, password: string) => {
  const employee = await Employee.findOne({ where: { email } });
  if (!employee || !(await employee.validPassword(password))) {
    throw new Error('Invalid email or password');
  }

  const token = jwt.sign({ id: employee.id, role: employee.role }, process.env.JWT_SECRET!, { expiresIn: '15h' });
  return { token, employee };
};
