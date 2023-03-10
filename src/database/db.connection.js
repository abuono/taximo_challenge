// import sequelize from 'sequelize'
const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    'dara9ptn2oot0',
    'hqdlgxtgevydhx',
    '58191254b64e72ebe0c5837fa8fd5abb0fc4b900276614f9b479e491d8d2739f',
    {
        host: 'ec2-54-80-123-146.compute-1.amazonaws.com',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        loggin: false
    }
)
module.exports = sequelize;