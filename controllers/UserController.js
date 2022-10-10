const { User, Appointment } = require('../models')

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const getUserById = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let user = await User.findOne({
      where: { id: userId }
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const getUserFromToken = async (req, res) => {
  try {
    let userId = parseInt(req.idFromToken)
    let user = await User.findOne({
      where: { id: userId }
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

// const createNewUser = async (req, res) => {
//   try {
//     let body = { ...req.body }
//     let newUser = await User.create(body)
//     res.send(newUser)
//   } catch (error) {
//     throw error
//   }
// }

const updateUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let updatedUser = await User.update(req.body, {
      where: { id: userId },
      returning: true
    })

    console.log('UPDAT ', updatedUser)

    res.send(updatedUser)
  } catch (error) {
    throw error
  }
}

const deleteUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    await User.destroy({
      where: { id: userId }
    })
    res.send({ msg: `Deleted user with id of ${userId}` })
  } catch (error) {
    throw error
  }
}

const getAllAppointments = async (req, res) => {
  try {
    let appointments = await Appointment.findAll()
    res.send(appointments)
  } catch (error) {
    throw error
  }
}

const getAppointmentsByUserId = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let userAppointments = await Appointment.findAll({
      where: { userId: userId },
      order: [
        ['appt_date', 'ASC'],
        ['appt_time', 'ASC']
      ]
    })
    res.send(userAppointments)
  } catch (error) {
    throw error
  }
}

const createNewAppointment = async (req, res) => {
  console.log('REQ BODY', req.body)
  try {
    let newAppointment = await Appointment.create({ ...req.body })
    res.send(newAppointment)
  } catch (error) {
    throw error
  }
}

const updateAppointment = async (req, res) => {
  try {
    let apptId = parseInt(req.params.appt_id)
    let updatedAppointment = await Appointment.update(req.body, {
      where: { id: apptId },
      returning: true
    })
    res.send(updatedAppointment)
  } catch (error) {
    throw error
  }
}

const deleteAppointment = async (req, res) => {
  try {
    let apptId = parseInt(req.params.appt_id)
    await Appointment.destroy({
      where: { id: apptId }
    })
    res.send({ msg: `Deleted appointment with id of ${apptId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserFromToken,
  // createNewUser,
  updateUser,
  deleteUser,
  getAllAppointments,
  getAppointmentsByUserId,
  createNewAppointment,
  updateAppointment,
  deleteAppointment
}
