const Router = require('express').Router()
const barbershopReviewController = require('../controllers/BarbershopReviewController')
// const middleware = require('../middleware')

Router.get('/all', barbershopReviewController.getAllBarbershopReviews)
Router.get('/:review_id', barbershopReviewController.getBarbershopReviewById)
Router.post('/', barbershopReviewController.createBarbershopReview)
Router.put('/:review_id', barbershopReviewController.updateBarbershopReview)
Router.delete('/:review_id', barbershopReviewController.deleteBarbershopReview)

module.exports = Router
