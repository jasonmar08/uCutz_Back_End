const { User } = require('../models')

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
    let user = await User.findAll({
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

module.exports = {
  getAllUsers,
  getUserById,
  // createNewUser,
  updateUser,
  deleteUser
}
