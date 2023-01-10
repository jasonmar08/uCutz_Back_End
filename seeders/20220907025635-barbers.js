'use strict'
const middleware = require('../middleware')

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
          passwordDigest: await middleware.hashPassword('testbarber'),
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
          passwordDigest: await middleware.hashPassword('testbarber'),
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
          passwordDigest: await middleware.hashPassword('testbarber'),
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
        },
        {
          firstName: 'Ron',
          lastName: 'Joe',
          email: 'ronny@gmail.com',
          passwordDigest: await middleware.hashPassword('password'),
          city: 'Miami',
          state: 'Florida',
          zip_code: 33138,
          phoneNumber: 3052984752,
          mobile: false,
          barber_image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVHYJzRDOnQdNwXy8BGPjZXMsAIxDlKk2DdQ&usqp=CAU',
          fb_link: '',
          ig_link: '',
          barbershopId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Jimmy',
          lastName: 'Sharp',
          email: 'jimmys@gmail.com',
          passwordDigest: await middleware.hashPassword('password'),
          city: 'Chicago',
          state: 'Illinois',
          zip_code: 60018,
          phoneNumber: 1234238549,
          mobile: null,
          barber_image: 'https://i.postimg.cc/Hxbvd0H2/edwardsc.jpg',
          fb_link: '',
          ig_link: '',
          barbershopId: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Billy',
          lastName: 'Bob',
          email: 'billyb@gmail.com',
          passwordDigest: await middleware.hashPassword('password'),
          city: 'Miami',
          state: 'Florida',
          zip_code: 33137,
          phoneNumber: 7866106788,
          mobile: null,
          barber_image: '/assets/barber_profile_pic.png',
          fb_link: '',
          ig_link: '',
          barbershopId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'johnd@gmail.com',
          passwordDigest: await middleware.hashPassword('password'),
          city: 'Orlando',
          state: 'Florida',
          zip_code: 12515,
          phoneNumber: 3233994445,
          mobile: null,
          barber_image:
            'https://img.hoodline.com/uploads/story/image/846458/The_Spot_Barbershop_-_Coral_Way_Photo_2_Enhanced.jpg',
          fb_link: '',
          ig_link: '',
          barbershopId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Sam',
          lastName: 'Donny',
          email: 'samdon@gmail.com',
          passwordDigest: await middleware.hashPassword('password'),
          city: 'Miami',
          state: 'Florida',
          zip_code: 33138,
          phoneNumber: 3053051234,
          mobile: false,
          barber_image:
            'https://www.bu.edu/files/2019/04/resize-19-1292-BARBER2-076.jpg',
          fb_link: '',
          ig_link: '',
          barbershopId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Ernesto',
          lastName: 'Sanchez',
          email: 'ernestos@gmail.com',
          passwordDigest: await middleware.hashPassword('password'),
          city: '',
          state: '',
          zip_code: null,
          phoneNumber: 7865697812,
          mobile: null,
          barber_image:
            'https://images.squarespace-cdn.com/content/v1/58354129c534a52c8547e17f/1623975210038-9JFR8ZJPXJR1ZEJIUWLW/image-asset.jpeg',
          fb_link: '',
          ig_link: '',
          barbershopId: 4,
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
