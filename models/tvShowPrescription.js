'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TvShowPrescription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TvShowPrescription.init({
    name: DataTypes.STRING,
    showID: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TvShowPrescription',
  });
  return TvShowPrescription;
};
