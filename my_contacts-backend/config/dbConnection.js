const mongoose = require('mongoose')

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL)
    console.log(
      'MongoDB connected: ',
      connect.connection.host,
      connect.connection.name
    )
    console.log('Connected to the database')
  } catch (error) {
    console.log('Error: ', error)
    process.exit(1)
  }
}

module.exports = connectDb
