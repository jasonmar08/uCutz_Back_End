const Router = require('express').Router()
const barberReviewController = require('../controllers/BarberReviewController')
const middleware = require('../middleware')

Router.get('/all', barberReviewController.getAllBarberReviews)
Router.get('/:review_id', barberReviewController.getBarberReviewById)
Router.post('/', barberReviewController.createBarberReview)
Router.put('/:review_id', barberReviewController.updateBarberReview)
Router.delete('/:review_id', barberReviewController.deleteBarberReview)

module.exports = Router
