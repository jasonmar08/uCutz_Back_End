'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Barber extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Barber.hasMany(models.Service, { foreignKey: 'barberId' })
      Barber.hasMany(models.Appointment, { foreignKey: 'barberId' })
      Barber.hasMany(models.AvailabilityDate, { foreignKey: 'barberId' })
      Barber.hasMany(models.BarberReview, { foreignKey: 'barberId' })
      Barber.belongsTo(models.Barbershop, { foreignKey: 'barbershopId' })
    }
  }
  Barber.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      passwordDigest: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zip_code: DataTypes.INTEGER,
      phoneNumber: DataTypes.BIGINT,
      mobile: DataTypes.BOOLEAN,
      barber_image: DataTypes.STRING,
      fb_link: DataTypes.STRING,
      ig_link: DataTypes.STRING,
      barbershopId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'barbershops',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Barber',
      tableName: 'barbers'
    }
  )
  return Barber
}
