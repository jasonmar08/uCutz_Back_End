const { Barbershop, Barber } = require('../models')

const getAllBarbershops = async (req, res) => {
  try {
    const barbershops = await Barbershop.findAll()
    res.send(barbershops)
  } catch (error) {
    throw error
  }
}

const getBarbershopById = async (req, res) => {
  try {
    let barbershopId = parseInt(req.params.barbershop_id)
    let barbers = await Barber.findAll({
      where: { barbershopId: barbershopId },
      attributes: ['id', 'firstName', 'email']
    })
    // let barbersList = {
    //   id: barbers.id,
    //   name: barbers.firstName,
    //   email: barbers.email
    // }
    let barbershop = await Barbershop.findAll({
      where: { id: barbershopId }
    })
    res.send({ barbershop, barbers: barbers })
  } catch (error) {
    throw error
  }
}

const createNewBarbershop = async (req, res) => {
  try {
    let body = { ...req.body }
    let newBarbershop = await Barbershop.create(body)
    res.send(newBarbershop)
  } catch (error) {
    throw error
  }
}

const updateBarbershop = async (req, res) => {
  try {
    let barbershopId = parseInt(req.params.barbershop_id)
    let updatedBarbershop = await Barbershop.update(req.body, {
      where: { id: barbershopId },
      returning: true
    })
    res.send(updatedBarbershop)
  } catch (error) {
    throw error
  }
}

const deleteBarbershop = async (req, res) => {
  try {
    let barbershopId = parseInt(req.params.barbershop_id)
    await Barbershop.destroy({
      where: { id: barbershopId }
    })
    res.send({ msg: `Deleted barbershop with id of ${barbershopId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllBarbershops,
  getBarbershopById,
  createNewBarbershop,
  updateBarbershop,
  deleteBarbershop
}
