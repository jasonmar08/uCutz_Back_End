'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Service.belongsTo(models.Barber, { foreignKey: 'barberId' })
    }
  }
  Service.init(
    {
      service_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      service_price: {
        type: DataTypes.STRING,
        allowNull: false
      },
      service_image: DataTypes.STRING,
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
      modelName: 'Service',
      tableName: 'services'
    }
  )
  return Service
}
