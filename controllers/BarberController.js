const { Barber, Appointment, Service } = require('../models')

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

const getAllServices = async (req, res) => {
  try {
    let services = await Service.findAll()
    res.send(services)
  } catch (error) {
    throw error
  }
}

const getBarberServices = async (req, res) => {
  try {
    let barberId = parseInt(req.params.barber_id)
    let barberServices = await Service.findAll({
      where: { barberId: barberId }
    })
    res.send(barberServices)
  } catch (error) {
    throw error
  }
}

const createNewService = async (req, res) => {
  try {
    let newService = await Service.create({ ...req.body })
    res.send(newService)
  } catch (error) {
    throw error
  }
}

const updateService = async (req, res) => {
  try {
    let serviceId = parseInt(req.params.service_id)
    let updatedService = await Service.update(req.body, {
      where: { id: serviceId },
      returning: true
    })
    res.send(updatedService)
  } catch (error) {
    throw error
  }
}

const deleteService = async (req, res) => {
  try {
    let serviceId = parseInt(req.params.service_id)
    await Service.destroy({
      where: { id: serviceId }
    })
    res.send({ msg: `Deleted barber service with id of ${serviceId}` })
  } catch (error) {
    throw error
  }
}

const getBarberAppointments = async (req, res) => {
  try {
    let barberId = parseInt(req.params.barber_id)
    let barberAppointments = await Appointment.findAll({
      where: { barberId: barberId }
    })
    res.send(barberAppointments)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllBarbers,
  getBarberById,
  // createNewBarber,
  updateBarber,
  deleteBarber,
  getAllServices,
  getBarberServices,
  createNewService,
  updateService,
  deleteService,
  getBarberAppointments
}
