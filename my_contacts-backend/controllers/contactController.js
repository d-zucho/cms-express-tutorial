const Contact = require('../models/contactModel')

const asyncHandler = require('express-async-handler')
// @desc Get all contacts
// @route GET /api/contacts
// @access Public
const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find()
  res.status(200).json(contacts)
})

// @desc Get individual contact
// @route GET /api/contacts/:id
// @access Public
const getSingleContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  if (!contact) {
    res.status(404).json({ message: 'Contact not found' })
    throw new Error('Contact not found')
  }
  res.status(200).json(contact)
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
  const contact = await Contact.create({
    name,
    email,
    phone,
  })
  res.status(201).json(contact)
})

// @desc Update contact
// @route PUT /api/contacts/:id
// @access Public
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  if (!contact) {
    res.status(404).json({ message: 'Contact not found' })
    throw new Error('Contact not found')
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )

  res.status(200).json(updatedContact)
})

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access Public
const deleteContact = asyncHandler(async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id)
    res.status(200).json(contact)
  } catch (error) {
    res.status(404).json({ message: 'Contact not found' })
    throw new Error('Contact not found')
  }
})

module.exports = {
  getContact,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact,
}
