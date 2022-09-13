const {
  Barber,
  Appointment,
  Service,
  AvailabilityDate,
  AvailabilityTime
} = require('../models')

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

const getServicesByBarberId = async (req, res) => {
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

const getAppointmentsByBarberId = async (req, res) => {
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

const getAllAvailabilityDates = async (req, res) => {
  try {
    let availabilityDates = await AvailabilityDate.findAll()
    res.send(availabilityDates)
  } catch (error) {
    throw error
  }
}

const getAllAvailabilityTimes = async (req, res) => {
  try {
    let availabilityTimes = await AvailabilityTime.findAll()
    res.send(availabilityTimes)
  } catch (error) {
    throw error
  }
}

const getAvailabilityDates = async (req, res) => {
  try {
    let barberId = parseInt(req.params.barber_id)
    let availabilityDates = await AvailabilityDate.findAll({
      where: { barberId }
    })
    let test = await AvailabilityDate.findAll({
      include: [
        {
          model: AvailabilityTime,
          required: true
        }
      ],
      where: { barberId }
    })
    res.send(test)
  } catch (error) {
    throw error
  }
}

const getAvailabilityTimes = async (req, res) => {
  try {
    let dateId = parseInt(req.params.date_id)
    let availabilityTimes = await AvailabilityTime.findAll({
      where: { dateId: dateId }
    })
    res.send(availabilityTimes)
  } catch (error) {
    throw error
  }
}

const createNewAvailabilityDate = async (req, res) => {
  try {
    let newAvailabilityDate = await AvailabilityDate.create({ ...req.body })
    res.send(newAvailabilityDate)
  } catch (error) {
    throw error
  }
}

const createNewAvailabilityTime = async (req, res) => {
  try {
    let newAvailabilityTime = await AvailabilityTime.create({ ...req.body })
    res.send(newAvailabilityTime)
  } catch (error) {
    throw error
  }
}

const deleteAvailabilityDate = async (req, res) => {
  try {
    let dateId = parseInt(req.params.date_id)
    await AvailabilityDate.destroy({
      where: { id: dateId }
    })
    res.send({
      msg: `Deleted availability date with id of ${dateId} and all of its associated availability times`
    })
  } catch (error) {
    throw error
  }
}

const deleteAvailabilityTime = async (req, res) => {
  try {
    let timeId = parseInt(req.params.time_id)
    await AvailabilityTime.destroy({
      where: { id: timeId }
    })
    res.send({ msg: `Deleted availability time with id of ${timeId}` })
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
  getServicesByBarberId,
  createNewService,
  updateService,
  deleteService,
  getAppointmentsByBarberId,
  getAllAvailabilityDates,
  getAllAvailabilityTimes,
  getAvailabilityDates,
  getAvailabilityTimes,
  createNewAvailabilityDate,
  createNewAvailabilityTime,
  deleteAvailabilityDate,
  deleteAvailabilityTime
}
