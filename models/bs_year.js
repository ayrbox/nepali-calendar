module.exports = (sequelize, DataTypes) => {
  const bsYear = sequelize.define(
    'bs_year',
    {
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      firstDate: {
        type: DateTypes.DATE,
        allowNull: false,
        unique: true,
      },
      M01: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      M02: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      M03: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      M04: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      M05: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      M06: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      M07: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      M08: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      M09: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      M10: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      M11: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      M12: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return bsYear;
};
