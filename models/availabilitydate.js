'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class AvailabilityDate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AvailabilityDate.belongsTo(models.Appointment, {
        foreignKey: 'appointmentId'
      })
      AvailabilityDate.belongsTo(models.Barber, { foreignKey: 'barberId' })
      AvailabilityDate.hasMany(models.AvailabilityTime, {
        foreignKey: 'dateId'
      })
    }
  }
  AvailabilityDate.init(
    {
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      appointmentId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'appointments',
          key: 'id'
        }
      },
      barberId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'barbers',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'AvailabilityDate',
      tableName: 'availability_dates'
    }
  )
  return AvailabilityDate
}
