const Sequelize = require('sequelize');
const getTVPrescriptionModel = require('./tv-prescription');

const sequelize = new Sequelize(
  process.env.DATABASE_URL,
  {
    dialect: 'postgres',
    ...(!process.env.NODE_ENV === 'production' && {dialectOptions: {
      ssl: {
        required: true,
        rejectUnauthorized: false,
      }
    }})
  },
);

const models = {
  TVPrescription: getTVPrescriptionModel(sequelize, Sequelize),
}

module.exports = { sequelize: sequelize, models: models };