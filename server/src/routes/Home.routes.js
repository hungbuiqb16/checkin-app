const express = require('express')
const router = express.Router()
const homeController = require('../controllers/frontend/Home.controller')


router.get('/', homeController.index)

module.exports = router