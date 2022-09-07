'use strict'

// service_name: '',
// service_price: '',
// service_image: '',
// barberId: ,
// createdAt: new Date(),
// updatedAt: new Date()

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'services',
      [
        {
          service_name: "Men's Haircut",
          service_price: '$30',
          service_image:
            'https://s.abcnews.com/images/GMA/haircut-gty-jt-200417_hpMain_16x9_992.jpg',
          barberId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          service_name: "Senior's Haircut",
          service_price: '$15',
          service_image: '',
          barberId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          service_name: "Kid's Haircut",
          service_price: '$20',
          service_image:
            'https://www.barbermom.com/wp-content/uploads/2020/06/Boy-Haircut.jpg',
          barberId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          service_name: 'Haircut and Beard',
          service_price: '$40',
          service_image:
            'https://media.istockphoto.com/photos/man-getting-his-beard-trimmed-with-electric-razor-picture-id872361244?k=20&m=872361244&s=612x612&w=0&h=xacxRAgqgXGCN4BAp3dSPZq_jK_irb24I6nZM2P6mNU=',
          barberId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          service_name: "Men's Haircut",
          service_price: '$18',
          service_image: 'https://i.ytimg.com/vi/QmtPlbxB7rA/maxresdefault.jpg',
          barberId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          service_name: "Kid's Haircut",
          service_price: '$12',
          service_image:
            'https://media.istockphoto.com/photos/year-old-getting-a-haircut-picture-id825461082?k=20&m=825461082&s=170667a&w=0&h=lO1Uq5xP_rq8zpP-etiewOIPAjp_KbxKmYXgfBB7qqk=',
          barberId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          service_name: "Men's Haircut",
          service_price: '$27',
          service_image:
            'https://d.newsweek.com/en/full/1579002/men-haircut.jpg?w=1600&h=1200&q=88&f=5c3cec3ce608c1e3fc4ca9e2902abe1a',
          barberId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          service_name: 'Haircut and Shave',
          service_price: '$37',
          service_image:
            'https://familyapp.com/wp-content/uploads/2021/07/10-beard-trimming-tips-how-to-groom-your-beard.jpg',
          barberId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          service_name: 'Hot Towel Shave',
          service_price: '$30',
          service_image:
            'https://images.squarespace-cdn.com/content/v1/56ba0bf0356fb05e0f02354d/1527587222183-HW1WXMKTPZJCOYRUS2S7/Henri_FEB18_Jesperpalermo-67.jpg?format=1000w',
          barberId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('services', null, {})
  }
}
