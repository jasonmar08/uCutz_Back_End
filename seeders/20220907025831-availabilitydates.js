'use strict'

// day: '',
// date: '',
// barberId: ,
// createdAt: new Date(),
// updatedAt: new Date()

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'availability_dates',
      [
        {
          day: 'Saturday',
          date: '2022-09-17',
          barberId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          day: 'Sunday',
          date: '2022-09-18',
          barberId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          day: 'Tuesday',
          date: '2022-09-20',
          barberId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          day: 'Wednesday',
          date: '2022-09-21',
          barberId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          day: 'Thursday',
          date: '2022-09-22',
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
