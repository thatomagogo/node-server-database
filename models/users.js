const Sequelize = require('sequelize')
const db = require('../db/config')

const User = db.define('business', {
    name: { type: Sequelize.STRING },
    occupation: { type: Sequelize.STRING },
    contact: { type: Sequelize.STRING },
    createdAt: { type: Sequelize.TIME },
    updatedAt: { type: Sequelize.TIME }
})

db.sync({
    logging: console.log
})

module.exports = User;