const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://ttqjzjehyycedi:e7f9d37023366e9c2e1425739d64b652169a0a0911e98f6be7d092e8bc215016@ec2-54-165-178-178.compute-1.amazonaws.com:5432/df58r0ramdv8ar');

const TvShowPrescription = sequelize.define('TvShowPrescription', {
  // Model attributes are defined here
  message: {
    type: DataTypes.STRING,
    allowNull: false
  },
  showID: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// `sequelize.define` also returns the model
console.log(TvShowPrescription === sequelize.models.TvShowPrescription); // true