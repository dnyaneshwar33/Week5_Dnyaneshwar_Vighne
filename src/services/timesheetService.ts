import Timesheet from '../models/timesheet';

export const createTimesheet = async (employeeId: string, shiftId: string, projectName: string, taskName: string, fromDate: Date, toDate: Date) => {
  const timesheet = await Timesheet.create({ employeeId, shiftId, projectName, taskName, fromDate, toDate });
  return timesheet;
};

export const getTimesheets = async (employeeId: string) => {
  const timesheets = await Timesheet.findAll({ where: { employeeId } });
  return timesheets;
};
