const getTVPrescriptionModel = (sequelize, {DataTypes}) => {
  const TVPrescription = sequelize.define('tvPrescription', {
    message: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    signature: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false
    },
    showID: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    }
  })
  return TVPrescription;
}

module.exports = getTVPrescriptionModel;