const jwt = require('jsonwebtoken')
const { JWT_SECRET, JWT_EXPIRY } = process.env

const getJwtToken = async(tokenData, tokenKey = JWT_SECRET, tokenExpiry = JWT_EXPIRY) =>{
  try {
    const token = await jwt.sign(tokenData, tokenKey, {
      expiresIn: tokenExpiry,
    });

    return token;
  } catch (error) {
    throw error
  }
}


const verifyToken = async(token) => {
  try {
    const decodedToken = await jwt.verify(token, JWT_SECRET);

    return decodedToken;    
  } catch (error) {
    throw error
  }
};


module.exports = {
  getJwtToken,
  verifyToken  
}