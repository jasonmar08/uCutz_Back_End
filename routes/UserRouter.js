const Router = require('express').Router()
const userController = require('../controllers/UserController')
const middleware = require('../middleware')

Router.get('/all', userController.getAllUsers)
Router.get(
  '/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  userController.getUserById
)
// Router.post('/create', userController.createNewUser)
Router.put(
  '/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  userController.updateUser
)
Router.delete(
  '/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  userController.deleteUser
)
Router.get('/appointments/all', userController.getAllAppointments)
Router.get('/appointments/:user_id', userController.getUserAppointments)
Router.post('/appointments/', userController.createNewAppointment)
Router.put('/appointments/:appt_id', userController.updateAppointment)
Router.delete('/appointments/:appt_id', userController.deleteAppointment)

module.exports = Router
