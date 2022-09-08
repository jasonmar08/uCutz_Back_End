const Router = require('express').Router()
const authBarberController = require('../controllers/AuthBarberController')
const middleware = require('../middleware')

Router.post('/register', authBarberController.Register)
Router.post('/login', authBarberController.Login)

module.exports = Router
