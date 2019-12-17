const db = require('../database/db.js')

module.exports = db.sequelize.define('Competence',{
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

    level: {
        type: db.Sequelize.TINYINT,
        allownull: false
    },

    //associations
    id_user: {
        type: db.Sequelize.BIGINT,
        foreignKey: true,
        references:{ table: 'User' , key: 'id'},
        onDelete: 'CASCADE',
        allownull: false,
    },
},{
    timestamps: false
})

