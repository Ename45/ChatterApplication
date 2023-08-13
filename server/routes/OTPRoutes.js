const OTPController = require('../controller/OTPController')
const express = require('express')
const router = express.Router()


router.post('/send-otp', OTPController.requestOTP)
router.post('/verify-otp/:email', OTPController.verifyOTP)


module.exports = router