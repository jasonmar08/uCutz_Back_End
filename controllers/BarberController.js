const { Barber } = require('../models')

const getAllBarbers = async (req, res) => {
  try {
    const barbers = await Barber.findAll()
    res.send(barbers)
  } catch (error) {
    throw error
  }
}

const getBarberById = async (req, res) => {
  try {
    let barberId = parseInt(req.params.barber_id)
    let barber = await Barber.findAll({
      where: { id: barberId }
    })
    res.send(barber)
  } catch (error) {
    throw error
  }
}

// const createNewBarber = async (req, res) => {
//   try {
//     let body = { ...req.body }
//     let newBarber = await Barber.create(body)
//     res.send(newBarber)
//   } catch (error) {
//     throw error
//   }
// }

const updateBarber = async (req, res) => {
  try {
    let barberId = parseInt(req.params.barber_id)
    let updatedBarber = await Barber.update(req.body, {
      where: { id: barberId },
      returning: true
    })
    res.send(updatedBarber)
  } catch (error) {
    throw error
  }
}

const deleteBarber = async (req, res) => {
  try {
    let barberId = parseInt(req.params.barber_id)
    await Barber.destroy({
      where: { id: barberId }
    })
    res.send({ msg: `Deleted barber with id of ${barberId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllBarbers,
  getBarberById,
  // createNewBarber,
  updateBarber,
  deleteBarber
}
