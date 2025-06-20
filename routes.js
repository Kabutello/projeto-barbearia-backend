import { Router } from 'express'

import UsersController from './controllers/UserController.js'
import ServiceController from './controllers/ServiceController.js'
import ScheduleController from './controllers/ScheduleController.js'

const router = Router();

router.post('/users', UsersController.createUser);
router.get('/users', UsersController.getUsers);
router.get('/users/:id', UsersController.getUser);
router.put('/users/:id', UsersController.updateUser);
router.delete('/users/:id', UsersController.deleteUser);

router.post('/services', ServiceController.createService);
router.get('/services', ServiceController.getServices);
router.get('/services/:id', ServiceController.getService);
router.put('/services/:id', ServiceController.updateService);
router.delete('/services/:id', ServiceController.deleteService);

router.post('/schedules', ScheduleController.createSchedule);
router.get('/schedules', ScheduleController.getSchedules);
router.get('/schedules/:id', ScheduleController.getSchedule);
router.put('/schedules/:id', ScheduleController.updateSchedule);
router.delete('/schedules/:id', ScheduleController.deleteSchedule);

export default router