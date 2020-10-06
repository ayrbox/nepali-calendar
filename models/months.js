'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class months extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      months.belongsTo(models.bsYear, {
        foreignKey: 'year',
      });
    }
  };
  months.init({
    year: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'bsyear',
        },
        key: 'year',
      },
      allowNull: false,
    },
    month: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'months',
  });
  return months;
};
