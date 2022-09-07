'use strict'

// time: '',
// dateId: ,
// createdAt: new Date(),
// updatedAt: new Date()

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'availability_times',
      [
        {
          time: '10:00',
          dateId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          time: '10:45',
          dateId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          time: '11:30',
          dateId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          time: '12:15',
          dateId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          time: '10:00',
          dateId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          time: '11:30',
          dateId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          time: '12:15',
          dateId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          time: '11:30',
          dateId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          time: '12:15',
          dateId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          time: '13:00',
          dateId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          time: '13:45',
          dateId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          time: '11:30',
          dateId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          time: '12:15',
          dateId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          time: '13:45',
          dateId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          time: '11:30',
          dateId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          time: '12:15',
          dateId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          time: '13:00',
          dateId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          time: '13:45',
          dateId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('availability_times', null, {})
  }
}
