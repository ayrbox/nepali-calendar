'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bsYear extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      bsYear.hasMany(models.months, {
        foreignKey: 'year',
      });
    }
  };
  bsYear.init({
    year: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'bsYear',
  });
  return bsYear;
};
