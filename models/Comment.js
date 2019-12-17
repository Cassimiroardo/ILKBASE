const db = require('../database/db.js')

module.exports = db.sequelize.define('Comment',{
    id: {
        type: db.Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allownull: false,
        unique: true
    },

    content: {
        type: db.Sequelize.TEXT
    },

    created: {
        type: db.Sequelize.DATE,
        defaultValue: db.Sequelize.NOW
    },

    hour: {
        type: db.Sequelize.TIME,
    },

    //associations
    id_user: {
        type: db.Sequelize.BIGINT,
        foreignKey: true,
        references:{ table: 'User' , key: 'id'},
        onDelete: 'CASCADE',
        allownull: false,
    },

    id_post: {
        type: db.Sequelize.BIGINT,
        foreignKey: true,
        references:{ table: 'Post' , key: 'id'},
        onDelete: 'CASCADE',
        allownull: false,
    }

},{
    timestamps: false
})