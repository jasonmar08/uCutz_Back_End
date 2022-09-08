const Router = require('express').Router()
const barbershopReviewController = require('../controllers/BarbershopReviewController')
const middleware = require('../middleware')

Router.get('/all', barbershopReviewController.getAllBarbershopReviews)
Router.get('/:review_id', barbershopReviewController.getBarbershopReviewById)
Router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  barbershopReviewController.createBarbershopReview
)
Router.put(
  '/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  barbershopReviewController.updateBarbershopReview
)
Router.delete(
  '/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  barbershopReviewController.deleteBarbershopReview
)

module.exports = Router
