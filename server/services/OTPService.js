const OTPRepository = require('../repositories/OTPRepository')


const requestOTP = async(request) => {
  const { email, subject, message, duration } = request;

  if (!(email && message && subject && duration)) {
    throw new Error('all fields are required');
  }

  const otpDetails = {
    email,
    subject,
    message,
    duration,
  };

  const sentOTP = await OTPRepository.sendOTP(otpDetails)

  if (!sentOTP) {
    throw new Error('problem creating otp')
  }

  return {
    message: sentOTP.message
  }
}

const saveToken = async( token, foundUser ) => {
  try {
    if (!(token && foundUser)) {
      throw new Error("token or user missing");
    }

    await OTPRepository.createTokenInDb(token, foundUser)

    return {
      message: 'Token saved'
    }
    
  } catch (error) {
    throw error
  }
}


const verifyOTP = async({ email, otp }) => {
  if (!(email && otp)) {
    throw new Error('check that otp and email are provided')
  }
  
  const isValidUser = await OTPRepository.verifyUserEmailWithPin({ email, otp })

  return {
    message: isValidUser.message
  }

}


module.exports = {
  requestOTP,
  verifyOTP,
  saveToken
}