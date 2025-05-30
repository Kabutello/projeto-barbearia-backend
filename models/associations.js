import Service from "./Service.js";
import User from "./User.js";
import Schedule from "./Schedule.js";

User.hasMany(Schedule, { foreignKey: 'userId', as: 'schedules'});
Service.hasMany(Schedule, { foreignKey: 'serviceId', as: 'schedule_services' });
Schedule.belongsTo(User, { foreignKey: 'userId', as: 'usuarios' });
Schedule.belongsTo(Service, { foreignKey: 'serviceId', as: 'services' });