const express = require('express')
const dotenv = require('dotenv').config()

const app = express()

const port = process.env.PORT || 5001

// app.use is a method that allows us to use middleware which is a function that has access to the request and response objects.
app.use('/api/contacts', require('./routes/contactRoutes'))

app.listen(port, () => {
  console.log('Server is running on port: ', port)
})
