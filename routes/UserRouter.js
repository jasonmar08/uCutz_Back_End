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
Router.get(
  '/appointments/all',
  middleware.stripToken,
  middleware.verifyToken,
  userController.getAllAppointments
)
Router.get(
  '/appointments/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  userController.getAppointmentsByUserId
)
Router.post(
  '/appointments/',
  middleware.stripToken,
  middleware.verifyToken,
  userController.createNewAppointment
)
Router.put(
  '/appointments/:appt_id',
  middleware.stripToken,
  middleware.verifyToken,
  userController.updateAppointment
)
Router.delete(
  '/appointments/:appt_id',
  middleware.stripToken,
  middleware.verifyToken,
  userController.deleteAppointment
)

module.exports = Router
