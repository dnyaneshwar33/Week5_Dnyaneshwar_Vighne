// import sequelize from '../postgreDB/pgConfig';
// import Employee from './employee';
// import Shift from './shift';

// // Initialize models
// Employee.initModel(sequelize);
// Shift.initModel(sequelize);

// // Define associations
// Employee.hasMany(Shift, { foreignKey: 'employeeId', as: 'shifts' });
// Shift.belongsTo(Employee, { foreignKey: 'employeeId', as: 'employee' });

// // Export initialized models
// export { Employee, Shift };
// export default sequelize;
// models/index.ts
// import Shift from './shift';
// import Employee from './employee';

// // Call the associate methods
// Shift.associate();
// Employee.associate();

// export { Shift, Employee };