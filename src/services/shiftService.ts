import Shift from '../models/shift';

export const startShift = async (employeeId: string) => {
  const shift = await Shift.create({ employeeId, startTime: new Date(), endTime: null });
  return shift;
};

export const endShift = async (employeeId: string) => {
  const shift = await Shift.findOne({ where: { employeeId, endTime: null } });
  if (!shift) {
    throw new Error('No active shift found');
  }

  shift.endTime = new Date();
  const diffInMs = new Date(shift.endTime).getTime() - new Date(shift.startTime).getTime();
  shift.actualHours = diffInMs / (1000 * 60 * 60);
  await shift.save();

  return shift;
};
