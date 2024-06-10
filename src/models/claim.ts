import { Model, DataTypes, UUIDV4 } from 'sequelize';
import sequelize from '../postgreDB/pgConfig';

class Claim extends Model {
  public id!: string;
  public key!: string;
  public value!: string;
  public employeeId!: string;
}

Claim.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true
  },
  key: {
    type: DataTypes.STRING,
    allowNull: false
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false
  },
  employeeId: {
    type: DataTypes.UUID,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'claims'
});

export default Claim;
