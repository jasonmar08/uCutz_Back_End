const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const AuthRouter = require('./routes/AuthRouter')
const UserRouter = require('./routes/UserRouter')
// const BarberRouter = require('./routes/BarberRouter')
// const BarbershopRouter = require('./routes/BarbershopRouter')

const app = express()

const PORT = process.env.PORT || 3001

// MIDDLEWARE //
//middleware allows app not from same origin/source to access/save data from/to your server
app.use(cors())

//middleware logs request to your node terminal
app.use(logger('dev'))

//middleware allows your server to read a plain json data
app.use(express.json())

//middleware allows your server to read url encoded/with file form data
app.use(express.urlencoded({ extended: true }))

// ROUTES //
app.use('/auth', AuthRouter)
app.use('/users', UserRouter)
// app.use('/barbershops', BarbershopRouter)
// app.use('/barbers', BarberRouter)

// Base route to test server: //
app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
