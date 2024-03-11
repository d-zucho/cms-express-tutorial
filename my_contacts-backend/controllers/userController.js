const asyncHandler = require('express-async-handler')

// @desc Register a new user
// @route POST /api/users/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Registered user' })
})

// @desc User Login
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Logged in' })
})

// @desc Get current user info
// @route GET /api/users/current
// @access PRIVATE
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Current User' })
})

module.exports = { registerUser, loginUser, currentUser }
