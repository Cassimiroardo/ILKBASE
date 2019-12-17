const db = require('../database/db.js')

module.exports = db.sequelize.define('User',{
    id: {
        type: db.Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allownull: false,
        unique: true
    },

    name: {
        type: db.Sequelize.STRING,
        allownull: false
    },

    email: {
        type: db.Sequelize.STRING,
        unique: true,
        allownull: false
    },

    password: {
        type: db.Sequelize.STRING,
        allownull: false
    },
},{
    timestamps: false
})

