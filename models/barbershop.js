'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Barbershop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Barbershop.hasMany(models.Barber, {
        foreignKey: 'barbershopId',
        onDelete: 'CASCADE'
      })
      Barbershop.hasMany(models.BarbershopReview, {
        foreignKey: 'barbershopId'
      })
    }
  }
  Barbershop.init(
    {
      business_name: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zip_code: DataTypes.INTEGER,
      phoneNumber: DataTypes.INTEGER,
      business_image: DataTypes.STRING,
      fb_link: DataTypes.STRING,
      ig_link: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Barbershop',
      tableName: 'barbershops'
    }
  )
  return Barbershop
}
