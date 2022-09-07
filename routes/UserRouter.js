const Router = require('express').Router()
const userController = require('../controllers/UserController')
// const middleware = require('../middleware')

Router.get('/all', userController.getAllUsers)
Router.get('/:user_id', userController.getUserById)
// Router.post('/create', userController.createNewUser)
Router.put('/:user_id', userController.updateUser)
Router.delete('/:user_id', userController.deleteUser)

module.exports = Router
