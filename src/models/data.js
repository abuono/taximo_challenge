const Sequelize = require('sequelize');

// const __dirname = dirname(fileURLToPath(import.meta.url));
const sequelize = require('../database/db.connection');

const Data = sequelize.define('data', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    parameters: {
        type: Sequelize.TEXT,
    },
    shoping_centers: {
        type: Sequelize.TEXT,
    },
    roads: {
        type: Sequelize.TEXT,
    },
    minimum_time: {
        type: Sequelize.INTEGER,
    },
    creation_date: {
        type: Sequelize.DATE,
    }
}, {
    timestamps: false
});

module.exports = Data;