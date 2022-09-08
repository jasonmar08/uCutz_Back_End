const Router = require('express').Router()
const barberReviewController = require('../controllers/BarberReviewController')
const middleware = require('../middleware')

Router.get('/all', barberReviewController.getAllBarberReviews)
Router.get('/:review_id', barberReviewController.getBarberReviewById)
Router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  barberReviewController.createBarberReview
)
Router.put(
  '/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  barberReviewController.updateBarberReview
)
Router.delete(
  '/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  barberReviewController.deleteBarberReview
)

module.exports = Router
