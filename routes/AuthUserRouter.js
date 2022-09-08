const Router = require('express').Router()
const authUserController = require('../controllers/AuthUserController')
const middleware = require('../middleware')

Router.post('/register', authUserController.Register)
Router.post('/login', authUserController.Login)

module.exports = Router
