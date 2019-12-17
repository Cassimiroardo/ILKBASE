const db = require('../database/db.js')

module.exports = db.sequelize.define('Post',{
    id: {
        type: db.Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allownull: false,
        unique: true
    },

    title: {
        type: db.Sequelize.STRING
    },

    content: {
        type: db.Sequelize.TEXT
    },

    technology: {
        type: db.Sequelize.STRING,
    },

    created: {
        type: db.Sequelize.DATE,
        defaultValue: db.Sequelize.NOW
    },

    hour: {
        type: db.Sequelize.TIME,
        defaultValue: db.Sequelize.NOW
    },

    //associations
    id_user: {
        type: db.Sequelize.BIGINT,
        foreignKey: true,
        references:{ table: 'User' , key: 'id'},
        onDelete: 'CASCADE',
        allownull: false,
    }

},{
    timestamps: false
})