'use strict'
const middleware = require('../middleware')

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
          passwordDigest: await middleware.hashPassword('testuser'),
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
          passwordDigest: await middleware.hashPassword('testuser'),
          city: 'Los Angeles',
          state: 'California',
          zip_code: 90210,
          user_image:
            'https://cdn.gobankingrates.com/wp-content/uploads/2022/05/shutterstock_editorial_12946411ci-1.jpg?w=675&quality=75',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Rocky',
          lastName: 'Schwartz',
          email: 'schwartzr@gmail.com',
          passwordDigest: await middleware.hashPassword('password'),
          city: 'Los Angeles',
          state: 'California',
          zip_code: 90003,
          user_image:
            'https://www.nme.com/wp-content/uploads/2017/05/the-rock-1996-turtleneck-696x442.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Mikey',
          lastName: 'Bill',
          email: 'mikeb@gmail.com',
          passwordDigest: await middleware.hashPassword('password'),
          city: 'Chicago',
          state: 'Illinois',
          zip_code: 60605,
          user_image: '/assets/profile_pic_icon.png',
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
