import { Model, DataTypes, UUIDV4 } from 'sequelize';
import sequelize from '../postgreDB/pgConfig';

class Timesheet extends Model {
  public id!: string;
  public employeeId!: string;
  public shiftId!: string;
  public projectName!: string;
  public taskName!: string;
  public fromDate!: Date;
  public toDate!: Date;
}

Timesheet.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true
    },
    employeeId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    shiftId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    projectName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    taskName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fromDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    toDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: 'timesheets'
  }
);

export default Timesheet;
