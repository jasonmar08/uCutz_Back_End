'use strict'
const { INTEGER } = require('sequelize')
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class BarbershopReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BarbershopReview.belongsTo(models.User, { foreignKey: 'userId' })
      BarbershopReview.belongsTo(models.Barbershop, {
        foreignKey: 'barbershopId'
      })
    }
  }
  BarbershopReview.init(
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
      modelName: 'BarbershopReview',
      tableName: 'barbershop_reviews'
    }
  )
  return BarbershopReview
}
