const Router = require('express').Router()
const barberController = require('../controllers/BarberController')
const middleware = require('../middleware')

Router.get('/all', barberController.getAllBarbers)
Router.get(
  '/:barber_id',
  middleware.stripToken,
  middleware.verifyToken,
  barberController.getBarberById
)
// Router.post('/', barberController.createNewBarber)
Router.put(
  '/:barber_id',
  middleware.stripToken,
  middleware.verifyToken,
  barberController.updateBarber
)
Router.delete(
  '/:barber_id',
  middleware.stripToken,
  middleware.verifyToken,
  barberController.deleteBarber
)
Router.get('/appointments/:barber_id', barberController.getBarberAppointments)
Router.get('/services/all', barberController.getAllServices)
Router.get('/services/:barber_id', barberController.getBarberServices)
Router.post('/services', barberController.createNewService)
Router.put('/services/:service_id', barberController.updateService)
Router.delete('/services/:service_id', barberController.deleteService)

module.exports = Router
