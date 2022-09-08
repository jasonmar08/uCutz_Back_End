const Router = require('express').Router()
const barberController = require('../controllers/BarberController')
// const middleware = require('../middleware')

Router.get('/all', barberController.getAllBarbers)
Router.get('/:barber_id', barberController.getBarberById)
// Router.post('/', barberController.createNewBarber)
Router.put('/:barber_id', barberController.updateBarber)
Router.delete('/:barber_id', barberController.deleteBarber)

module.exports = Router
