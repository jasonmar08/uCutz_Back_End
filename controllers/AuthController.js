const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    // const { email, password, name } = req.body
    let {
      firstName,
      lastName,
      email,
      password,
      city,
      state,
      zip_code,
      user_image
    } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      passwordDigest,
      city,
      state,
      zip_code,
      user_image,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    res.send(newUser)
  } catch (error) {
    throw error
  }
}

module.exports = {
  Login,
  Register
}
