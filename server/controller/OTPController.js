const OtpService = require('../services/OTPService')


const requestOTP = async(req, res) => {
  try {
    const otp = await OtpService.requestOTP(req.body)
    return otp
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}


const verifyOTP = async(req, res) => {
  try {
    const { email } = req.params;
    const { otp } = req.body;
    const verifiedOTP = await OtpService.verifyOTP({email, otp})
    return verifiedOTP
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}




module.exports = {
  requestOTP,
  verifyOTP
}