const UserRepository = require('../repositories/UserRepository')
const validator = require('validator')
const OtpService = require('../services/OTPService')
const HashData = require('../utils/HashData')
const Cookie = require('../utils/Tokens')


const register = async(request) => {
  let { firstName, lastName, profession, email, password } = request;

  let { confirmPassword } = request;

  checkAllFieldsProvided(firstName, lastName, profession, email, password, confirmPassword);

  firstName = firstName.trim();
  lastName = lastName.trim();
  profession = profession.trim();
  email = email.trim();
  password = password.trim();
  confirmPassword = confirmPassword.trim();


  await validateEmail(email);

  await validatePassword(password);

  if (password !== confirmPassword) {
    throw new Error("Passwords don't match");
  }

  await checkIfUserAlreadyRegistered(email);

  const newUser = await createNewUser(firstName, lastName, profession, email, password);

  const otpMessage = await sendOTP(email);

  return registerResponse(newUser, otpMessage);
}


const codeConfirmation = async({email, otp}) => {
  // const { email, otp } = request

  const verifiedOTP = await OtpService.verifyOTP({ email, otp })

  return {
    message: verifiedOTP.message
  }
}


const login = async(request) => {
  const { email, password } = request

  if (!(email && password)) {
    throw new Error('All fields required')
  }

  await validateEmail(email)

  const foundUser = await UserRepository.findUserByEmail(email)

  const isPasswordMatch = await HashData.verifyHashedData(password, foundUser.password)

  if (!(isPasswordMatch)) {
    throw new Error('Incorrect password')
  }

  if (!(foundUser.isVerified)) {
    throw new Error('This account is not verified, check your email for the OTP sent')
  }

  const sessionToken = await Cookie.cookieToken(foundUser, email);

  const saveToken = await OtpService.saveToken( sessionToken, foundUser )

  return {
    message: "User logged in",
    token: sessionToken.token,
    tokenExpiry: sessionToken.expires,
    userData: sessionToken.data
  }
}



module.exports = {
  register,
  codeConfirmation,
  login
}




function registerResponse(newUser, otpMessage) {
  const response = {
    id: newUser.data.id,
    firstName: newUser.data.firstName,
    lastName: newUser.data.lastName,
    profession: newUser.data.profession,
    email: newUser.data.email,
    isVerified: newUser.data.isVerified,
    profileImage: newUser.data.profileImage
  };
  return {
    data: response,
    message: newUser.message,
    otpMessage: otpMessage.message
  };
}

async function createNewUser(firstName, lastName, profession, email, password) {
  const userData = {
    firstName,
    lastName,
    profession,
    email,
    password,
  };

  const newUser = await UserRepository.createUser(userData);
  return newUser;
}

async function checkIfUserAlreadyRegistered(email) {
  const existingUser = await UserRepository.findUserByEmail(email);
  if (existingUser) {
    throw new Error("User with this email already exists");
  }
}


async function validatePassword (password) {
  const options = {
    minLength: 5,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    returnScore: false,
  };

  const isStrongPassword = await validator.isStrongPassword(password, options)

  if (!(isStrongPassword)) {
    throw new Error("Password must have at least 5 characters, one uppercase and lowercase letter, one number and one symbol");
  }
}

async function validateEmail(email) {
  const isEmail = await validator.isEmail(email);
  if (!isEmail) {
    throw new Error("Invalid email address");
  }
}

function checkAllFieldsProvided(firstName, lastName, profession, email, password, confirmPassword) {
  if (!(firstName && lastName && profession && email && password && confirmPassword)) {
    throw new Error("All fields are required");
  }
}

async function sendOTP(email) {
  const otpDetails = {
    email,
    subject: "Email Verification",
    message: "Verify you mail with the code below.",
    duration: 1,
  };

  const otpMessage = await OtpService.requestOTP(otpDetails);
  return otpMessage;
}