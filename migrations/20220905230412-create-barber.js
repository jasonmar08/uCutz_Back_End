'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('barbers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      passwordDigest: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      zip_code: {
        type: Sequelize.INTEGER
      },
      phoneNumber: {
        type: Sequelize.BIGINT
      },
      mobile: {
        type: Sequelize.BOOLEAN
      },
      barber_image: {
        type: Sequelize.STRING
      },
      fb_link: {
        type: Sequelize.STRING
      },
      ig_link: {
        type: Sequelize.STRING
      },
      barbershopId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'barbershops',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('barbers')
  }
}
