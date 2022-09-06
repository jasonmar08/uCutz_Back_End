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
          time: '14:15',
          dateId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          time: '11:30',
          dateId: 2,
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
