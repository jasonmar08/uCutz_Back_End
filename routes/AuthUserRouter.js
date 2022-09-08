const Router = require('express').Router()
const authUserController = require('../controllers/AuthUserController')
const middleware = require('../middleware')

Router.post('/register', authUserController.Register)
Router.post('/login', authUserController.Login)
Router.put(
  '/update',
  middleware.stripToken,
  middleware.verifyToken,
  authUserController.UpdatePassword
)

module.exports = Router
