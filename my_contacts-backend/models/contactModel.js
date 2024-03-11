const mongoose = require('mongoose')

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    phone: {
      type: String,
      required: [true, 'Phone is required'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Contact', contactSchema) // This is the model that we will use to interact with the database. It will be used in the controller to perform CRUD operations
