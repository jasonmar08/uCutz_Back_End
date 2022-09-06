'use strict'

// rating: ,
// caption: '',
// comment: '',
// review_image: '',
// userId: ,
// barbershopId: ,
// createdAt: new Date(),
// updatedAt: new Date()

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'barbershop_reviews',
      [
        {
          rating: 4,
          caption: 'Best barbershop with great prices!',
          comment:
            'This place is so clean and welcoming. All the barbers are friendly and attentive.',
          review_image: '',
          userId: 1,
          barbershopId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('barbershop_reviews', null, {})
  }
}
