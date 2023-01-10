'use strict'

// specialRequest: '',
// inspoImage: '',
// appt_day: '',
// appt_date: '',
// appt_time: '',
// service: '',
// userId: ,
// barberId: ,
// createdAt: new Date(),
// updatedAt: new Date()

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'appointments',
      [
        {
          specialRequest: '',
          inspoImage:
            'https://therighthairstyles.com/wp-content/uploads/900x/designs-for-men/1-mens-line-haircut-with-long-top.jpg',
          appt_day: 'Sunday',
          appt_date: '2022-09-18',
          appt_time: '10:45',
          service: "Men's Haircut",
          userId: 1,
          barberId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          specialRequest: '',
          inspoImage:
            'https://i2.wp.com/therighthairstyles.com/wp-content/uploads/2021/09/1-the-ivy-league-mens-cut.jpg?resize=500%2C592',
          appt_day: 'Wednesday',
          appt_date: '2022-09-21',
          appt_time: '13:00',
          service: 'Haircut and Beard',
          userId: 2,
          barberId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          specialRequest: "don't want a tape",
          inspoImage: '',
          appt_day: 'Sunday',
          appt_date: '2022-09-11',
          appt_time: '11:30',
          service: 'Haircut and Shave',
          userId: 1,
          barberId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          specialRequest: '',
          inspoImage: '',
          appt_day: 'Tuesday',
          appt_date: '2022-09-13',
          appt_time: '14:00',
          service: "Men's Haircut",
          userId: 2,
          barberId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          specialRequest: 'leave my edges!',
          inspoImage:
            'http://cdn.shopify.com/s/files/1/2081/8453/files/mens_haircut_87d8e723-d180-4a3f-8603-db44227bf15e_large.jpg?v=1553194768',
          appt_day: 'Wednesday',
          appt_date: '2022-09-14',
          appt_time: '11:15',
          service: 'Hot Towel Shave',
          userId: 3,
          barberId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          specialRequest: 'make me look good',
          inspoImage: 'https://i.postimg.cc/sXk4hQkQ/8830286-512.png',
          appt_day: 'Sunday',
          appt_date: '2022-10-09',
          appt_time: '10:30',
          service: "Men's Haircut",
          userId: 3,
          barberId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          specialRequest: 'I have no edges!!!',
          inspoImage:
            'https://www.findhealthtips.com/wp-content/uploads/2022/06/2.webp',
          appt_day: 'Sunday',
          appt_date: '2022-09-18',
          appt_time: '09:30',
          service: "Men's Haircut",
          userId: 1,
          barberId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          specialRequest: 'shave everything off',
          inspoImage: 'https://i.postimg.cc/XJTPhKG4/8830286-512.png',
          appt_day: 'Wednesday',
          appt_date: '2022-09-21',
          appt_time: '01:45',
          service: "Senior's Haircut",
          userId: 1,
          barberId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          specialRequest: '',
          inspoImage: 'https://i.postimg.cc/sXk4hQkQ/8830286-512.png',
          appt_day: 'Tuesday',
          appt_date: '2022-09-20',
          appt_time: '12:15',
          service: "Senior's Haircut",
          userId: 3,
          barberId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          specialRequest: '',
          inspoImage: 'https://i.postimg.cc/sXk4hQkQ/8830286-512.png',
          appt_day: 'Tuesday',
          appt_date: '2022-09-20',
          appt_time: '12:15',
          service: "Kid's Haircut",
          userId: 3,
          barberId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('appointments', null, {})
  }
}
