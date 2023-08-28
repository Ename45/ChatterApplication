const GetJwtToken = require('../helpers/GetJwtToken')


const generateOTP = () => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};

const cookieToken = async(foundUser, res) => {
  tokenData = {userId: foundUser.id, email: foundUser.email}

  const token = await GetJwtToken.getJwtToken(tokenData)

  const options = {
    expires: new Date(Date.now() + 1 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true
    // maxAge: 1000000,
    // signed: true
  }

  foundUser.password = undefined;

  res.status(200).cookie('token', token, options)

  return{
    token: token,
    expires: options.expires,
    data: foundUser
  }
}

// const cookieToken = (user, res) => {
//   // console.log(user)
//   const token = getJwtToken(user.id)
//   const options = {
//     expires: new Date(
//       Date.now() + 1 * 60 * 60 * 1000
//     ),
//     httpOnly: true
//   }
//   user.password = undefined;
//   res.status(200).cookie('token', token, options).json({ 
//     success: true,
//     token,
//     user
//   })
// }



module.exports = {
  cookieToken,
  generateOTP
};