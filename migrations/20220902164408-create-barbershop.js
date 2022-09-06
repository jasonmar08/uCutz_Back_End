'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('barbershops', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      business_name: {
        type: Sequelize.STRING
      },
      address: {
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
        type: Sequelize.INTEGER
      },
      business_image: {
        type: Sequelize.STRING
      },
      business_site: {
        type: Sequelize.STRING
      },
      fb_link: {
        type: Sequelize.STRING
      },
      ig_link: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('barbershops')
  }
}
