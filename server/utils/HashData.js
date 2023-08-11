const bcrypt = require('bcryptjs')

const hashedData = async(data, saltRounds=10) => {
  try {
    const hashedData = await bcrypt.hash(data, saltRounds);

    return hashedData;
  } catch (error) {
    throw error
  }
}



const verifyHashedData = (rawData, hashed) => {
  try {
    const isMatch = bcrypt.compare(rawData, hashed);
    return isMatch;
  } catch (error) {
    throw error
  }
}


module.exports = {
  hashedData,
  verifyHashedData
}