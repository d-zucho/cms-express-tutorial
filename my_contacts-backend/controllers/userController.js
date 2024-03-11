const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
// @desc Register a new user
// @route POST /api/users/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body

  if (!username || !email || !password) {
    res.status(400)
    throw new Error('Please fill in all fields')
  }

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10)
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  })
  console.log('Hashed password: ', hashedPassword)

  console.log('User created')
  if (user) {
    res
      .status(201)
      .json({ _id: user.id, username: user.username, email: user.email })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc User Login
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    res.status(400)
    throw new Error('Please fill in all fields')
  }

  const user = await User.findOne({ email })
  // compare password with hashed password
  // password is from the request body and user.password is from the database
  if (user && (await bcrypt.compare(password, user.password))) {
    // if match, create a token
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1m' }
    )
    res.status(200).json({ accessToken })
  } else {
    // if not match, throw an error
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// @desc Get current user info
// @route GET /api/users/current
// @access PRIVATE
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Current User' })
})

module.exports = { registerUser, loginUser, currentUser }
