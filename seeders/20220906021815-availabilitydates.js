'use strict'

// date: '',
// appointmentId: ,
// barberId: ,
// createdAt: new Date(),
// updatedAt: new Date()

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'availability_dates',
      [
        {
          date: '2022-09-22',
          appointmentId: 1,
          barberId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          date: '2022-09-22',
          appointmentId: 2,
          barberId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('availability_dates', null, {})
  }
}
