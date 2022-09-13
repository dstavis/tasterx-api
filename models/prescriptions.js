const getPrescriptionModel = (sequlize, { DataTypes }) => {
    const Prescription = sequlize.define('prescription', {
        name: {
            type: DataTypes.STRING, 
            unique: false,
            allowNull: false,
        },
        showID: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        }
    });

    return Prescription;
}

module.exports = getPrescriptionModel;