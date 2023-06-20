const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  profession: String,
  email: String,
  password: String,
  confirmPassword: String
})


const UserModel = mongoose.model("users", UserSchema)

module.exports = UserModel