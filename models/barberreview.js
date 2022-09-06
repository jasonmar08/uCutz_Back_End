'use strict'
const { DATE } = require('sequelize')
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class BarberReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BarberReview.belongsTo(models.User, { foreignKey: 'userId' })
      BarberReview.belongsTo(models.Barber, { foreignKey: 'barberId' })
    }
  }
  BarberReview.init(
    {
      rating: DataTypes.INTEGER,
      caption: DataTypes.STRING,
      comment: DataTypes.STRING,
      review_image: DataTypes.STRING,
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
      modelName: 'BarberReview',
      tableName: 'barber_reviews'
    }
  )
  return BarberReview
}
