const asyncHandler = require('express-async-handler')
// @desc Get all contacts
// @route GET /api/contacts
// @access Public
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get all contacts' })
})

// @desc Get individual contact
// @route GET /api/contacts/:id
// @access Public
const getSingleContact = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Get specific Contact with id ${req.params.id}` })
})

// @desc Create New contact
// @route POST /api/contacts
// @access Public
const createContact = asyncHandler(async (req, res) => {
  console.log('req.body: ', req.body)

  const { name, email, phone } = req.body
  if (!name || !email || !phone) {
    res.status(400).json({ message: 'Please enter all fields' })
    throw new Error('Please enter all fields')
  }
  res.status(201).json({ message: 'Create New Contact' })
})

// @desc Update contact
// @route PUT /api/contacts/:id
// @access Public
const updateContact = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Update specific Contact with id ${req.params.id}` })
})

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access Public
const deleteContact = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Delete specific Contact with id ${req.params.id}` })
})

module.exports = {
  getContact,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact,
}
