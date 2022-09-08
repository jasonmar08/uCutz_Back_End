const Router = require('express').Router()
const barbershopController = require('../controllers/BarbershopController')
// const middleware = require('../middleware')

Router.get('/all', barbershopController.getAllBarbershops)
Router.get('/:barbershop_id', barbershopController.getBarbershopById)
Router.post('/', barbershopController.createNewBarbershop)
Router.put('/:barbershop_id', barbershopController.updateBarbershop)
Router.delete('/:barbershop_id', barbershopController.deleteBarbershop)

module.exports = Router
