const { Barber } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    const barber = await Barber.findOne({
      where: { email: req.body.email },
      raw: true
    })
    if (
      barber &&
      (await middleware.comparePassword(
        barber.passwordDigest,
        req.body.password
      ))
    ) {
      let payload = {
        id: barber.id,
        firstName: barber.firstName,
        email: barber.email
      }
      let token = middleware.createToken(payload)
      return res.send({ barber: payload, token })
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
      phoneNumber,
      mobile,
      barber_image,
      fb_link,
      ig_link,
      barbershopId
    } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const newBarber = await Barber.create({
      firstName,
      lastName,
      email,
      passwordDigest,
      city,
      state,
      zip_code,
      phoneNumber,
      mobile,
      barber_image,
      fb_link,
      ig_link,
      barbershopId,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    res.send(newBarber)
  } catch (error) {
    throw error
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Login,
  Register,
  CheckSession
}
