// @desc Get all contacts
// @route GET /api/contacts
// @access Public
const getContact = (req, res) => {
  res.status(200).json({ message: 'Get all contacts' })
}

// @desc Get individual contact
// @route GET /api/contacts/:id
// @access Public
const getSingleContact = (req, res) => {
  res
    .status(201)
    .json({ message: `Get specific Contact with id ${req.params.id}` })
}

// @desc Create New contact
// @route POST /api/contacts
// @access Public
const createContact = (req, res) => {
  res.status(201).json({ message: 'Create new Contact' })
}

// @desc Update contact
// @route PUT /api/contacts/:id
// @access Public
const updateContact = (req, res) => {
  res
    .status(201)
    .json({ message: `Update specific Contact with id ${req.params.id}` })
}

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access Public
const deleteContact = (req, res) => {
  res
    .status(201)
    .json({ message: `Delete specific Contact with id ${req.params.id}` })
}

module.exports = {
  getContact,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact,
}
