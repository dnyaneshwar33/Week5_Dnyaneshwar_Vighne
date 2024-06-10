import { Model, DataTypes, UUIDV4 } from 'sequelize';
import sequelize from '../postgreDB/pgConfig';
import Employee from './employee';

class Shift extends Model {
  public id!: string;
  public employeeId!: string;
  public startTime!: Date;
  public endTime!: Date | null;
  public actualHours!: number;
  public employee!: Employee;
}

Shift.init(
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
    startTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    actualHours: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    sequelize,
    tableName: 'shifts'
  }
);

// Shift.belongsTo(Employee, {
//   foreignKey: 'employeeId',
//   as: 'employee'
// });

export default Shift;
