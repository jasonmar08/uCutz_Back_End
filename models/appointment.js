'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Appointment.belongsTo(models.User, { foreignKey: 'userId' })
      Appointment.belongsTo(models.Barber, { foreignKey: 'barberId' })
    }
  }
  Appointment.init(
    {
      specialRequest: DataTypes.STRING,
      inspoImage: DataTypes.STRING,
      appt_day: {
        type: DataTypes.STRING,
        allowNull: false
      },
      appt_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      appt_time: {
        type: DataTypes.TIME,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
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
      modelName: 'Appointment',
      tableName: 'appointments'
    }
  )
  return Appointment
}
