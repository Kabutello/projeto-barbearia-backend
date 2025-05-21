import Service from "./Service.js";
import User from "./User.js";
import Schedule from "./Schedule.js";

User.hasMany(Schedule, { foreignKey: 'userId' });
Service.hasMany(Schedule, { foreignKey: 'serviceId' });
Schedule.belongsTo(User, { foreignKey: 'userId' });
Schedule.belongsTo(Service, { foreignKey: 'serviceId' });