const Router = require('express').Router()
const barbershopController = require('../controllers/BarbershopController')
const middleware = require('../middleware')

Router.get('/all', barbershopController.getAllBarbershops)
Router.get(
  '/:barbershop_id',
  middleware.stripToken,
  middleware.verifyToken,
  barbershopController.getBarbershopById
)
Router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  barbershopController.createNewBarbershop
)
Router.put(
  '/:barbershop_id',
  middleware.stripToken,
  middleware.verifyToken,
  barbershopController.updateBarbershop
)
Router.delete(
  '/:barbershop_id',
  middleware.stripToken,
  middleware.verifyToken,
  barbershopController.deleteBarbershop
)

module.exports = Router
