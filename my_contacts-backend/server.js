const express = require('express')
const errorHandler = require('./middleware/errorHandler')
const connectDb = require('./config/dbConnection')
const dotenv = require('dotenv').config()

connectDb()
const app = express()

const port = process.env.PORT || 5001

// app.use is a method that allows us to use middleware which is a function that has access to the request and response objects.
app.use(express.json()) // This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
app.use('/api/contacts', require('./routes/contactRoutes'))
app.use(errorHandler)

app.listen(port, () => {
  console.log('Server is running on port: ', port)
})
