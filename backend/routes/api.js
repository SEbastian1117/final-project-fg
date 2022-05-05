const express = require('express')
const router = express.Router()
const pet = require('./pet')
const auth = require('./auth')

router.use('/pets', pet)
router.use('/auth', auth)


module.exports = router