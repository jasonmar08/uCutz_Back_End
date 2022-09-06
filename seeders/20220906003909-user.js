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
          passwordDigest: 'abcdefghi',
          city: 'Orlando',
          state: 'Florida',
          zip_code: 32803,
          user_image:
            'https://static.wikia.nocookie.net/fargo/images/9/9d/Billy-bob-thornton_sc_768x1024.png/revision/latest?cb=20201129041412',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Tom',
          lastName: 'Cruise',
          email: 'tommyc@gmail.com',
          passwordDigest: 'ajsdajksndjkj',
          city: 'Los Angeles',
          state: 'California',
          zip_code: 90210,
          user_image:
            'https://www.biography.com/.image/t_share/MTc5ODc1NTM4NjMyOTc2Mzcz/gettyimages-693134468.jpg',
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
