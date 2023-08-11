const getJwtToken = require('../helpers/GetJwtToken')


const generateOTP = () => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};

const cookieToken = async(foundUser, email) => {
  tokenData = {userId: foundUser.id, email}

  const token = await getJwtToken(tokenData)

  const options = {
    expires: new Date(Date.now() + 1 * 60 * 60 * 1000),
    httpOnly: true
  }

  foundUser.password = undefined;

  return{
    token: token,
    expires: options.expires,
    data: foundUser
  }
}



module.exports = {
  cookieToken,
  generateOTP
};