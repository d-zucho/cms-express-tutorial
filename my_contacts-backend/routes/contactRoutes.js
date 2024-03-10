const express = require('express')
const router = express.Router()
const {
  getContact,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact,
} = require('../controllers/contactController')

// router.route('/').get((req, res) => {
//   res.json({ message: 'Get all contacts' })
// })
// router.route vs router.get - the difference is that router.route allows us to define multiple routes for the same route path

// Because of the controller, we cann remove the logic from the route and just call the controller function
router.route('/').get(getContact)

router.route('/:id').get(getSingleContact)

router.route('/').post(createContact)

router.route('/:id').put(updateContact)

router.route('/:id').delete(deleteContact)

module.exports = router
