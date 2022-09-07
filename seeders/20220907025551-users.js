'use strict'

// firstName: '',
// lastName: '',
// email: '',
// passwordDigest: '',
// city: '',
// state: '',
// zip_code: ,
// user_image: '',
// createdAt: new Date(),
// updatedAt: new Date()

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          firstName: 'Billy',
          lastName: 'Bob',
          email: 'billyb@gmail.com',
          passwordDigest: 'testuser',
          city: 'Orlando',
          state: 'Florida',
          zip_code: 32803,
          user_image: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Tommy',
          lastName: 'Cruise',
          email: 'tommyc@gmail.com',
          passwordDigest: 'testuser',
          city: 'Los Angeles',
          state: 'California',
          zip_code: 90210,
          user_image: '',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
}
