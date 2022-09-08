const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      raw: true
    })
    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: user.id,
        firstName: user.firstName,
        email: user.email
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
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
