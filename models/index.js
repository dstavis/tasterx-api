// import { Sequelize } from 'sequelize';
const Sequelize = require('sequelize');
const getPrescriptionModel = require('./prescriptions');

const sequelize = new Sequelize(
    process.env.DATABASE_URL,
    {
        dialect: 'postgres',
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
);

const models = {
    Prescription: getPrescriptionModel(sequelize, Sequelize)
}

module.exports = { sequelize: sequelize, models: models }