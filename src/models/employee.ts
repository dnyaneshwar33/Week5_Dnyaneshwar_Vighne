import { Model, DataTypes, UUIDV4 } from 'sequelize';
import sequelize from '../postgreDB/pgConfig';
import bcrypt from 'bcryptjs';
import Shift from './shift';

class Employee extends Model {
  public id!: string;
  public name!: string;
  public email!: string;
  public password!: string;
  public assignedShiftHours!: number;
  public role!: string;

  public async validPassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
  }
}

Employee.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    assignedShiftHours: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('SuperAdmin', 'Manager', 'Employee'),
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: 'employees',
    hooks: {
      beforeCreate: async (employee: Employee) => {
        const salt = await bcrypt.genSalt(10);
        employee.password = await bcrypt.hash(employee.password, salt);
      }
    }
  }
);

Employee.hasMany(Shift, {
  foreignKey: 'employeeId',
  as: 'shifts'
});

Shift.belongsTo(Employee, {
  foreignKey: 'employeeId',
  as: 'employee'
});

export default Employee;
