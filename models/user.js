'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Appointment, { foreignKey: 'userId' })
      User.hasMany(models.BarbershopReview, { foreignKey: 'userId' })
      User.hasMany(models.BarberReview, { foreignKey: 'userId' })
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      passwordDigest: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zip_code: DataTypes.INTEGER,
      user_image: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
