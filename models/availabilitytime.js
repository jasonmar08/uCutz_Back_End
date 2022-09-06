'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class AvailabilityTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AvailabilityTime.belongsTo(models.AvailabilityDate, {
        foreignKey: 'dateId'
      })
    }
  }
  AvailabilityTime.init(
    {
      time: {
        type: DataTypes.TIME,
        allowNull: false
      },
      dateId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'availability_dates',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'AvailabilityTime',
      tableName: 'availability_times'
    }
  )
  return AvailabilityTime
}
