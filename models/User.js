import { Sequelize } from 'sequelize'

import database from '../db.js'

const User = database.define('users', {
    name: {
        type: Sequelize.STRING,
		allowNull: false
    },
    email: {
        type: Sequelize.STRING,
		allowNull: false
    },
    telephone:{
        type: Sequelize.INTEGER,
		allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

export default User