const express = require('express')
const router = express.Router()

router.use(express.json())

//All routes
router.use('/auth', require('./authRoutes'))
router.use('/quote', require('./quoteRoutes'))
router.use('/user', require('./userRoutes'))

module.exports = router