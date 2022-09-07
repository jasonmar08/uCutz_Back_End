'use strict'

// specialRequest: '',
// inspoImage: '',
// appt_day: '',
// appt_date: '',
// appt_time: '',
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
          userId: 2,
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
