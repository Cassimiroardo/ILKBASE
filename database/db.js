//variable to export
const db = {}

//configuration of connection with database IL-KBASE

const Sequelize = require('sequelize')
const sequelize = new Sequelize('IL_KBASE','root','dudu142414', {
    host: 'localhost',
    dialect: 'mysql',
    operatorAnaliases: false,

    pool: {
        max: 5,
        mim: 0,
        acquire: 30000,
        idle: 10000
    }
})

//authentication
sequelize.authenticate().then(_ => {
    console.log("successfully connected to IL-KBASE")
}).catch(err => {
    console.log("FAILED TO CONNECT WITH DATABASE:\n "+err)
})


db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db