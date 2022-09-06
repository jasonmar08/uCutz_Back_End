'use strict'

// rating: ,
// caption: '',
// comment: '',
// review_image: '',
// userId: ,
// barberId: ,
// createdAt: new Date(),
// updatedAt: new Date()

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'barber_reviews',
      [
        {
          rating: 5,
          caption: 'Great cut!',
          comment:
            'Have been coming to Sebastian for years. He never fails to having me look fresh. Thanks Sebas!',
          review_image:
            'https://d2zdpiztbgorvt.cloudfront.net/us/291731/5eac0da36a214893b5d8a72f8a605a0e-Sebastian-No-1-Celebrity-Barbershop-biz-photo.PNG?size=640x427',
          userId: 2,
          barberId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rating: 5,
          caption: 'Best haircut in a while!',
          comment:
            'Found this new hidden gem after living 5 years in the city. George was awesome and matched a photo I showed him exactly. Will be coming here from now on.',
          review_image:
            'https://d2zdpiztbgorvt.cloudfront.net/region1/us/396909/biz_photo/0bcaa69c662945279f2ec5db362347-kevinbladez-no-1-celebrity-bar-biz-photo-e17025bffb954fe7b6343026ff3ef3-booksy.jpeg?size=640x427',
          userId: 1,
          barberId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('barber_reviews', null, {})
  }
}
