'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      specialRequest: {
        type: Sequelize.STRING
      },
      inspoImage: {
        type: Sequelize.STRING
      },
      appt_day: {
        type: Sequelize.STRING,
        allowNull: false
      },
      appt_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      appt_time: {
        type: Sequelize.TIME,
        allowNull: false
      },
      service: {
        type: Sequelize.STRING,
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      barberId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'barbers',
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
    await queryInterface.dropTable('appointments')
  }
}
