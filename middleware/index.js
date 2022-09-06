const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
const APP_SECRET = process.env.APP_SECRET

// Password hashing function //
// (using async/await because hashing process takes some time to complete so we need to tell JS to wait for it to finish)
const hashPassword = async (password) => {
  // Accepts a password from the request body
  let hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
  // Creates a hashed password and encrypts it 12 times
  return hashedPassword
}

// Password comparing function //
const comparePassword = async (storedPassword, password) => {
  // Accepts the password provided in the login request and the currently stored password
  // Compares the two passwords for a match
  let passwordMatch = await bcrypt.compare(password, storedPassword)
  // returns true if the passwords match
  // returns false if the passwords are not a match
  return passwordMatch
}

// Create JWT token function //
const createToken = (payload) => {
  // Accepts a payload with which to create the token
  let token = jwt.sign(payload, APP_SECRET)
  // Generates the token and encrypts it, returns the token when the process finishes
  return token
}

// JWT token verification function //
const verifyToken = (req, res, next) => {
  const { token } = res.locals
  try {
    let payload = jwt.verify(token, APP_SECRET)
    if (payload) {
      return next()
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  }
}

// Strip JWT token function //
const stripToken = (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1]
    if (token) {
      res.locals.token = token
      return next()
    }
  } catch (error) {
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  }
}

module.exports = {
  hashPassword,
  comparePassword,
  createToken,
  verifyToken,
  stripToken
}
