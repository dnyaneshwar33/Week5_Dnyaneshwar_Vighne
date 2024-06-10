import Employee from "../models/employee";
import  Shift  from '../models/shift';
export const generateHoursReport = async () => {
  const shifts = await Shift.findAll({
    include: [
      {
        model: Employee,
        as: 'employee'
      }
    ]
  });

  const reportData = shifts.map(shift => ({
    employeeName: shift.employee?.name,
    assignedShiftHours: shift.employee?.assignedShiftHours,
    actualHours: shift.actualHours,
    date: shift.startTime.toISOString().split('T')[0],
    startTime: shift.startTime.toISOString(),
    endTime: shift.endTime ? shift.endTime.toISOString() : null
  }));

  return reportData;
};
