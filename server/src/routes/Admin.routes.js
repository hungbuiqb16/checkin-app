const express = require('express')
const router = express.Router()

const userController = require('../controllers/backend/User.controller')
const dashboardController = require('../controllers/backend/Dashboard.controller')

router.get('/admin/', dashboardController.index)
router.get('/admin/users', userController.index)
router.get('/admin/users/create', userController.create)
router.post('/admin/users/store', userController.store)

module.exports = router