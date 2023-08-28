const UserAuthentication = require('../services/UserAuthenticationService')

const register = async(req, res) => {
  try {
    const user = await UserAuthentication.register(req.body)
    return res.json(user)
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const codeConfirmation = async (req, res) => {
  try {
    const { email } = req.params;
    const { otp } = req.body;
    const confirmedMessage = await UserAuthentication.codeConfirmation({email, otp});
    return res.json(confirmedMessage.message);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const loginData = await UserAuthentication.login(req.body, res); 
    return res.status(200).json(loginData);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const findAllUsers = async (res) => {
  try {
    const data = await UserAuthentication.findAll();
    return res.json(data.data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const findUserByEmail = async (req, res) => {
  try {
    const { email } = req.body
    const foundUser = await UserAuthentication.findByEmail(email);
    return res.json(foundUser.data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const findOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const foundUser = await UserAuthentication.findOne(id);
    return res.json(foundUser.data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, profession, image, coverImage, profileImage } = req.body
    const updatedUser = await UserAuthentication.update(id, firstName, lastName, profession, image, coverImage, profileImage);
    return res.json(updatedUser.message);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUserMessage = await UserAuthentication.deleteUser(id);
    return res.json(deletedUserMessage.message);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};



module.exports = {
  register,
  codeConfirmation,
  login,
  findAllUsers,
  findUserByEmail,
  findOneUser,
  updateUser,
  deleteUser
}