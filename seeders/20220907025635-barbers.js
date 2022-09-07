'use strict'

// firstName: '',
// lastName: '',
// email: '',
// passwordDigest: '',
// city: '',
// state: '',
// zip_code: ,
// phoneNumber: ,
// mobile: ,
// barber_image: '',
// fb_link: '',
// ig_link: '',
// barbershopId: ,
// createdAt: new Date(),
// updatedAt: new Date()

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'barbers',
      [
        {
          firstName: 'Sebastian',
          lastName: '',
          email: 'sebastianbarber@gmail.com',
          passwordDigest: 'testbarber',
          city: 'Orlando',
          state: 'Florida',
          zip_code: 32806,
          phoneNumber: 4077302461,
          mobile: false,
          barber_image:
            'https://d2zdpiztbgorvt.cloudfront.net/us/bb0e4a802ca5404d9b30c8659bc0d80b/291731-No-1-Celebrity-Barbershop.JPEG?size=640x427',
          fb_link: '',
          ig_link: '',
          barbershopId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'George',
          lastName: '',
          email: 'georgebarber@gmail.com',
          passwordDigest: 'testbarber',
          city: 'Los Angeles',
          state: 'California',
          zip_code: 90045,
          phoneNumber: 3103371617,
          mobile: true,
          barber_image:
            'https://s3-media0.fl.yelpcdn.com/bphoto/AweA3WwksQAELEGw4YNzrw/o.jpg',
          fb_link: '',
          ig_link: '',
          barbershopId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Kevin',
          lastName: '',
          email: 'kevinbarber@gmail.com',
          passwordDigest: 'testbarber',
          city: 'Orlando',
          state: 'Florida',
          zip_code: 32806,
          phoneNumber: 4074910787,
          mobile: true,
          barber_image:
            'https://d2zdpiztbgorvt.cloudfront.net/region1/us/396909/biz_photo/c9ba514ac6ef4ccd93e639cc86a20f-kevin-bladez-biz-photo-6795199eb29146b492b4f908a96f55-booksy.jpeg?size=640x427',
          fb_link: '',
          ig_link: '',
          barbershopId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('barbers', null, {})
  }
}
