import { Sequelize } from 'sequelize'

import database from '../db/database.js'

const Service = database.define('services', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
    },
    duration:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

export default Service