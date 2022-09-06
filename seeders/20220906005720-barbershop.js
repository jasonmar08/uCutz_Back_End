'use strict'

// business_name: '',
// address: '',
// city: '',
// state: '',
// zip_code: ,
// phoneNumber: ,
// business_image: '',
// fb_link: '',
// ig_link: '',
// createdAt: new Date(),
// updatedAt: new Date()

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('barbershops', [
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
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
