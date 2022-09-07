const Router = require('express').Router()
const authController = require('../controllers/AuthController')
// const middleware = require('../middleware')

Router.post('/register', authController.Register)
Router.post('/login', authController.Login)

module.exports = Router
