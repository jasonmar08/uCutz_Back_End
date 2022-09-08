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

module.exports = Router
