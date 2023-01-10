'use strict'

// business_name: '',
// address: '',
// city: '',
// state: '',
// zip_code: ,
// phoneNumber: ,
// business_image: '',
// business_site: '',
// fb_link: '',
// ig_link: '',
// createdAt: new Date(),
// updatedAt: new Date()

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'barbershops',
      [
        {
          business_name: "Jag's Barber Shop",
          address: '6233 W 87th St.',
          city: 'Los Angeles',
          state: 'California',
          zip_code: 90045,
          phoneNumber: 3103371617,
          business_image:
            'https://lh3.googleusercontent.com/p/AF1QipPkocMCOB-mclpk7r4f_HM4IE5wZ8tFzbHYVXra=s1600-w600-h600',
          business_site: 'http://www.jagsbarbershop.com/',
          fb_link: '',
          ig_link: 'https://www.instagram.com/jagsbarbers/?hl=en',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          business_name: 'No.1 Celebrity Barbershop',
          address: '2015 S Orange Ave',
          city: 'Orlando',
          state: 'Florida',
          zip_code: 32806,
          phoneNumber: 4077302461,
          business_image:
            'https://d2zdpiztbgorvt.cloudfront.net/us/291731/470188333ed24a4bba86e5548e659bf3-Sebastian-No-1-Celebrity-Barbershop-biz-photo.PNG?size=640x427',
          business_site:
            'https://booksy.com/en-us/97337_no-1-celebrity-barbershop_barber-shop_134763_orlando#ba_s=sh_1',
          fb_link: 'https://www.facebook.com/No1celebritybarbershop/',
          ig_link: 'https://www.instagram.com/no.1celebritybarbershop/',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          business_name: 'Joan Cruz Barber',
          address: '1442 NE Miami Pl Suite #201',
          city: 'Miami',
          state: 'Florida',
          zip_code: 33132,
          phoneNumber: null,
          business_image:
            'https://static.wixstatic.com/media/282a12_8d8b0fd11760488f9bd5ff8ca6ada7c4~mv2.jpeg/v1/fit/w_1024,h_740,q_90/282a12_8d8b0fd11760488f9bd5ff8ca6ada7c4~mv2.jpg',
          business_site: 'https://www.joancruzbarber.com/',
          fb_link: 'https://www.facebook.com/joancruzbarber/',
          ig_link: 'https://www.instagram.com/joancruz_barber/',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          business_name: 'The Spot Barbershop',
          address: '151 NE 41st St. Suite PP219',
          city: 'Miami',
          state: 'Florida',
          zip_code: 33137,
          phoneNumber: 7866106788,
          business_image:
            'https://www.miamidesigndistrict.net/images/listings/large/682_the-spot-barbershop_1572283641663887.jpg',
          business_site: null,
          fb_link: null,
          ig_link: null,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('barbershops', null, {})
  }
}
