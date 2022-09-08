const { BarberReview } = require('../models')

const getAllBarberReviews = async (req, res) => {
  try {
    const barberReviews = await BarberReview.findAll()
    res.send(barberReviews)
  } catch (error) {
    throw error
  }
}

const getBarberReviewById = async (req, res) => {
  try {
    let reviewId = parseInt(req.params.review_id)
    let barberReview = await BarberReview.findAll({
      where: { id: reviewId }
    })
    res.send(barberReview)
  } catch (error) {
    throw error
  }
}

const createBarberReview = async (req, res) => {
  try {
    const createdReview = await BarberReview.create({ ...req.body })
    res.send(createdReview)
  } catch (error) {
    throw error
  }
}

const updateBarberReview = async (req, res) => {
  try {
    let reviewId = parseInt(req.params.review_id)
    let updatedReview = await BarberReview.update(req.body, {
      where: { id: reviewId },
      returning: true
    })
    res.send(updatedReview)
  } catch (error) {
    throw error
  }
}

const deleteBarberReview = async (req, res) => {
  try {
    let reviewId = parseInt(req.params.review_id)
    await BarberReview.destroy({
      where: { id: reviewId }
    })
    res.send({ msg: `Deleted barber review with id of ${reviewId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllBarberReviews,
  getBarberReviewById,
  createBarberReview,
  updateBarberReview,
  deleteBarberReview
}
