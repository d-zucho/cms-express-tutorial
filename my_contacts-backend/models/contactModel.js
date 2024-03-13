const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // ref is the reference to the User model. This is used to create a relationship between the Contact and User models
      required: [true, 'User is required'],
    },
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
