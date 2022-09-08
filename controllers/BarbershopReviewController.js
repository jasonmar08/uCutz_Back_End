const { BarbershopReview } = require('../models')

const getAllBarbershopReviews = async (req, res) => {
  try {
    let barbershopReviews = await BarbershopReview.findAll()
    res.send(barbershopReviews)
  } catch (error) {
    throw error
  }
}

const getBarbershopReviewById = async (req, res) => {
  try {
    let reviewId = parseInt(req.params.review_id)
    let barbershopReview = await BarbershopReview.findAll({
      where: { id: reviewId }
    })
    res.send(barbershopReview)
  } catch (error) {
    throw error
  }
}

const createBarbershopReview = async (req, res) => {
  try {
    const createdReview = await BarbershopReview.create({ ...req.body })
    res.send(createdReview)
  } catch (error) {
    throw error
  }
}

const updateBarbershopReview = async (req, res) => {
  try {
    let reviewId = parseInt(req.params.review_id)
    let updatedReview = await BarbershopReview.update(req.body, {
      where: { id: reviewId },
      returning: true
    })
    res.send(updatedReview)
  } catch (error) {
    throw error
  }
}

const deleteBarbershopReview = async (req, res) => {
  try {
    let reviewId = parseInt(req.params.review_id)
    await BarbershopReview.destroy({
      where: { id: reviewId }
    })
    res.send({ msg: `Deleted barbershop review with id of ${reviewId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllBarbershopReviews,
  getBarbershopReviewById,
  createBarbershopReview,
  updateBarbershopReview,
  deleteBarbershopReview
}
