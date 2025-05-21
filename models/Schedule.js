import { Sequelize } from 'sequelize'

import database from '../db.js'

const Schedule = database.define('schedules', {
    datetime: {
        type: Sequelize.DATE,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

export default Schedule