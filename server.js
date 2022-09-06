const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const app = express()

const AppRouter = require('./routes/AppRouter')

const PORT = process.env.PORT || 3001

// middleware //
//middleware allows app not from same origin/source to access/save data from/to your server
app.use(cors())

//middleware logs request to your node terminal
app.use(logger('dev'))

//middleware allows your server to read a plain json data
app.use(express.json())

//middleware allows your server to read url encoded/with file form data
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use('/api', AppRouter)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
