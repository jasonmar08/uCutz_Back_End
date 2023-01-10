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
          review_image:
            'https://img1.wsimg.com/isteam/ip/0c848ac2-55e4-411c-b49c-993d5de201fa/Men_s%20Taper%20Haircut%203.jpg',
          userId: 1,
          barbershopId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating: 5,
          caption: 'Very nice barbershop',
          comment:
            'First time coming here and I enjoyed the service. Everyone was kind and attentive. Great business!',
          review_image: 'https://i.redd.it/tq2s4k19diu31.jpg',
          userId: 3,
          barbershopId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating: 5,
          caption: 'Love this place!',
          comment:
            "I've been coming here for 2 years now. I've tried multiple barbers here and each one is top notch!",
          review_image: '',
          userId: 2,
          barbershopId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating: 5,
          caption: 'Recommend for kids',
          comment:
            'Needed a haircut for my son for back-to-school and they did an amazing job following the example I showed them. Great price too!',
          review_image: '',
          userId: 2,
          barbershopId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating: 4,
          caption: 'These guys are awesome!',
          comment:
            'Very talented group of barbers. I was cut by two of them and I have no complaints each time. I do wish the hours were more flexible',
          review_image:
            'https://i.pinimg.com/originals/74/8d/83/748d83e64f649c9761b47432638833ac.jpg',
          userId: 4,
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
