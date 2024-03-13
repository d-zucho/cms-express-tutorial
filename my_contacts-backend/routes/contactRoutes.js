const express = require('express')
const router = express.Router()
const {
  getContact,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact,
} = require('../controllers/contactController')
const validateToken = require('../middleware/validateTokenHandler')

// router.route('/').get((req, res) => {
//   res.json({ message: 'Get all contacts' })
// })
// router.route vs router.get - the difference is that router.route allows us to define multiple routes for the same route path

// Because of the controller, we cann remove the logic from the route and just call the controller function
// router.route('/').get(getContact)
// router.route('/:id').get(getSingleContact)
// router.route('/').post(createContact)
// router.route('/:id').put(updateContact)
// router.route('/:id').delete(deleteContact)

//* We can combine the routes if they have same route path:
// at route '/' we can use get and post
router.use(validateToken) // this will make sure that the user is authenticated before they can access the routes
router.route('/').get(getContact).post(createContact)

// at route '/:id' we can use get, put and delete
router
  .route('/:id')
  .get(getSingleContact)
  .put(updateContact)
  .delete(deleteContact)

module.exports = router
